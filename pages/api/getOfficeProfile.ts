import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { OfficeProfile } from "../../typing";

const query = groq`
*[_type == "officeProfile"]`;

type Data = {
  officeProfile: OfficeProfile[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const officeProfile: OfficeProfile[] = await sanityClient.fetch(query);
  res.status(200).json({ officeProfile });
}
