import axios from 'axios';
import Config from '@/config';

export const usersList = {

    listOfUsers: async ( accessToken ) => {

        const req = {
            method: 'GET',
            url: `${Config.baseUrl}/users`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            },
        }

        try {
           const response =  await axios(req);
           return response;
           
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }

    
}
