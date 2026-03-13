import {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord
} from "../repositories/medicalRecordRoutes.js";

// GET all medical records
export const getAllRecordsService = (callback) => {
  getAllRecords(callback);
};

// CREATE medical record
export const createRecordService = (recordData, callback) => {
  const { patient_id, doctor_id, diagnosis, treatment, visit_date } = recordData;

  if (!patient_id || !doctor_id || !diagnosis || !treatment || !visit_date) {
    return callback(new Error("Missing required fields"));
  }

  createRecord(recordData, callback);
};

// UPDATE medical record
export const updateRecordService = (id, recordData, callback) => {
  const { diagnosis, treatment } = recordData;

  if (!diagnosis || !treatment) {
    return callback(new Error("Diagnosis and treatment required"));
  }

  updateRecord(id, recordData, callback);
};

// DELETE medical record
export const deleteRecordService = (id, callback) => {
  if (!id) {
    return callback(new Error("Record ID required"));
  }

  deleteRecord(id, callback);
};