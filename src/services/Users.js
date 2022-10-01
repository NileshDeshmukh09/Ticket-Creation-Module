import axios from 'axios';
import Config from '@/config';

export const usersList = {

    listOfUsers: async ( accessToken , status , usertype ) => {

        const req = {
            method: 'GET',
            url: `${Config.baseUrl}/users`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            },
            params : {
                userStatus : status ,
                userType : usertype
            }
        }

        try {
           const response =  await axios(req);
           console.log( " Req params : ", req.params);
           return response;
           
        } catch (error) {
            console.log(error.message);
            return error;
        }
    },


    getUserByID : async( accessToken , userId) => {
        
        const req = {
            method: 'GET',
            url: `${Config.baseUrl}/users/${ userId }`,
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
    },

    updateUserByID : async ( accessToken , userId , updateData ) => {
        const req = {
            method: 'put',
            url: `${Config.baseUrl}/users/${ userId }`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            },
            data : updateData
        };
    
        try { 
           const response =  await axios(req);
            return response;
        } catch (error) {
            console.log( error );
            const err = error.request.response;
           return err;
        }
    }

    
}
