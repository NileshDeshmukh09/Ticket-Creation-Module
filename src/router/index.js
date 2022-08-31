import Router from 'vue-router';
import SignupPage from '@/components/SignupPage';
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';
import CustomerHome from '@/components/Customer/CustomerHome';
import AddNewTicket from '@/components/Customer/AddNewTicket';
import UpdateTicket from '@/components/Customer/UpdateTicket';
import EngineerSignup from '@/components/Engineer/EngineerSignup';


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
      {
        name : 'EngineerSignup',
        path : '/engineer/signup',
        component : EngineerSignup,
      },

     
      
      
    ],
  });
  
  export default router;