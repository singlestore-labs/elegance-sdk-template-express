import express from "express";
import type { Routes } from "@singlestore/elegance-sdk/server";
import { eleganceServerClient } from "@/services/eleganceServerClient";

export const eleganceRouter = express.Router();

eleganceRouter.post("/elegance/:route", async (req, res) => {
  try {
    const route = req.params.route as Routes;
    const result = await eleganceServerClient.handleRoute(route, req.body);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(error.status).json(error);
  }
});
