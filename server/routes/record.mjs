import express from "express";
import db from "../DB/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("tasks");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});
// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    task: req.body.task,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
  };
  let collection = await db.collection("tasks");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});



export default router;