<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand nav-menu" to="/">Home</router-link>
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
                <router-link class="nav-link active nav-menu" aria-current="page" to="/login">Login</router-link>
              </li>
              <li class="nav-item nav-menu">
                <router-link class="nav-link" to="/signup">Signup</router-link>
              </li>
              <li class="nav-item nav-menu">
                <router-link class="nav-link " to="/engineer/signup">Engineer-Signup</router-link>
              </li>
          
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NewNavBar",
};
</script>

<style>

.nav-menu {
  font-size: 17px;
  font-weight: 900;
 
}
</style>