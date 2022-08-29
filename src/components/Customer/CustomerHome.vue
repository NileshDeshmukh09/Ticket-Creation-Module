<template>
  <div>
    <CustomerNavBar />
    <h1>Customer HOME</h1>
    <h3 class="text-secondary">See all List of Tickets to</h3>
    <div class="jumbotron jumbotron-fluid bg-danger">
      <div class="container bg-success">
        <h1 class="display-4 title">Fluid jumbotron</h1>
        <p class="lead description">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>

    
  </div>
</template>

<script>
import CustomerNavBar from "./CustomerNavBar.vue";

export default {
  name: "CustomerHome",
  components: {
    CustomerNavBar,
  },
};
</script>

<style>
</style>