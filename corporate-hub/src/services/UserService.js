import axios from "axios";

export const createUser = async (user) => {
    try {
        const url = 'http://127.0.0.1:8000/api/corporate-hub/register'
        const response = await axios.post(url, user, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        return response;
    } catch (error) {
        console.error(error);
    }
}

export const updateDescription = async (token, description, user_id) => {
    try {
        const data = {
            'description': description
        }
        const url = `http://127.0.0.1:8000/api/update-description/${user_id}`;
        const response = await axios.patch(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        return response;
    } catch (error) {
        console.log(error);
    }
};


export const findUser = async (searchWord) => {
    try {
        const url = `http://127.0.0.1:8000/api/search-company/${searchWord}`;
        const response = await axios.get(url)
        console.log(response.data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};