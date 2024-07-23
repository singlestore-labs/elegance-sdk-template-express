import { createEleganceServerClient } from "@singlestore/elegance-sdk/server";

let cert;

fetch("https://portal.singlestore.com/static/ca/singlestore_bundle.pem")
  .then(function (response) {
    response.text().then(function (text) {
      cert = text;
    });
  })

export const eleganceServerClient = createEleganceServerClient("mysql", {
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    ssl: { cert }
  },
  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY
    }
  }
});
