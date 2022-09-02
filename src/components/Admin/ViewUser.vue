<template>
  <div>
    <AdminNavBar />
    <h1 class="text-center text-primary ">View USER</h1>
   
    <div class="updateForm bg-success text-center">
      <div class="card text-center">
        <div class="card-header">Profile</div>
        <div class="card-body">
          <!-- <div class="name">
          <h2><span>NAME : </span>{{ userDetails.data.user[0].name }} </h2>
          <h3><span>USERID : </span>{{ userDetails.data.user[0].userId }} </h3> 

         </div> -->
          <ul class="list-group list-group-flush">
            <li class="list-group-item" > <span >Name :</span> <b>{{ userDetails.data.user[0].name }}</b></li>
            <li class="list-group-item"><span>UserID :</span>{{ userDetails.data.user[0].userId }}</li>
            <li class="list-group-item"><span>EmailID : </span>{{ userDetails.data.user[0].email }}</li>
            <li class="list-group-item"><span>UserType : </span>{{ userDetails.data.user[0].userType }}</li>
            <li class="list-group-item"><span>UserStatus : </span>{{ userDetails.data.user[0].userStatus }}</li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { usersList } from "@/services/Users";
import AdminNavBar from "./AdminNavBar.vue";
import { mapGetters } from "vuex";

export default {
  name: "ViewUser",
  data() {
    return {
      userId: this.$route.params.userId,
      userDetails: [],
    };
  },
  components: {
    AdminNavBar,
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  created: async function () {
    let response = await usersList.getUserByID(this.getToken, this.userId);
    this.userDetails = response;
    this.$toast.success(this.userDetails.data.message);
    console.log(response);
  },
};
</script>

<style>
.updateForm {
  margin-top: 50px;
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>