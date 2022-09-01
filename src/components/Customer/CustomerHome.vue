<template>
  <div>
    <CustomerNavBar />
    <!-- <pre>{{ tickets.data.tickets }}</pre> -->
    <!-- <pre>{{tickets.data.tickets[0]}}</pre> -->
    <!-- ---------- -->
    <div class="Home">
    <h3 class="text-secondary">List of Tickets created</h3>
    
      
    </div>

    <div class="ticketsCount text-center">
    <p><span>Tickets :</span>  {{ ticketsList.data.tickets.length }}</p>
    
    <br>

    </div>

    <div
      class="ticketsList"
      v-for="ticket in ticketsList.data.tickets"
      :key="ticket.id"
    >
      <div class="jumbotron jumbotron-fluid OneTickets">
       
        <div class="container">
          <h6 class="display-6 title d-flex ">
            <span> Title :</span><p class="mx-2 ticketTitle">{{ ticket.title }}</p>
          </h6>
          <p class="lead description">
            <span>Description :</span> {{ ticket.description }}
          </p>
          <div class="statusAndEnginner d-flex justify-content-between">
            <p><span>Status : </span>{{ ticket.status }}</p>
            <h5>
              <span>Engineer : </span>{{ ticket.assignee }}
            </h5>
          </div>

          <div class="icons">
           <button class="btn bg-primary mt-3"> <router-link :to="`/customers/tickets/${ticket.id}`" class="text-white text-decoration-none updateTicket">update</router-link></button>
          </div>

          <div class="dateAndTime d-flex justify-content-end">
            <p>
              <span class="date mx-2">{{
                ticket.updatedAt.substring(0, 10)
              }}</span>

              <span class="time">{{ ticket.updatedAt.substring(11, 16) }}</span>
            </p>
          </div>
        </div>
      </div>
      <br>
     
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomerNavBar from "./CustomerNavBar.vue";
import { getAllTickets } from "@/services/customerTickets";

export default {
  name: "CustomerHome",
  data() {
    return {
      ticketsList: [],
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  components: {
    CustomerNavBar,
  },
  created: async function () {
    let response = await getAllTickets.getTickets(this.getToken);
    this.ticketsList = response;
    this.$toast.success( this.ticketsList.data.message )
    console.log(response);

    // if( this.ticketsList.data.tickets.length === null ){
    //   this.$toast.error( "No Ticket Created !" )
    // }
  },

  
};
</script>

<style>
.OneTickets {
  background: rgb(209, 52, 52);
  padding: 10px;
}

.container {
  background: rgb(79, 159, 224);
  border-radius: 10px;
  box-shadow: 3px 5px 3px black;

}

.ticketsCount {
  width: 150px;
  height: 50px;
  padding: 20px;
  margin: 20px;
  background: rgb(248, 125, 2);
  border-radius: 5px;
  box-shadow: 3px 3px 3px black;
  
}
.ticketsCount p span {
  font-weight: 900;
  font-size: 19px;
  color: black;
}

.ticketsCount p {
  color: white;
  font-weight: 900;
}

 span {
  font-weight: 900;
}

.ticketTitle {
  font-weight: 600;
  font-size: 30px;
}

.title {
  font-size:10px;
}

.updateTicket {
  font-weight: 900;
  font-size: 15px;
}

</style>