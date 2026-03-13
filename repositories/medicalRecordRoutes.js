import db from "../config/db.js";

// GET all medical records
export const getAllRecords = (callback) => {
  const sql = "SELECT * FROM medical_record";

  db.query(sql, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// INSERT medical record
export const createRecord = (recordData, callback) => {
  const { patient_id, doctor_id, diagnosis, treatment, visit_date } = recordData;

  const sql = `
    INSERT INTO medical_record
    (patient_id, doctor_id, diagnosis, treatment, visit_date)
    VALUES (?,?,?,?,?)
  `;

  db.query(
    sql,
    [patient_id, doctor_id, diagnosis, treatment, visit_date],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    }
  );
};

// UPDATE medical record
export const updateRecord = (id, recordData, callback) => {
  const { diagnosis, treatment } = recordData;

  const sql = `
    UPDATE medical_record
    SET diagnosis=?, treatment=?
    WHERE record_id=?
  `;

  db.query(sql, [diagnosis, treatment, id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// DELETE medical record
export const deleteRecord = (id, callback) => {
  const sql = "DELETE FROM medical_record WHERE record_id=?";

  db.query(sql, [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};