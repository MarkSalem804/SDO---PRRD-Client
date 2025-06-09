import axios from "axios";

const customError = new Error("Network error or no response");
const BASE_URL = "http://localhost:5002/onelink";

// Add Data Context
export const addDataContext = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/addContext`, data);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};

// Add Section
export const addSection = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/addSection`, data);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};

// Add Content
export const addContent = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/addContent`, data);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};

// Get all sections
export const getSections = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sections`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};

// Get all contexts
export const getContexts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contexts`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};

// Get all contents
export const getContents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contents`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};

// Delete Section
export const deleteSection = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/sections/${id}`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};

// Delete Context
export const deleteContext = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/contexts/${id}`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};

// Delete Content
export const deleteContent = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/contents/${id}`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw customError;
    }
    throw error.response.data;
  }
};
