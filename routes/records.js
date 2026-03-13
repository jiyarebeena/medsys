import express from "express";
import {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord
} from "../controllers/medicalRecordController.js";

const router = express.Router();

// GET all records
router.get("/", getAllRecords);

// ADD record
router.post("/", createRecord);

// UPDATE record
router.put("/:id", updateRecord);

// DELETE record
router.delete("/:id", deleteRecord);

export default router;