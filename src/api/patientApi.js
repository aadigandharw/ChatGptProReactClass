import axios from "axios";

export const getPatientData = async ()=>{

    const Response = await axios.get("http://127.0.0.1:8000/patient")
    return Response.data
}


export const postPatientData = async ()=>{
    const Response = await axios.post("http://127.0.0.1:8000/patient")
    return Response.data
}


export const DeletePatientData = async ()=>{
    const Response = await axios.post("http://127.0.0.1:8000/patient")
    return Response.data
}