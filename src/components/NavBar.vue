<template>
  <div>
    <div class="nav-menu">
      <i class="fas fa-bars" @click="showMenu()"> </i>

      <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <ul class="nav-items">
          <li><router-link class="link-plain" to="/">Home</router-link></li>
        </ul>
        <ul class="nav-items">
          <li><router-link class="link-plain" to="/login">Login</router-link></li>
          <li><router-link class="link-plain" to="/signup">Signup</router-link></li>
          <li><router-link class="link-plain" to="/customer">Customer</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name : "NavBar",
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>


<style scoped>
.nav-menu {
  background-color: rgb(228, 228, 228);
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
}

.link-plain {
  text-decoration: none;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 0 10px;
}
i {
  display: none;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 80px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
  }
  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>