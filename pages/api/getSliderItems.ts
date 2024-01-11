import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Location, SliderItems } from "../../typing";

const query = groq`
*[_type == "sliderItems"]`;

type Data = {
  sliderItems: SliderItems[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const sliderItems: SliderItems[] = await sanityClient.fetch(query);
  res.status(200).json({ sliderItems });
}
