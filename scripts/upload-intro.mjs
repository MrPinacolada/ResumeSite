import { put } from "@vercel/blob";
import { readFile } from "node:fs/promises";

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN env");
  process.exit(1);
}

const filePath = "public/intro.mp4";
const buf = await readFile(filePath);

const blob = await put("intro.mp4", buf, {
  access: "public",
  contentType: "video/mp4",
  token,
});

console.log("Uploaded:", blob.url);
