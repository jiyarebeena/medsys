import * as repo from "../repositories/patientRepository.js";

export const fetchPatients = async ()=>{
 return await repo.getPatients();
};

export const addPatient = async(data)=>{
 return await repo.createPatient(data);
};