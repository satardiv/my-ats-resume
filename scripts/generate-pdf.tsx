import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import path from "node:path";
import Resume from "../src/Resume.jsx";

async function main() {
  const outputPath = path.resolve(process.cwd(), "resume.pdf");
  try {
    await renderToFile(<Resume />, outputPath);
    console.log(`PDF saved to: ${outputPath}`);
  } catch (error) {
    console.error("Failed to generate PDF:", error);
    process.exit(1);
  }
}

main();