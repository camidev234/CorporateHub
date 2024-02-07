import axios from "axios";

export const saveComment = async (comment) => {
  try {
    const url = "http://127.0.0.1:8000/api/corporate-hub/save-comment";
    const response = await axios.post(url, comment, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
