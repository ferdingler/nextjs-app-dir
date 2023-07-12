import type { NextApiRequest, NextApiResponse } from 'next';
import dataFromPublicFolder from "../../public/data.json";
import dataFromApiFolder from "./data/data.json";

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    fromPublicFolder: JSON.stringify(dataFromPublicFolder),
    dataFromApiFolder: JSON.stringify(dataFromApiFolder),
  })
}
