import {
  findAllAppointments,
  insertAppointment,
  updateAppointmentById,
  deleteAppointmentById
} from "../repositories/appointmentRoutes.js";

// GET all appointments
export const getAllAppointmentsService = (callback) => {
  findAllAppointments(callback);
};

// CREATE appointment
export const createAppointmentService = (appointmentData, callback) => {
  insertAppointment(appointmentData, callback);
};

// UPDATE appointment
export const updateAppointmentService = (id, appointmentData, callback) => {
  updateAppointmentById(id, appointmentData, callback);
};

// DELETE appointment
export const deleteAppointmentService = (id, callback) => {
  deleteAppointmentById(id, callback);
};

