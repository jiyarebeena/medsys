import {
  getAllRecordsService,
  createRecordService,
  updateRecordService,
  deleteRecordService
} from "../services/medicalRecordService.js";

// GET all medical records
export const getAllRecords = (req, res) => {
  getAllRecordsService((err, result) => {
    if (err) {
      console.log("Error fetching records:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });
};

// CREATE medical record
export const createRecord = (req, res) => {
  const recordData = req.body;

  createRecordService(recordData, (err, result) => {
    if (err) {
      console.log("Error creating record:", err);
      return res.status(500).json({ error: "Insert failed" });
    }

    res.status(201).json({
      message: "Medical record added successfully",
      record_id: result.insertId
    });
  });
};

// UPDATE medical record
export const updateRecord = (req, res) => {
  const id = req.params.id;
  const recordData = req.body;

  updateRecordService(id, recordData, (err) => {
    if (err) {
      console.log("Error updating record:", err);
      return res.status(500).json({ error: "Update failed" });
    }

    res.json({ message: "Record updated successfully" });
  });
};

// DELETE medical record
export const deleteRecord = (req, res) => {
  const id = req.params.id;

  deleteRecordService(id, (err) => {
    if (err) {
      console.log("Error deleting record:", err);
      return res.status(500).json({ error: "Delete failed" });
    }

    res.json({ message: "Record deleted successfully" });
  });
};

