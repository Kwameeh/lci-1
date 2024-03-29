import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Location } from "../../typing";

const query = groq`
*[_type == "location"]`;

type Data = {
  locations: Location[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const locations: Location[] = await sanityClient.fetch(query);
  res.status(200).json({ locations });
}
