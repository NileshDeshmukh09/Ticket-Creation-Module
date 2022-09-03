<template>
  <div>
    <NavBar />
    <div class="home d-flex text-center text-white fw-bold justify-content-center align-items-center">
      <h1>TICKET-CREATION-MODULE ( CRM )</h1>
    </div>
    
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
  },
  // methods : {
  //   show: true
  // }
};
</script>

<style>
.home {
  width: 50%;
  height: 300px;
  background: rgb(23, 178, 235);
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  border : 1px solid black;
  box-shadow: 3px 3px 15px black;
}

</style>