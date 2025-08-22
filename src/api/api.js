// src/api.js
import axios from "axios";

// Apna backend base URL daalna (Django ya Flask ka host/port)
const API_BASE_URL = "http://127.0.0.1:8000/student/"; 

// GET All Students
export const getStudents = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

// GET Single Student by ID
export const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error);
    throw error;
  }
};

// CREATE Student
export const createStudent = async (studentData) => {
  try {
    const response = await axios.post(API_BASE_URL, studentData);
    return response.data;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};

// UPDATE Student
export const updateStudent = async (id, studentData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${id}/`, studentData);
    return response.data;
  } catch (error) {
    console.error(`Error updating student with ID ${id}:`, error);
    throw error;
  }
};

// DELETE Student
export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}${id}/`);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting student with ID ${id}:`, error);
    throw error;
  }
};
