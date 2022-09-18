<template>
  <div class="customerhome">
    <CustomerNavBar />
    <TicketsHome :ticketsList="ticketsList" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomerNavBar from "./CustomerNavBar.vue";
import TicketsHome from "./TicketsHome.vue";
import { getAllTickets } from "@/services/customerTickets";

export default {
  name: "CustomerHome",
  data() {
    return {
      ticketsList: [],
    };
  },
  computed: {
    ...mapGetters(["getToken", "userMessage" , "userName"]),
  },
  components: {
    CustomerNavBar,
    TicketsHome,
  },
  created: async function () {
    let response = await getAllTickets.getTickets(this.getToken);
    this.ticketsList = response;
    this.$toast.success(this.ticketsList.data.message);
    console.log(response);
  },
};
</script>

<style>
.customerhome{
  background: rgba(19, 168, 116, 0.954);
}
.CustomerDiv {
  margin-top: 60px;
  
}
.small-desc{
  font-size: 20px;
  font-weight: 700;
  margin: 20px 60px;

}
.OneTicket {
  padding: 10px;
}

.container {
  background: #8baedf;
  border-radius: 1px;
  box-shadow: 3px 5px 10px black;
}

.ticketsCount {
  width: 150px;
  height: 50px;
  padding: 20px;
  margin: 20px 60px;
  background: rgb(221, 221, 221);
  border-radius: 3px;
  box-shadow: 2px 2px 5px black;
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

.title span {
  font-weight: 900;
  font-size: 35px;
}

.ticketTitle {
  font-weight: 800;
  font-size: 25px;
  margin-top: 10px;
}

.updateTicket {
  font-weight: 900;
  font-size: 15px;
}

.title-description {
  color: rgb(134, 123, 123);

  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .title span {
    font-size: 25px;
  }

  .ticketTitle {
    font-size: 20px;
    margin-top: 5px;
  }

  .title-description {
    font-size: 15px;
    justify-content: space-between;
  }
}
</style>