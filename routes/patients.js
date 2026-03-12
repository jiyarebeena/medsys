import express from "express";
import db from "../config/db.js";

const router = express.Router();


// GET all patients
router.get("/", (req, res) => {
  const sql = "SELECT * FROM patient";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });

    res.status(200).json(result);
  });
});


// GET single patient
router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM patient WHERE patient_id=?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });

    res.status(200).json(result);
  });
});


// ADD patient
router.post("/", (req, res) => {

  const { name, age, gender, phone, address, blood_group } = req.body;

  const sql =
    "INSERT INTO patient (name, age, gender, phone, address, blood_group) VALUES (?,?,?,?,?,?)";

  db.query(
    sql,
    [name, age, gender, phone, address, blood_group],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Insert failed" });

      res.status(201).json({ message: "Patient added successfully" });
    }
  );
});


// UPDATE patient
router.put("/:id", (req, res) => {

  const { name, age, gender, phone, address, blood_group } = req.body;

  const sql =
    "UPDATE patient SET name=?, age=?, gender=?, phone=?, address=?, blood_group=? WHERE patient_id=?";

  db.query(
    sql,
    [name, age, gender, phone, address, blood_group, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: "Update failed" });

      res.status(200).json({ message: "Patient updated successfully" });
    }
  );
});


// DELETE patient
router.delete("/:id", (req, res) => {

  const sql = "DELETE FROM patient WHERE patient_id=?";

  db.query(sql, [req.params.id], (err) => {

    if (err) {
      console.log(err); // prints error in terminal
      return res.status(500).json({ error: err.message });
    }

    res.status(200).json({ message: "Patient deleted successfully" });
  });

});

export default router;