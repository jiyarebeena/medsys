import db from "../config/db.js";

// get all doctors
export const findAllDoctors = (callback) => {
  db.query("SELECT * FROM doctor", callback);
};

// get doctor by id
export const findDoctorById = (id, callback) => {
  db.query("SELECT * FROM doctor WHERE doctor_id = ?", [id], callback);
};

// create doctor
export const insertDoctor = (doctorData, callback) => {
  const { name, specialization, phone, email } = doctorData;

  const sql =
    "INSERT INTO doctor (name, specialization, phone, email) VALUES (?,?,?,?)";

  db.query(sql, [name, specialization, phone, email], callback);
};

// update doctor
export const updateDoctorById = (id, doctorData, callback) => {
  const { name, specialization, phone, email } = doctorData;

  const sql =
    "UPDATE doctor SET name=?, specialization=?, phone=?, email=? WHERE doctor_id=?";

  db.query(sql, [name, specialization, phone, email, id], callback);
};

// delete doctor
export const deleteDoctorById = (id, callback) => {
  db.query("DELETE FROM doctor WHERE doctor_id=?", [id], callback);
};

