import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Event } from "../../typing";

const query = groq`
*[_type == "events"]`;

type Data = {
  events: Event[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const events: Event[] = await sanityClient.fetch(query);
  res.status(200).json({ events });
}
