import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { News } from "../../typing";

const query = groq`
*[_type == "news"]`;

type Data = {
  news: News[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const news: News[] = await sanityClient.fetch(query);
  res.status(200).json({ news });
}
