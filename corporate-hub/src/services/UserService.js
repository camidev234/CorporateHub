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