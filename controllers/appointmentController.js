import {
  getAllAppointmentsService,
  createAppointmentService,
  updateAppointmentService,
  deleteAppointmentService
} from "../services/appointmentService.js";

// GET all appointments
export const getAllAppointments = (req, res) => {
  getAllAppointmentsService((err, result) => {
    if (err) {
      console.log("Error fetching appointments:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });
};

// CREATE appointment
export const createAppointment = (req, res) => {
  const appointmentData = req.body;

  createAppointmentService(appointmentData, (err, result) => {
    if (err) {
      console.log("Error creating appointment:", err);
      return res.status(500).json({ error: "Insert failed" });
    }

    res.status(201).json({
      message: "Appointment scheduled successfully",
      appointment_id: result.insertId
    });
  });
};

// UPDATE appointment
export const updateAppointment = (req, res) => {
  const id = req.params.id;
  const appointmentData = req.body;

  updateAppointmentService(id, appointmentData, (err) => {
    if (err) {
      console.log("Error updating appointment:", err);
      return res.status(500).json({ error: "Update failed" });
    }

    res.json({ message: "Appointment updated successfully" });
  });
};

// DELETE appointment
export const deleteAppointment = (req, res) => {
  const id = req.params.id;

  deleteAppointmentService(id, (err) => {
    if (err) {
      console.log("Error deleting appointment:", err);
      return res.status(500).json({ error: "Delete failed" });
    }

    res.json({ message: "Appointment deleted successfully" });
  });
};

