import express from "express";
import {
  getAllPrescriptions,
  getPrescriptionById,
  createPrescription,
  updatePrescription,
  deletePrescription
} from "../controllers/prescriptionController.js";

const router = express.Router();

// GET all prescriptions
router.get("/", getAllPrescriptions);

// GET single prescription
router.get("/:id", getPrescriptionById);

// ADD prescription
router.post("/", createPrescription);

// UPDATE prescription
router.put("/:id", updatePrescription);

// DELETE prescription
router.delete("/:id", deletePrescription);

export default router;