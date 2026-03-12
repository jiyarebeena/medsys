import {
  getAllDoctorsService,
  getDoctorByIdService,
  createDoctorService,
  updateDoctorService,
  deleteDoctorService
} from "../services/doctorService.js";

// GET all doctors
export const getAllDoctors = (req, res) => {
  getAllDoctorsService((err, result) => {
    if (err) {
      console.log("Error fetching doctors:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });
};

// GET doctor by id
export const getDoctorById = (req, res) => {
  const id = req.params.id;

  getDoctorByIdService(id, (err, result) => {
    if (err) {
      console.log("Error fetching doctor:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(result[0]);
  });
};

// CREATE doctor
export const createDoctor = (req, res) => {
  const doctorData = req.body;

  createDoctorService(doctorData, (err, result) => {
    if (err) {
      console.log("Error creating doctor:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.status(201).json({
      message: "Doctor added successfully",
      doctor_id: result.insertId
    });
  });
};

// UPDATE doctor
export const updateDoctor = (req, res) => {
  const id = req.params.id;
  const doctorData = req.body;

  updateDoctorService(id, doctorData, (err, result) => {
    if (err) {
      console.log("Error updating doctor:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Doctor updated successfully" });
  });
};

// DELETE doctor
export const deleteDoctor = (req, res) => {
  const id = req.params.id;

  deleteDoctorService(id, (err, result) => {
    if (err) {
      console.log("Error deleting doctor:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({ message: "Doctor deleted successfully" });
  });
};

