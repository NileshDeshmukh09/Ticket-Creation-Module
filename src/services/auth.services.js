import Config from '@/config';
import axios from 'axios';

// This method will take all registeration details as data  and register the user to the server
export const signup = async (data) => {
    const req = {
        method: 'post',
        url: `${Config.baseUrl}/auth/signup`,
        data,
    };

    try { 
        await axios(req);
        return true;
    } catch (error) {
        console.log( error );
        const err = error.request.response;
       return err;
    }
};


export const userLogin = async (data ) => {
    const req = {
        method: 'post',
        url: `${Config.baseUrl}/auth/signin`,
        data,
    };

    
    const response = await axios(req);
    console.log("AuthChecked : ", response.status);
    try {
        // if()
        console.log("Response :", response.status)
        return response;
    } catch (error) {
        
        const msg = error;
        console.log("Response :", response.data.message)
        console.log("AuthService :", msg);
        return false;
    }


};
