<template>
  <div>
    <AdminNavBar />
    <h1 class="text-center text-white bg-primary">Users List</h1>

    <h3 class="text-secondary">List of the Users :</h3>
    <pre>{{ usersList.data.users[0] }} </pre>

    <div class="users" v-for="user in usersList.data.users" :key="user.userId">
      <div class="userslist container">
        <h1 class="name">{{ user.name }}</h1>
        <div class="usersValue d-flex justify-content-between">
          <p class="userId text-secondary">{{ user.userId }}</p>
          <p class="email">{{ user.email }}</p>
        </div>
        <div class="usersValue d-flex">
          <p class="userType col-md-6">{{ user.userType }}</p>
          <p class="userStatus col-md-6"><span>STATUS : </span>{{ user.userStatus }}</p>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AdminNavBar from "./AdminNavBar.vue";
import { usersList } from "@/services/usersList";

export default {
  name: "UsersList",
  components: {
    AdminNavBar,
  },

  data() {
    return {
      usersList: [],
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  created: async function () {
    let response = await usersList.listOfUsers(this.getToken);
    this.usersList = response;
    this.$toast.success(this.usersList.data.message);
    console.log(response);
  },
};
</script>

<style>
.userslist {
  height: 200px;
  /* background: rgb(253, 252, 252); */
  background: rgb(196, 190, 190);
  box-shadow: 2px 2px 2px 2px rgb(203, 200, 200);
  border-radius: 4px;
}

.name {
  font-weight: bold;
  padding: 14px 0px 0px 14px;
}

.userId {
  font-weight: 900;
  padding-left: 14px;
  font-size: 25px;
  margin-top: 1px;
}

.email {
  font-size: 20px;
  font-weight: 900;
  padding-left: 14px;
}
.userType {
  padding-left: 14px;
  font-weight: 900;
}
span {
  font-weight: 900;
}
</style>