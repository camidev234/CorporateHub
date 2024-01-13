import axios from "axios";

export let errorService = '';

export const loginUser = async (nit, password) => {
  try {
    const data = {
      company_nit: nit,
      password: password,
    };
    const url = "http://127.0.0.1:8000/api/corporate-hub/login";
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response;
  } catch (error) {
    errorService = error.response.status;
  }
};
