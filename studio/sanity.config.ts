import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

// Replace with the project ID from the school's own Sanity project (sanity.io/manage).
const projectId = "ei1ci6j5";

export default defineConfig({
  name: "default",
  title: "Brilliant Lights Great School",
  projectId,
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
