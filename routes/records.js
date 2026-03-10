import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET records
router.get("/", (req, res) => {
  db.query("SELECT * FROM medical_record", (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result);
  });
});

// ADD record
router.post("/", (req, res) => {
  const { patient_id, doctor_id, diagnosis, treatment, visit_date } = req.body;

  const sql =
    "INSERT INTO medical_record (patient_id, doctor_id, diagnosis, treatment, visit_date) VALUES (?,?,?,?,?)";

  db.query(sql, [patient_id, doctor_id, diagnosis, treatment, visit_date], (err) => {
    if (err) return res.status(500).json({ error: "Insert failed" });

    res.json({ message: "Medical record added successfully" });
  });
});

// UPDATE record
router.put("/:id", (req, res) => {
  const { diagnosis, treatment } = req.body;

  db.query(
    "UPDATE medical_record SET diagnosis=?, treatment=? WHERE record_id=?",
    [diagnosis, treatment, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: "Update failed" });

      res.json({ message: "Record updated successfully" });
    }
  );
});

// DELETE record
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM medical_record WHERE record_id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: "Delete failed" });

    res.json({ message: "Record deleted successfully" });
  });
});

export default router;