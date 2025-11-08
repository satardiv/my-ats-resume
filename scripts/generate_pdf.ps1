param(
  [string]$SourceData = "src\data.js",
  [string]$OutPdf = "C:\Users\Divya Satar\OneDrive\Divya Satar\Resume\New folder\To refer\Customised\Divya_Satar_Resume.pdf"
)

if ([string]::IsNullOrWhiteSpace($PSScriptRoot)) { $repoRoot = (Get-Location).Path } else { $repoRoot = Split-Path -Parent $PSScriptRoot }
$dataPath = Join-Path $repoRoot $SourceData
if (-not (Test-Path $dataPath)) { Write-Error "Data file not found: $dataPath"; exit 1 }

if (Test-Path $OutPdf) {
  $timestamp = (Get-Date).ToString('yyyyMMddHHmmss')
  Copy-Item -Path $OutPdf -Destination "$OutPdf.bak.$timestamp" -Force
}

# read data.js and remove export line
$dataJs = Get-Content -Raw -Path $dataPath
$dataJs = $dataJs -replace 'export\s+default\s+data\s*;?', ''

# prepare tmp html
$scriptsDir = Join-Path $repoRoot "scripts"
if (-not (Test-Path $scriptsDir)) { New-Item -Path $scriptsDir -ItemType Directory -Force | Out-Null }
$tmpHtml = Join-Path $scriptsDir "tmp_resume.html"

# single-quoted here-string; renderer uses string concatenation (no `${}` or backticks)
$htmlTemplate = @'
<!doctype html>
<html><head><meta charset="utf-8"><title>Resume</title>
<style>body{font-family:Arial,Helvetica,sans-serif;max-width:800px;margin:28px auto;color:#222}h1{margin:0} .muted{color:#666}</style>
</head><body><div id="root"></div>
<script>
__DATA_JS__
</script>
<script>
(function(d){
  if(!d||typeof d!=='object'){document.getElementById('root').innerText='No data';return;}
  var p = d.personal || {};
  var contacts = (p.contacts || []).map(function(x){ return x.label; }).join(' • ');
  var out = '';
  out += '<h1>' + (p.name||'') + '</h1>';
  out += '<div class="muted">' + (p.designation||'') + (contacts ? ' · ' + contacts : '') + '</div>';
  if(d.summary) out += '<section><h3>Summary</h3><div>' + d.summary + '</div></section>';
  if(d.experience && d.experience.length){
    out += '<section><h3>Experience</h3>';
    d.experience.forEach(function(e){
      out += '<div style="margin-top:8px"><strong>' + (e.role||'') + '</strong> — ' + (e.company||'') + ' <span class="muted">(' + (e.from||'') + ' - ' + (e.till||'') + ')</span>';
      if(e.achievements){
        out += '<ul>';
        e.achievements.forEach(function(a){ out += '<li>' + a + '</li>'; });
        out += '</ul>';
      }
      out += '</div>';
    });
    out += '</section>';
  }
  if(d.education && d.education.length){
    out += '<section><h3>Education</h3>';
    d.education.forEach(function(ed){
      out += '<div><strong>' + (ed.certification||'') + '</strong> — ' + (ed.institution||'') + ' <span class="muted">(' + (ed.from||'') + ' - ' + (ed.till||'') + ')</span></div>';
    });
    out += '</section>';
  }
  if(d.skills && d.skills.length){
    out += '<section><h3>Skills</h3><div>' + d.skills.join(', ') + '</div></section>';
  }
  document.getElementById('root').innerHTML = out;
})(data);
</script>
</body></html>
'@

# insert dataJS safely
$html = $htmlTemplate.Replace('__DATA_JS__', $dataJs)

Set-Content -Path $tmpHtml -Value $html -Encoding UTF8

$browserCandidates = @(
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
  "C:\Program Files\Google\Chrome\Application\chrome.exe"
)
$browser = $browserCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { Write-Error "Edge/Chrome not found."; Remove-Item $tmpHtml -ErrorAction SilentlyContinue; exit 1 }

$absHtml = (Resolve-Path $tmpHtml).Path -replace '\\','/'
$fileUrl = "file:///$absHtml"
Write-Output "Generating PDF to: $OutPdf using $browser"
& $browser --headless --disable-gpu --print-to-pdf="$OutPdf" $fileUrl

Remove-Item $tmpHtml -ErrorAction SilentlyContinue

if (Test-Path $OutPdf) { Write-Output "PDF written: $OutPdf" } else { Write-Error "PDF generation failed." }