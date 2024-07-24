import { createEleganceServerClient } from "@singlestore/elegance-sdk/server";

let cert;

fetch("https://portal.singlestore.com/static/ca/singlestore_bundle.pem")
  .then(function (response) {
    response.text().then(function (text) {
      cert = text;
    });
  })

let extraSettings;
if (process.env.REACT_APP_TIER === "shared") {
  extraSettings = {
    ssl: {
      cert
    }
  }
}

export const eleganceServerClient = createEleganceServerClient("mysql", {
  connection: {
    host: process.env.REACT_APP_DB_HOST,
    user: process.env.REACT_APP_REACT_APP_DB_USER,
    password: process.env.REACT_APP_DB_PASSWORD,
    database: process.env.REACT_APP_DB_NAME,
    port: Number(process.env.REACT_APP_DB_PORT),
    ...extraSettings
  },
  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY
    }
  }
});
