<template>
  <div>
    <EngineerNavBar />
    <!-- <h1>Engineer Home !</h1> -->
    <h1 class="text-center text-white bg-primary">Users List</h1>
    <h5>LIST OF THE Tickets :</h5>
    <!-- <pre>{{ ticketsList.data }}</pre> -->
    <div class="totalTIckets btn bg-light fw-bold">
      Total Tickets :
      <span class="text-secondary"> {{ ticketsList.data.tickets.length }}</span>
    </div>

      <div
      class="users p-2"
      v-for="ticket in ticketsList.data.tickets"
      :key="ticket.id"
    >
      <div class="userslist container">
        <div class="username d-flex justify-content-between">
          <h1 class="name">
            {{ ticket.title }}
            <!-- Name -->
            </h1>
          <!-- <div class="buttons  d-flex justify-content-between"> -->
            <!-- <button class="delete btn btn-sm  fw-bold"><router-link :to="`/admin/users/${ticket.id}`" class="text-decoration-none">View</router-link> </button>
            <button class="edit btn btn-sm fw-bold"><router-link :to="`/admin/users/${ticket.id}/edit`" class="text-decoration-none">Edit</router-link></button> -->
          <!-- </div> -->
        </div>

        <div class="usersValue d-flex justify-content-between">
          <p class="userId text-secondary">
            {{ ticket.description }}
            <!-- userTYpe -->
            </p>
          <p class="email text-secondary">
            <span class="text-dark"> AssignedTo : </span>
            {{  ticket.assignee }}
          </p>
        </div>

        <div class="usersTypes d-flex">
          <p class="userType col-md-6">
            <span> Ticket-ID : </span>
            {{ ticket.id }}
          </p>
          <p
            class="userStatus col-md-6 fw-bolder text-success"
            v-if="ticket.status == 'OPEN'"
          >
            <span class="text-dark fw-bold">STATUS : </span>
            
            <button class="btn btn-success">{{ticket.status}}</button>
          </p>
        
          <p
            class="userStatus col-md-6 fw-bolder text-danger"
            v-else-if="user.userStatus == 'PENDING'"
          >
            <span class="text-dark">STATUS : </span>
            {{ ticket.status }}
          </p>
        </div>

        <div class="time d-flex justify-content-end">
          <span>{{ ticket.updatedAt.slice(0 , 10) }}</span>
        </div>
      </div>
      <br />
    </div> 

  </div>
</template>

<script>
import { ticketsMethod } from '@/services/Tickets';
import { mapGetters } from "vuex";
import EngineerNavBar from "./EngineerNavBar.vue";
export default {
  name: "EngineerHome",
  components: {
    EngineerNavBar,
  },
  data() {
    return {
      ticketsList: [],
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },

  created: async function () {
    let response = await ticketsMethod.getAllTickets(this.getToken);
    this.ticketsList = response;
    this.$toast.success(this.ticketsList.data.message);
    console.log(response);
  },
 
};
</script>

<style>
</style>