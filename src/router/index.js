import Router from 'vue-router';
import SignupPage from '@/components/SignupPage';
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';
import CustomerHome from '@/components/Customer/CustomerHome';
import AddNewTicket from '@/components/Customer/AddNewTicket';


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
      }
     
      
      
    ],
  });
  
  export default router;