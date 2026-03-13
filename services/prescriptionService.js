import {
  findAllPrescriptions,
  findPrescriptionById,
  insertPrescription,
  updatePrescriptionById,
  deletePrescriptionById
} from "../repositories/prescriptionRoutes.js";

// GET all prescriptions
export const getAllPrescriptionsService = (callback) => {
  findAllPrescriptions(callback);
};

// GET single prescription by ID
export const getPrescriptionByIdService = (id, callback) => {
  findPrescriptionById(id, callback);
};

// CREATE prescription
export const createPrescriptionService = (prescriptionData, callback) => {
  insertPrescription(prescriptionData, callback);
};

// UPDATE prescription
export const updatePrescriptionService = (id, prescriptionData, callback) => {
  updatePrescriptionById(id, prescriptionData, callback);
};

// DELETE prescription
export const deletePrescriptionService = (id, callback) => {
  deletePrescriptionById(id, callback);
};