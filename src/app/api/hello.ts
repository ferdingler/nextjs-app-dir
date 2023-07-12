import type { NextApiRequest, NextApiResponse } from 'next';
import fromPublicFolder from "../../../public/data.json";
import fromApiFolder from "./data/data.json";

type Data = {
  fromPublicFolder: any;
  fromApiFolder: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    fromPublicFolder,
    fromApiFolder,
  })
}
