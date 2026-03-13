import {
  getAllPrescriptionsService,
  getPrescriptionByIdService,
  createPrescriptionService,
  updatePrescriptionService,
  deletePrescriptionService
} from "../services/prescriptionService.js";

// GET all prescriptions
export const getAllPrescriptions = (req, res) => {
  getAllPrescriptionsService((err, result) => {
    if (err) {
      console.log("Error fetching prescriptions:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });
};

// GET single prescription by ID
export const getPrescriptionById = (req, res) => {
  const id = req.params.id;

  getPrescriptionByIdService(id, (err, result) => {
    if (err) {
      console.log("Error fetching prescription:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });
};

// CREATE prescription
export const createPrescription = (req, res) => {
  const prescriptionData = req.body;

  createPrescriptionService(prescriptionData, (err, result) => {
    if (err) {
      console.log("Error creating prescription:", err);
      return res.status(500).json({ error: "Insert failed" });
    }

    res.status(201).json({
      message: "Prescription added successfully",
      prescription_id: result.insertId
    });
  });
};

// UPDATE prescription
export const updatePrescription = (req, res) => {
  const id = req.params.id;
  const prescriptionData = req.body;

  updatePrescriptionService(id, prescriptionData, (err) => {
    if (err) {
      console.log("Error updating prescription:", err);
      return res.status(500).json({ error: "Update failed" });
    }

    res.json({ message: "Prescription updated successfully" });
  });
};

// DELETE prescription
export const deletePrescription = (req, res) => {
  const id = req.params.id;

  deletePrescriptionService(id, (err) => {
    if (err) {
      console.log("Error deleting prescription:", err);
      return res.status(500).json({ error: "Delete failed" });
    }

    res.json({ message: "Prescription deleted successfully" });
  });
};