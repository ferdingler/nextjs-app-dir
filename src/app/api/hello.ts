import fromPublicFolder from "../../../public/data.json";
import fromApiFolder from "./data/data.json";

export default function handler() {
  return {
    fromPublicFolder,
    fromApiFolder,
  };
}
