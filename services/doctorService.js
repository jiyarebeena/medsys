import {
  findAllDoctors,
  findDoctorById,
  insertDoctor,
  updateDoctorById,
  deleteDoctorById
} from "../repositories/doctorRoutes.js";

// GET all doctors
export const getAllDoctorsService = (callback) => {
  findAllDoctors(callback);
};

// GET doctor by id
export const getDoctorByIdService = (id, callback) => {
  findDoctorById(id, callback);
};

// CREATE doctor
export const createDoctorService = (doctorData, callback) => {
  findDoctorById(doctorData.id, (err, result) => {
    if (err) return callback(err);

    insertDoctor(doctorData, callback);
  });
};

// UPDATE doctor
export const updateDoctorService = (id, doctorData, callback) => {
  updateDoctorById(id, doctorData, callback);
};

// DELETE doctor
export const deleteDoctorService = (id, callback) => {
  deleteDoctorById(id, callback);
};

