import Router from 'vue-router';
import SignupPage from '@/components/SignupPage';
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';
import CustomerHome from '@/components/Customer/CustomerHome';
import AddNewTicket from '@/components/Customer/AddNewTicket';
import UpdateTicket from '@/components/Customer/UpdateTicket';
import EngineerSignup from '@/components/Engineer/EngineerSignup';
import AdminHome from '@/components/Admin/AdminHome';


const router = new Router({
    mode: 'history',
    routes: [
      {
        name: 'Home',
        path: '/',
        component: HomePage,
      },

      {
        name: 'Signup',
        path: '/signup',
        component: SignupPage,
      },

      {
        name: 'login',
        path: '/login',
        component: LoginPage,
      },

      /** Customer */

      {
        name : 'CustomerHome',
        path : '/customers/tickets',
        component : CustomerHome,
      },
      {
        name : 'AddNewTicket',
        path : '/customers/tickets/add',
        component : AddNewTicket,
      },
      {
        name : 'UpdateTicket',
        path : '/customers/tickets/:ticketId',
        component : UpdateTicket,
      },

      /** Engineer  */

      {
        name : 'EngineerSignup',
        path : '/engineer/signup',
        component : EngineerSignup,
      },

      /** ADMIN */

      {
        name : "AdminHome" , 
        path : '/admin',
        component : AdminHome
      },

     
      
      
    ],
  });
  
  export default router;