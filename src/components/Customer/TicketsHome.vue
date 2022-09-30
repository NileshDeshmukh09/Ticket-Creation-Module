<template>
  <div>
    <div class="CustomerDiv">
      <div class="Home">
        <p class="small-desc text-light">
          {{ userName.toUpperCase() }} , Tickets created by you will show Here
        </p>
      </div>
      <!-- <pre>{{ ticketsList }}</pre> -->
      <div class="ticketsCount text-center">
        <p>
          <span>Tickets :</span>
          {{ ticketsList.data.tickets ? ticketsList.data.tickets.length : 0 }}
        </p>

        <br />
      </div>

      <div
        class="ticketsList"
        v-for="ticket in ticketsList.data.tickets"
        :key="ticket.id"
      >
        <div class="jumbotron jumbotron-fluid OneTicket">
          <div class="container">
            <div class="title d-flex justify-content-start">
              <span> Title :</span>
              <p class="mx-2 ticketTitle">
                {{ ticket.title ? ticket.title : "" }}
              </p>
            </div>

            <div class="description d-flex">
              <span>Description : </span>
              <p class="mx-3 title-description fw-bold">
                {{ ticket.description ? ticket.description : "" }}
              </p>
            </div>

            <div class="statusAndEnginner d-flex justify-content-between">
              <div class="status d-flex">
                <span>Status : </span>
                <p class="mx-2 text-success fw-bold">
                  {{ ticket.status ? ticket.status : "" }}
                </p>
              </div>

              <h5 class="text-secondary fw-bold">
                <span class="text-dark">Engineer : </span>
                {{ ticket.assignee ? ticket.assignee : "" }}
              </h5>
            </div>

            <div class="icons">
              <button class="btn btn-outline-primary mt-3">
                <router-link
                  :to="`/customers/tickets/${ticket.id}`"
                  class="text-decoration-none updateTicket"
                  >update</router-link
                >
              </button>
            </div>

            <div class="dateAndTime d-flex justify-content-end">
              <p class="fw-bold">
                CreatedAt :

                <span class="date mx-2 text-secondary">
                  {{ ticket.createdAt | formatDate }}</span
                >
                <!-- <span class="time">{{ ticket.updatedAt | formatDate}}</span> -->
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import formatDateMixin from "@/mixins/formatDate";
export default {
  name: "TicketsHome",
  data() {
    return {
      format: "indian",
    };
  },
  props: ["ticketsList"],
  mixins: [formatDateMixin],
  computed: {
    ...mapGetters(["userName"]),
  },
};
</script>

<style>
</style>