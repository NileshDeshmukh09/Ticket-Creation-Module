<template>
  <div id="home">
    <NavBar />
    <div class="container signup ">
    
        <h1 class="text-center text-black ">SIGNUP</h1>
       
     

     
        <form @submit.prevent="onSubmit">
          <div class="form-group m-3">
            <label for="name">Name :</label>
            <input
              v-model="name"
              type="text"
              class="form-control inputField"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
           
          </div>
          <div class="form-group m-3">
            <label for="userId">UserID :</label>
            <input
              v-model="userId"
              type="text"
              class="form-control inputField"
              id="userId"
              aria-describedby="emailHelp"
              placeholder="Enter UserID"
            />
          </div>
          <div class="form-group m-3">
            <label for="email">Email address :</label>
            <input
              v-model="email"
              type="email"
              class="form-control inputField"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group m-3">
            <label for="password">Password :</label>
            <input
              v-model="password"
              type="password"
              class="form-control inputField"
              id="password"
              placeholder="Password"
            />
          </div>

          <div class="form-group m-3">
            <label for="confirm_password">Confirm Password :</label>
            <input
              type="password"
              class="form-control inputField"
              id="confirm_password"
              aria-describedby="emailHelp"
              placeholder="Confirm your password "
            />
          </div>
          <button type="submit" class="btn btn-primary m-3">Submit</button>
      <p class="float-end">
        Already have an Account ? <router-link to="/login"> Login </router-link>
      </p>
        </form>
     
      
      <hr />
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import axios from "axios";
import Config from "@/config";
import { validatePassword } from '@/services/PasswordValidations'
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
// import { reactive , computed  } from 'vue'

const { baseUrl } = Config;

export default {
  name: "SignupPage",
  components: {
    NavBar,
  },
  setup(){
    return {
      v$ : useVuelidate(),
    }
  },
  data() {
    return {
      name: "",
      userId: "",
      email: "",
      password: "",
      confirmPassword : "",
      submitStatus : null,
    };

  },

  validations: {
     
      name : { 
        required 
      },
      email : { 
        required,
        email,
      },
      password : { 
        required,
        minLength : minLength(6), validatePassword,
      },
      confirmPassword : {
        sameAsPassword : sameAs("password"),
      },
    
  },
  methods: {
    async handleSignup() {
      const data = {
        name: this.name,
        userId: this.userId,
        email: this.email,
        password: this.password,
      };
      console.log(this.v$);
      // console.log(data);
      try {
        const response = await axios.post(`${baseUrl}/auth/signup`, data);
        console.log(response);
        alert("Registered Successfully !");
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },

     onSubmit() {
      this.$v.$touch();
      if ( this.$v.$invalid ) {
        this.submitStatus = "FAIL";
      } else {
        this.submitStatus = "SUCCESS";
        this.handleSignup();
      }
    },
  },
};
</script>

<style scoped>


.errorMessage {
    transition: visibility 0s, opacity 0.5s linear;
    color: rgb(233, 64, 22);
    font-size: 0.95em;
}
.error {
    border: 1.5px solid rgb(255, 9, 9);
    color: rgb(247, 10, 10);
}
.success {
    border: 1.5px solid rgb(55, 161, 14);
    color: rgb(26, 82, 4);
}
.errorMessage p {
    margin: 5px;
}


#home {
  background: rgb(42, 74, 216);
}
.container {
  background: rgb(223, 223, 223);
  width: 50%;
  margin-top: 50px;
  border: 1px solid rgb(213, 42, 42);
  border-radius: 10px;
}

.signup-heading {
  width: 100%;
  background: rgb(176, 36, 36);
  font-weight: 900;
}

h1{
  margin-top: 20px;
  font-weight: bolder;
}

label {
  font-size: 20px;
  font-weight: 900;
}
.inputField {
  height: 45px;
  border: 1px solid black;
}

input::placeholder , p {
  font-weight: 600;
}
</style>