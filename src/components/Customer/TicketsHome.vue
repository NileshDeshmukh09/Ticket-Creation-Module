<template>
  <div>
        
     <div class="CustomerDiv"  >
      <div class="Home">
        <h3 class="text-secondary">List of Tickets created</h3>
      </div>

      <div class="ticketsCount text-center">
        <p><span>Tickets :</span> {{ ticketsList.data.tickets ?  ticketsList.data.tickets.length : 0 }}</p>

        <br />
      </div>

      <div
        class="ticketsList"
        v-for="ticket in ticketsList.data.tickets"
        :key="ticket.id"
      >
        <div class="jumbotron jumbotron-fluid OneTickets">
          <div class="container">
            <h6 class="display-6 title d-flex">
              <span> Title :</span>
              <p class="mx-2 ticketTitle fw-bold">{{ ticket.title ? ticket.title : '' }}</p>
            </h6>
            <p class="lead description fw-bold">
              <span>Description :</span> {{ ticket.description ? ticket.description : '' }}
            </p>
            <div class="statusAndEnginner d-flex justify-content-between">
              <p><span>Status : </span>{{ ticket.status ? ticket.status :'' }}</p>
              <h5><span>Engineer : </span>{{ ticket.assignee ? ticket.assignee : '' }}</h5>
            </div>

            <div class="icons">
              <button class="btn bg-primary mt-3">
                <router-link
                  :to="`/customers/tickets/${ticket.id}`"
                  class="text-white text-decoration-none updateTicket"
                  >update</router-link
                >
              </button>
            </div>

            <div class="dateAndTime d-flex justify-content-end">
              <p>
                <span class="date mx-2">{{
                  ticket.updatedAt ? ticket.updatedAt.substring(0, 10) : ''
                }}</span>

                <span class="time">{{
                  ticket.updatedAt ? ticket.updatedAt.substring(11, 16) : ''
                }}</span>
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
export default {
    name : "TicketsHome",
    props : ['ticketsList']
}
</script>

<style>

</style>