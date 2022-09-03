import Router from 'vue-router';
import SignupPage from '@/components/SignupPage';
import LoginPage from '@/components/LoginPage';
import HomePage from '@/components/HomePage';
import CustomerHome from '@/components/Customer/CustomerHome';
import AddNewTicket from '@/components/Customer/AddNewTicket';
import UpdateTicket from '@/components/Customer/UpdateTicket';
import EngineerSignup from '@/components/Engineer/EngineerSignup';
import AdminHome from '@/components/Admin/AdminHome';
import UsersList from '@/components/Admin/UsersList';
import GivePermission from '@/components/Admin/GivePermissions';
import ViewUser from '@/components/Admin/ViewUser';
import EditUser from '@/components/Admin/EditUser';
import EngineerHome from '@/components/Engineer/EngineerHome';


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

      {
        name : "UsersList" , 
        path : '/admin/users',
        component : UsersList
      },

      {
        name : "GivePermission" , 
        path : '/admin/permissions',
        component : GivePermission
      },

      {
        name : "viewUser" , 
        path : '/admin/users/:userId',
        component : ViewUser
      },

      {
        name : "EditUser" , 
        path : '/admin/users/:userId/edit',
        component : EditUser
      },

      {
        name : "EngineerHome",
        path : "/engineer",
        component : EngineerHome
      }


     
      
      
    ],
  });
  
  export default router;