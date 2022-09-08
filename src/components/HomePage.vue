<template>
  <div id="HomeDiv">
    <NavBar />
    <div
      class="
        home
        d-flex
        text-center text-white
        fw-bold
        justify-content-center
        align-items-center
      "
    >
      <h1 class="fw-bold">TICKET-CREATION-MODULE ( CRM )</h1>
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
  background: rgb(7, 161, 153);
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  box-shadow: 3px 3px 15px black;
}

@media screen and (max-width: 768px) {
  .home {
    background: rgb(7, 161, 153);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    box-shadow: 3px 3px 15px black;
  }

  h1{
    font-size: 40px;
  }
}
</style>