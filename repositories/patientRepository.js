import db from "../config/db.js";

export const getPatients = () => {
 return new Promise((resolve,reject)=>{
  db.query("SELECT * FROM Patient",(err,data)=>{
   if(err) reject(err);
   else resolve(data);
  });
 });
};

export const createPatient = (patient) => {
 return new Promise((resolve,reject)=>{
  db.query("INSERT INTO Patient SET ?",patient,(err,data)=>{
   if(err) reject(err);
   else resolve(data);
  });
 });
};