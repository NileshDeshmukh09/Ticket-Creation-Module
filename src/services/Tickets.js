/* 
    This file contains the services which we used to add New Tickets and add a Team .
*/
import axios from 'axios';
import Config from '@/config';


export const ticketsMethod = {
    /*

    CreateTickets methods contains the data and token as a parameter
    which contains all the required data and needed to create Tickets 

    */

    createTicket: async (addData, accessToken) => {

        const req = {
            method: 'POST',
            url: `${Config.baseUrl}/tickets`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            },
            data: addData,
        }

        try {
            await axios(req);
            return true;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    } , 


    updateTicket : async ( updateData , accessToken , contactId )=>{
        const req = {
            method: 'PUT',
            url: `${Config.baseUrl}/tickets/${ contactId }`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': accessToken,
            },
            data: updateData,
        }

        
        try {
            await axios(req);
            return true;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

}