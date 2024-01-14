import axios from "axios";

export const savePhones = async (phones, user_id) => {
  try {
    const phonePromises = phones.map(async (phone) => {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/corporate-hub/save-phone/${phone}/${user_id}`
      );
      console.log(response);
      return response;
    });

    const responses = await Promise.all(phonePromises);
    console.log(responses);
  } catch (error) {
    console.error(error);
  }
};

export const getCompanyPhones = async (token, user_id) => {
  try {
    const url = `http://127.0.0.1:8000/api/getPhones/${user_id}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if(response.status === 200) {
      return response.data.phones;
    }

    return response.data.alert;
    
  } catch (error) {
    console.error('Error during phones get: ', error);
  }
};
