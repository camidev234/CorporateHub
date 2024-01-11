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
