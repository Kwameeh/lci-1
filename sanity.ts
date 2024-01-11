import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "m0gulkyq",
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
  basePath: "/studio",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  return createImageUrlBuilder(config).image(source);
};
