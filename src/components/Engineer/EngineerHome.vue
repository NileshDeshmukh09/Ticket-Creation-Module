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
          <div class="buttons"> 
           <button class="edit btn btn-sm fw-bold"><router-link :to="`/engineer/tickets/${ticket.id}`" class="text-decoration-none">Edit</router-link></button>
         </div>
        </div>

        <div class="usersValue d-flex justify-content-between">
          <p class="userId text-secondary">
            {{ ticket.description }}
            <!-- userTYpe -->
          </p>
          <p class="email text-secondary">
            <span class="text-dark"> AssignedTo : </span>
            {{ ticket.assignee }}
          </p>
        </div>

        <div class="usersTypes d-flex justify-content-between">
          <p class="userType ">
            <span> Ticket-ID : </span>
            {{ ticket.id }}
          </p>
          <p
            class="userStatus fw-bolder text-success"
            v-if="ticket.status == 'OPEN'"
          >
            <span class="text-dark fw-bold">STATUS : </span>

            <button class="btn btn-success">{{ ticket.status }}</button>
          </p>

          <p
            class="userStatus fw-bolder text-danger"
            v-else-if="user.userStatus == 'PENDING'"
          >
            <span class="text-dark">STATUS : </span>
            {{ ticket.status }}
          </p>
        </div>

        <div class="time d-flex justify-content-end p-2 " >
          <span>{{ ticket.updatedAt.slice(0 , 10) }}</span>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { ticketsMethod } from "@/services/Tickets";
import { mapGetters } from "vuex";
import EngineerNavBar from "./EngineerNavBar.vue";
export default {
  name: "EngineerHome",
  components: {
    EngineerNavBar,
  },
  data() {
    return {
      getdate : "",
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

  methods: {
    getDate( updatedTime ) {
      const isoStr1 = updatedTime;

      const date = new Date(isoStr1);

      const timestampWithOffset = date.getTime();

      const offset = date.getTimezoneOffset() * 60 * 1000;
      console.log(offset);
      const timestampWithoutOffset = timestampWithOffset - offset;

      const dateWithOffset = new Date(timestampWithOffset);
      console.log(dateWithOffset);

      const dateWithoutOffset = new Date(timestampWithoutOffset);
      console.log(dateWithoutOffset);

      this.getdate = dateWithoutOffset;
      return this.getdate;
    },
  },
};
</script>

<style>


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