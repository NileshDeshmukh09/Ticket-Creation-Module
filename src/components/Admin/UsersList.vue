<template>
  <div id="userspage">
    <AdminNavBar />
    <!-- <h1 class="text-center text-white bg-primary">Users List</h1> -->
    <div class="page">
      <h3 class="text-center">LIST OF THE USERS :</h3>

      <!-- <pre>{{ usersList.data.users[0] }} </pre> -->

      <div class="totalusers btn bg-light  fw-bold">
        Total Users :
        <span class="text-secondary"> {{ usersList.data.users.length }}</span>
      </div>
      <div
        class="users p-2"
        v-for="user in usersList.data.users"
        :key="user.userId"
      >
        <div class="userslist container">
          <div class="username d-flex justify-content-between">
            <h1 class="name">{{ user.name }}</h1>
            <div class="buttons d-flex justify-content-between">
              <button class="delete btn btn-sm fw-bold">
                <router-link
                  :to="`/admin/users/${user.userId}`"
                  class="text-decoration-none"
                  >View</router-link
                >
              </button>
              <button class="edit btn btn-sm fw-bold">
                <router-link
                  :to="`/admin/users/${user.userId}/edit`"
                  class="text-decoration-none"
                  >Edit</router-link
                >
              </button>
            </div>
          </div>
          <div class="usersValue d-flex justify-content-between">
            <p class="userId text-secondary">{{ user.userType }}</p>
            <p class="email text-secondary">
              <span class="text-dark"> Email : </span>{{ user.email }}
            </p>
          </div>
          <div class="usersTypes d-flex">
            <p class="userType col-md-6">
              <span> USER-ID : </span>{{ user.userId }}
            </p>
            <p
              class="userStatus col-md-6 fw-bolder text-success"
              v-if="user.userStatus == 'APPROVED'"
            >
              <span class="text-dark fw-bold">STATUS : </span
              >{{ user.userStatus }}
            </p>

            <p
              class="userStatus col-md-6 fw-bolder text-danger"
              v-else-if="user.userStatus == 'PENDING'"
            >
              <span class="text-dark">STATUS : </span>{{ user.userStatus }}
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AdminNavBar from "./AdminNavBar.vue";
import { usersList } from "@/services/Users";

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

.page {
  margin-top: 100px;
   background: rgb(222, 221, 221);
}
#userspage {
  background: rgb(222, 221, 221);
}
.totalUsers {
  margin-left: 50px;
}

.userslist {
  height: 230px;
  /* background: rgb(253, 252, 252); */
  background: rgb(255, 255, 255);
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
.userType,
.userStatus {
  padding-left: 14px;
  font-weight: 900;
}
span {
  font-weight: 900;
}
.buttons {
  width: 130px;
  font-weight: 900;
}
.users {
  background: rgb(222, 221, 221);
}

@media screen and (max-width: 600px) {
  .usersValue {
    display: flex;
    flex-wrap: wrap;
  }

  .userTypes {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>