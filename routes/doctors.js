import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET all doctors
router.get("/", (req, res) => {
  db.query("SELECT * FROM doctor", (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result);
  });
});

// GET single doctor
router.get("/:id", (req, res) => {
  db.query("SELECT * FROM doctor WHERE doctor_id=?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(result);
  });
});

// ADD doctor
router.post("/", (req, res) => {
  const { name, specialization, phone, email } = req.body;

  const sql =
    "INSERT INTO doctor (name, specialization, phone, email) VALUES (?,?,?,?)";

  db.query(sql, [name, specialization, phone, email], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Insert failed" });
    }

    res.json({ message: "Doctor added successfully" });
  });
});
// UPDATE doctor
router.put("/:id", (req, res) => {
  const { name, specialization, phone } = req.body;

  db.query(
    "UPDATE doctor SET name=?, specialization=?, phone=? WHERE doctor_id=?",
    [name, specialization, phone, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: "Update failed" });

      res.json({ message: "Doctor updated successfully" });
    }
  );
});

// DELETE doctor
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM doctor WHERE doctor_id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: "Delete failed" });

    res.json({ message: "Doctor deleted successfully" });
  });
});

export default router;