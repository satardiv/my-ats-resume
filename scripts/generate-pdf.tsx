import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import Resume from "../src/Resume.jsx";

async function main() {
  const outputPath = "/workspace/resume.pdf";
  try {
    await renderToFile(<Resume />, outputPath);
    console.log(`PDF saved to: ${outputPath}`);
  } catch (error) {
    console.error("Failed to generate PDF:", error);
    process.exit(1);
  }
}

main();