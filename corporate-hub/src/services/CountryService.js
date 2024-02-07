import axios from "axios";

export const fetchAll = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/corporate-hub/get-countries"
    );

    return response.data.data.countries;
  } catch (error) {
    console.error("Internal server error");
    throw error;
  }
};
