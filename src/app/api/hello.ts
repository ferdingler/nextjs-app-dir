import fromPublicFolder from "../../../public/data.json";
import fromApiFolder from "./data/data.json";
import fs from "fs";

const usingFsFromPublicFolder = fs.readFileSync("../../../public/data.json", "utf-8");
const usingFsFromApiRoute = fs.readFileSync("./data/data/json", "utf-8");

export default function handler() {
  return {
    fromPublicFolder,
    fromApiFolder,
    usingFsFromPublicFolder,
    usingFsFromApiRoute,
  };
}
