<template>
  <div>
    <EngineerNavBar />
    <!-- <h1>Engineer Home !</h1> -->
    <!-- <h1 class="text-center text-white bg-primary">Users List</h1> -->


     <div class="engineer">
      <h1 class="text-center" >LIST OF THE TICKETS :</h1>
      
      <!-- <pre>{{ ticketsList }}</pre> -->
      <div class="totalTIckets btn bg-light fw-bold">
        Total Tickets :
        <span class="text-secondary">
          {{ ticketsList.data.tickets ?  ticketsList.data.tickets.length : 0 }}</span
        >
      </div>

       <div
        class="users p-2"
        v-for="ticket in ticketsList.data.tickets"
        :key="ticket.id"
      >
        <div class="userslist container">
          <div class="username d-flex justify-content-between">
            <h1 class="name">
              {{ ticket.title ? ticket.title : "" }}
            </h1>
            <div class="fw-bold p-2">
              <button class="edit btn btn-sm fw-bold">
                <router-link
                  :to="`/engineer/tickets/${ticket.id}`"
                  class="text-decoration-none"
                  >Edit</router-link
                >
              </button>
            </div>
          </div>

          <div class="usersValue d-flex justify-content-between">
            <p class="userId text-secondary">
              {{  ticket.description ? ticket.description : ""  }}
            </p>
            <p class="email text-secondary">
              <span class="text-dark"> AssignedTo : </span>
              {{ ticket.assignee ? ticket.assignee : '' }}
            </p>
          </div>

          <div class="usersTypes d-flex justify-content-between">
            <p class="userType text-secondary" v-if="ticket.reporter">
              <span class="text-dark fw-bold"> IssuedBy : </span>
              {{  ticket.reporter ? ticket.reporter : '' }}
            </p>
            <p class="userType" v-else >
              <span> Ticket-ID : </span>
              {{  ticket.id ? ticket.id : '' }}
            </p>
            <p
              class="userStatus fw-bolder text-success"
              v-if="ticket.status == 'OPEN'"
            >
              <span class="text-dark fw-bold">STATUS : </span>

              <button class="btn btn-success fw-bold">
                {{ ticket.status ? ticket.status  : ''}}
              </button>
            </p>
            <p
              class="userStatus fw-bolder text-success"
              v-else-if="ticket.status == 'CLOSED'"
            >
              <span class="text-dark fw-bold">STATUS : </span>

              <button class="btn btn-danger fw-bold">
                {{ ticket.status ? ticket.status : '' }}
              </button>
            </p>
            <p
              class="userStatus fw-bolder text-success"
              v-else-if="ticket.status == 'REJECTED'"
            >
              <span class="text-dark fw-bold">STATUS : </span>

              <button class="btn btn-danger fw-bold">
                {{ ticket.status ? ticket.status :'' }}
              </button>
            </p>
            <p
              class="userStatus fw-bolder text-success"
              v-else-if="ticket.status == 'IN_PROGRESS'"
            >
              <span class="text-dark fw-bold">STATUS : </span>

              <button class="btn btn-info fw-bold">{{ ticket.status ? ticket.status : '' }}</button>
            </p>

            <p
              class="userStatus fw-bolder text-danger"
              v-else-if="user.userStatus == 'PENDING'"
            >
              <span class="text-dark">STATUS : </span>
              {{ ticket.status ? ticket.status : '' }}
            </p>
          </div>

          <div class="time d-flex justify-content-end p-2">
            <span> CreatedAt : {{ ticket.updatedAt | formatDate }}</span>
          </div>
        </div>
        <br />
      </div> 
    </div> 

      <!-- <EngineerTickets  :ticketsList = 'ticketsList' /> -->


  </div>
</template>

<script>
import { ticketsMethod } from "@/services/Tickets";
import { mapGetters } from "vuex";
import EngineerNavBar from "./EngineerNavBar.vue";
// import EngineerTickets from './EngineerTickets.vue'
export default {
  name: "EngineerHome",
  components: {
    EngineerNavBar,
    // EngineerTickets

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
    console.log( this.ticketsList );
    this.$toast.success(this.ticketsList.data.message);
    console.log(response);
  },

 
};
</script>

<style>
.engineer {
  margin-top: 100px;
}

@media screen and (max-width: 768px) {
  .usersValue {
    display: flex;
    flex-wrap: wrap;
  }

  .userTypes {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  #home {
    height: 800px;
  }

  .container {
    height: 330px;
    width: 90%;
  }

  .userId {
    font-size: 20px;
  }

  .name {
    font-size: 25px;
  }
}
</style>