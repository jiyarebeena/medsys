import db from "../config/db.js";

// GET all prescriptions
export const findAllPrescriptions = (callback) => {
  db.query("SELECT * FROM prescription", callback);
};

// GET single prescription by ID
export const findPrescriptionById = (id, callback) => {
  db.query(
    "SELECT * FROM prescription WHERE prescription_id=?",
    [id],
    callback
  );
};

// INSERT prescription
export const insertPrescription = (prescriptionData, callback) => {
  const { record_id, medicine_name, dosage, duration } = prescriptionData;

  const sql =
    "INSERT INTO prescription (record_id, medicine_name, dosage, duration) VALUES (?,?,?,?)";

  db.query(sql, [record_id, medicine_name, dosage, duration], callback);
};

// UPDATE prescription
export const updatePrescriptionById = (id, prescriptionData, callback) => {
  const { medicine_name, dosage, duration } = prescriptionData;

  const sql =
    "UPDATE prescription SET medicine_name=?, dosage=?, duration=? WHERE prescription_id=?";

  db.query(sql, [medicine_name, dosage, duration, id], callback);
};

// DELETE prescription
export const deletePrescriptionById = (id, callback) => {
  db.query(
    "DELETE FROM prescription WHERE prescription_id=?",
    [id],
    callback
  );
};