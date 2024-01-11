import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Gallery } from "../../typing";

const query = groq`
*[_type == "gallery"]`;

type Data = {
  gallery: Gallery[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const gallery: Gallery[] = await sanityClient.fetch(query);
  res.status(200).json({ gallery });
}
