/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

// import { visionTool } from "@sanity/vision";
// import { defineConfig } from "sanity";
// import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import { apiVersion, dataset, projectId } from "./env";
// import { schemaTypes } from "./schemas";

// export default defineConfig({
//   basePath: "/studio",
//   projectId,
//   dataset,
// Add and edit the content schema in the './sanity/schema' folder
// schemaTypes,
// plugins: [
//   deskTool(),
// Vision is a tool that lets you query your content with GROQ in the studio
// https://www.sanity.io/docs/the-vision-plugin
//     visionTool({ defaultApiVersion: apiVersion }),
//   ],
// });

//

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

export default defineConfig({
  basePath: "/studio",
  name: "LCI_CONTENT_STUDIO",
  title: "lci-admin",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
