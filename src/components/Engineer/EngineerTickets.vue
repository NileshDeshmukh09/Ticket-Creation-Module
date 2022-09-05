<template>
  <div>

     <div class="engineer">
      <h1 class="text-center" >LIST OF THE Tickets :</h1>
      
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
              {{ ticket.title ? ticket.title : '' }}
              <!-- Name -->
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
              {{ ticket.description  ? ticket.description : ''}}
              <!-- userTYpe -->
            </p>
            <p class="email text-secondary">
              <span class="text-dark"> AssignedTo : </span>
              {{ ticket.assignee ? ticket.assignee : '' }}
            </p>
          </div>

          <div class="usersTypes d-flex justify-content-between">
            <p class="userType">
              <span> Ticket-ID : </span>
              {{ ticket.id ? ticket.id : ''}}
            </p>
            <p
              class="userStatus fw-bolder text-success"
              v-if="ticket.status == 'OPEN'"
            >
              <span class="text-dark fw-bold">STATUS : </span>

              <button class="btn btn-success fw-bold">
                {{ ticket.status ? ticket.status : ''}}
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
                {{ ticket.status ? ticket.status : '' }}
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
            <span>{{ ticket.updatedAt ? ticket.updatedAt.slice(0 , 10) : "" }}</span>
          </div>
        </div>
        <br />
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name  : "EngineerTickets",
    
    props : ['ticketsList']
}
</script>

<style>

</style>