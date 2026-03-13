import db from "../config/db.js";

// GET all appointments
export const findAllAppointments = (callback) => {
  db.query("SELECT * FROM appointment", callback);
};

// INSERT appointment
export const insertAppointment = (appointmentData, callback) => {
  const { patient_id, doctor_id, appointment_date } = appointmentData;

  const sql =
    "INSERT INTO appointment (patient_id, doctor_id, appointment_date) VALUES (?,?,?)";

  db.query(sql, [patient_id, doctor_id, appointment_date], callback);
};

// UPDATE appointment
export const updateAppointmentById = (id, appointmentData, callback) => {
  const { appointment_date } = appointmentData;

  const sql =
    "UPDATE appointment SET appointment_date=? WHERE appointment_id=?";

  db.query(sql, [appointment_date, id], callback);
};

// DELETE appointment
export const deleteAppointmentById = (id, callback) => {
  db.query(
    "DELETE FROM appointment WHERE appointment_id=?",
    [id],
    callback
  );
};

