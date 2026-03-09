import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET all appointments
router.get("/", (req, res) => {
  db.query("SELECT * FROM appointment", (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result);
  });
});

// ADD appointment
router.post("/", (req, res) => {
  const { patient_id, doctor_id, appointment_date } = req.body;

  db.query(
    "INSERT INTO appointment (patient_id, doctor_id, appointment_date) VALUES (?,?,?)",
    [patient_id, doctor_id, appointment_date],
    (err) => {
      if (err) return res.status(500).json({ error: "Insert failed" });

      res.json({ message: "Appointment scheduled successfully" });
    }
  );
});

// UPDATE appointment
router.put("/:id", (req, res) => {
  const { appointment_date } = req.body;

  db.query(
    "UPDATE appointment SET appointment_date=? WHERE appointment_id=?",
    [appointment_date, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: "Update failed" });

      res.json({ message: "Appointment updated successfully" });
    }
  );
});

// DELETE appointment
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM appointment WHERE appointment_id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: "Delete failed" });

    res.json({ message: "Appointment deleted successfully" });
  });
});

export default router;