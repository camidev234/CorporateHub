import axios from "axios";

export const fetchAll = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/corporate-hub/get-legal-forms"
    );
    return response.data.data.legal_forms;
  } catch (error) {
    alert("Erro interno del servidor");
  }
};
