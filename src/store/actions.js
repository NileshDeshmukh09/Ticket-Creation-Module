import {  userLogin } from '@/services/auth.services';

export const login = async ( { commit } , data ) => {
    
    const response = await userLogin(data);
    if( response !== false ){
        const {
            message ,
            user : {
                name ,
                userId ,
                email ,
                userType ,
                userStatus , 
                accessToken , 
            } , 
        } = response.data ;

        localStorage.setItem(MESSAGE  , message);
        localStorage.setItem(NAME , name);
        localStorage.setItem(USERID , userId);
        localStorage.setItem(EMAIL , email);
        localStorage.setItem(USERTYPE , userType);
        localStorage.setItem(USERSTATUS  , userStatus);
        localStorage.setItem(TOKEN_KEY , accessToken);

        commit('setToken', accessToken);
        commit('setMessage', message);
        commit('setEmail', email);
        commit('setName', name);
        return true;
        
    }
}