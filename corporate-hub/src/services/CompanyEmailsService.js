import axios from "axios";

export const saveEmails = async (emails, user_id) => {
  try {
    const promises = emails.map(async (email) => {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/corporate-hub/save-email/${email}/${user_id}`
      );
      return response;
    });

    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.error("Error during email saving:", error);
  }
};

export const getCompanyEmails = async (user_id) => {
  try {
    const url = `http://127.0.0.1:8000/api/getEmails/${user_id}`;
    const response = await axios.get(url);

    if (response.status === 200) {
      return response.data.emails;
    }

    return response.data.alert;
  } catch (error) {
    console.error("Error during email get: ", error);
  }
};

export const deleteCompanyEmail = async (token, companyEmail_id) => {
  try {
    const url = `http://127.0.0.1:8000/api/deleteEmail/${companyEmail_id}`;
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 204) {
      return response.status;
    }
  } catch (error) {
    console.error("Error during company email deleting");
    return "internal server error";
  }
};
