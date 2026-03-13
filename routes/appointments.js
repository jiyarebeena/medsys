import express from "express";
import {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment
} from "../controllers/appointmentController.js";

const router = express.Router();

// GET all appointments
router.get("/", getAllAppointments);

// ADD appointment
router.post("/", createAppointment);

// UPDATE appointment
router.put("/:id", updateAppointment);

// DELETE appointment
router.delete("/:id", deleteAppointment);

export default router;

