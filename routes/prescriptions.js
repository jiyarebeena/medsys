import express from "express";
import db from "../config/db.js";

const router = express.Router();


// 1️⃣ GET all prescriptions
router.get("/", (req, res) => {
  const sql = "SELECT * FROM prescription";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });
});


// 2️⃣ GET single prescription
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM prescription WHERE prescription_id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });
});


// 3️⃣ ADD prescription
router.post("/", (req, res) => {
  const { record_id, medicine_name, dosage, duration } = req.body;

  const sql =
    "INSERT INTO prescription (record_id, medicine_name, dosage, duration) VALUES (?,?,?,?)";

  db.query(sql, [record_id, medicine_name, dosage, duration], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Insert failed" });
    }

    res.json({
      message: "Prescription added successfully",
      prescription_id: result.insertId
    });
  });
});


// 4️⃣ UPDATE prescription
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { medicine_name, dosage, duration } = req.body;

  const sql =
    "UPDATE prescription SET medicine_name=?, dosage=?, duration=? WHERE prescription_id=?";

  db.query(sql, [medicine_name, dosage, duration, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Update failed" });
    }

    res.json({ message: "Prescription updated successfully" });
  });
});


// 5️⃣ DELETE prescription
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM prescription WHERE prescription_id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Delete failed" });
    }

    res.json({ message: "Prescription deleted successfully" });
  });
});


export default router;