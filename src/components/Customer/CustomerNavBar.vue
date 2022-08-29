<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand bg-success nav-menu" to="/">Welcome <span class="text-danger">{{ name }} !</span></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            
              <li class="nav-item nav-menu">
                <router-link class="nav-link active" aria-current="page" to="/customers/tickets/add">AddTickets</router-link>
              </li>
              <li class="nav-item nav-menu">
                <router-link class="nav-link" to="/customers/tickets">Tickets</router-link>
              </li>
              <li class="nav-item nav-menu">
                <router-link class="nav-link" @click.prevent='logOut()' to="/login">Logout</router-link>
              </li>
              
          
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "CustomerNavBar",

  computed : {
    ...mapGetters(['name']),
  },

  methods : {
     logOut() {  

            localStorage.clear();
            this.$router.replace('/login');
        },
  }
};
</script>

<style>
</style>