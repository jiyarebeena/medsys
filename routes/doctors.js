import express from "express";
import {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
} from "../controllers/doctorController.js";

const router = express.Router();

// GET all doctors
router.get("/", getAllDoctors);

// GET single doctor
router.get("/:id", getDoctorById);

// ADD doctor
router.post("/", createDoctor);

// UPDATE doctor
router.put("/:id", updateDoctor);

// DELETE doctor
router.delete("/:id", deleteDoctor);

export default router;