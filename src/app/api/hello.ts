import fromPublicFolder from "../../../public/data.json";
import fromApiFolder from "./data/data.json";
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler() {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');

  // Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  const pdfContents = await fs.readFile(jsonDirectory + '/zero2prod.pdf', 'utf8');

  return {
    fromPublicFolder,
    fromApiFolder,
    usingFs: fileContents,
    pdfContents,
  };
}
