const MESSAGE = 'message';
const NAME = 'name';
const USERID = 'userId';
const EMAIL = 'email';
const USERTYPE = 'userType';
const USERSTATUS = 'userStatus';
const TOKEN_KEY = 'accessToken';

export default {
 
    message : localStorage.getItem( MESSAGE ),
    name : localStorage.getItem( NAME ),
    userId : localStorage.getItem( USERID ),
    Email : localStorage.getItem( EMAIL ),
    userType : localStorage.getItem( USERTYPE ),
    userStatus : localStorage.getItem( USERSTATUS ),
    accessToken : localStorage.getItem( TOKEN_KEY ),
}