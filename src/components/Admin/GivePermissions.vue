<template>
  <div id="mainDiv">
    <admin-nav-bar/>
    Give Permission
    <div class="container">
        <h1 class="text-center">Permissions</h1>
    </div>
  </div>
</template>

<script>
import AdminNavBar from './AdminNavBar.vue'
export default {
    name : "GivePermission",
    components : {
        AdminNavBar
    }
}
</script>

<style>
#mainDiv {
   background: rgb(232, 222, 222);
}

.card {
    height: 50px;
}
</style>