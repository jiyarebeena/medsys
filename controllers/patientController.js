import * as service from "../services/patientService.js";

export const getPatients = async(req,res,next)=>{
 try{
  const data = await service.fetchPatients();
  res.json(data);
 }catch(err){
  next(err);
 }
};

export const createPatient = async(req,res,next)=>{
 try{
  await service.addPatient(req.body);
  res.json({message:"Patient Added"});
 }catch(err){
  next(err);
 }
};