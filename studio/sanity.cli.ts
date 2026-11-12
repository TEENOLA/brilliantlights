import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "ei1ci6j5",
    dataset: "production",
  },
  // Gives the Studio a friendly address: brilliantlights.sanity.studio
  studioHost: "brilliantlights",
});
