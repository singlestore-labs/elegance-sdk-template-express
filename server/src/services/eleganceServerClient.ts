import { createEleganceServerClient } from "@singlestore/elegance-sdk/server";

export const eleganceServerClient = createEleganceServerClient("kai", {
  connection: {
    uri: process.env.DB_URI ?? "",
    database: process.env.DB_NAME ?? ""
  },
  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY
    }
  }
});
