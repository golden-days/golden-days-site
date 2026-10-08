#!/usr/bin/env node
/**
 * Lists every piece of draft content still in the site: the "[PLACEHOLDER]"
 * marker and the fake phone number (916) 555-0100.
 *
 * Run it yourself any time:
 *
 *     npm run check-placeholders
 *
 * It also runs before `next build`:
 *
 *   - Vercel production build (VERCEL_ENV=production): fails if anything is left.
 *   - Vercel preview build, and your own computer: prints the list and passes,
 *     so you can keep previewing the draft.
 *
 * Add `--strict` to make it fail anywhere, which is handy for testing.
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const projectRoot = path.resolve(import.meta.dirname, "..");
const searchDirectories = ["app", "components", "content", "lib"];
const textFileExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css"]);

const marker = "[PLACEHOLDER]";
const fakePhonePattern = /\(?916\)?[\s.-]?555[\s.-]?0100/;

async function collectFiles(directory) {
  const files = [];
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else if (textFileExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

async function findDraftContent() {
  const findings = [];
  for (const directory of searchDirectories) {
    const files = await collectFiles(path.join(projectRoot, directory));
    for (const file of files.sort()) {
      const lines = (await readFile(file, "utf8")).split("\n");
      lines.forEach((line, index) => {
        const hasMarker = line.includes(marker);
        const hasFakePhone = fakePhonePattern.test(line);
        if (!hasMarker && !hasFakePhone) return;
        findings.push({
          file: path.relative(projectRoot, file),
          line: index + 1,
          kind: hasMarker ? "placeholder text" : "fake phone number",
          text: line.trim().slice(0, 120),
        });
      });
    }
  }
  return findings;
}

const findings = await findDraftContent();
const strict = process.argv.includes("--strict") || process.env.VERCEL_ENV === "production";

if (process.env.VERCEL_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.error(
    "check-placeholders: FAILED. Set NEXT_PUBLIC_SITE_URL (for example https://www.goldendays.com) in Vercel before a production build.",
  );
  process.exit(1);
}

if (findings.length === 0) {
  console.log("check-placeholders: no draft content found. Ready for a production build.");
  process.exit(0);
}

console.log(`check-placeholders: found ${findings.length} item(s) of draft content.\n`);

let currentFile = "";
for (const finding of findings) {
  if (finding.file !== currentFile) {
    currentFile = finding.file;
    console.log(currentFile);
  }
  console.log(`  line ${String(finding.line).padStart(4)}  ${finding.kind}: ${finding.text}`);
}

const markerCount = findings.filter((f) => f.kind === "placeholder text").length;
const phoneCount = findings.length - markerCount;
console.log(`\n  ${markerCount} line(s) with ${marker}`);
console.log(`  ${phoneCount} line(s) with the fake phone number`);

if (strict) {
  console.error(
    "\ncheck-placeholders: FAILED. Replace the draft content above before building for production.",
  );
  process.exit(1);
}

console.log(
  "\ncheck-placeholders: this is a draft build, so the build will continue. A Vercel production build would fail here.",
);
process.exit(0);
