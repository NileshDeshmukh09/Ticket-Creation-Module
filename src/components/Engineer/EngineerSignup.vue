<template>
  <div id="home">
    <NavBar class="nav-style"/>
    
    <div class="container signup ">
    
        <h1 class="text-center text-black "><strong>Signup</strong> | ENGINEER</h1>
     
        <form @submit.prevent="OnSubmit">
          <div class="form-group m-3">
            <label for="userType">UserType :</label>
            <input
              v-model.trim="$v.userType.$model"
              type="text"
              class="form-control inputField"
              id="userType"
              aria-describedby="emailHelp"
              :class="{
                'is-valid': !$v.userType.$invalid,
                'is-invalid': $v.userType.$error,
              }"
              placeholder="Enter userType"
            />
            <div class="invalid-feedback">
              <span v-if=" !$v.userType.required">userType is required !</span>
            </div>
           
          </div>
          <div class="form-group m-3">
            <label for="name">Name :</label>
            <input
              v-model.trim="$v.name.$model"
              type="text"
              class="form-control inputField"
              id="name"
              aria-describedby="emailHelp"
              :class="{
                'is-valid': !$v.name.$invalid,
                'is-invalid': $v.name.$error,
              }"
              placeholder="Enter Name"
            />
            <div class="invalid-feedback">
              <span v-if=" !$v.name.required">Name is required !</span>
            </div>
           
          </div>
          <div class="form-group m-3">
            <label for="userId">UserID :</label>
            <input
              v-model.trim="$v.userId.$model"
              type="text"
              class="form-control inputField"
              id="userId"
              aria-describedby="emailHelp"
              :class="{
                'is-valid': !$v.userId.$invalid,
                'is-invalid': $v.userId.$error,
              }"
              placeholder="Enter UserID"
            />
             <div class="invalid-feedback">
              <span v-if=" !$v.userId.required">UserID is required !</span>
            </div>
          </div>

          <div class="form-group m-3">
            <label for="email">Email address :</label>
            <input
              v-model.trim="$v.email.$model"
              type="email"
              class="form-control inputField"
              id="email"
              aria-describedby="emailHelp"
              :class="{
                'is-valid': !$v.email.$invalid,
                'is-invalid': $v.email.$error,
              }"
              placeholder="example@fynd.com"
            />
            <div class="invalid-feedback">
              <span v-if=" !$v.email.required">Email is required !</span>
            </div>
          </div>
          <div class="form-group m-3">
            <label for="password">Password :</label>

              <input
                v-if="showPassword"
                v-model.trim="$v.password.$model"
                type="text"
                class="form-control inputField"
                id="password"
                 :class="{
                'is-valid': !$v.password.$invalid,
                'is-invalid': $v.password.$error,
              }"
                placeholder="Password"
              />
              <input
                v-else
                v-model.trim="$v.password.$model"
                type="password"
                class="form-control inputField"
                id="password"
                 :class="{
                'is-valid': !$v.password.$invalid,
                'is-invalid': $v.password.$error,
              }"
                placeholder="Password"
              />
          
            <div class="invalid-feedback">
              <span v-if="!$v.password.required">Password is required !</span>
            </div>

          </div>

          <div class="form-group m-3">
            <label for="confirm_password">Confirm Password :</label>
            <input
              type="password"
              v-model.trim="$v.confirmPassword.$model"
              class="form-control inputField"
              id="confirm_password"
              aria-describedby="emailHelp"
               :class="{
                'is-invalid': $v.confirmPassword.$error,
                'is-valid': password != '' ? !$v.confirmPassword.$invalid : '',
              }"
              placeholder="Confirm your password "
            />
            

             <div class="invalid-feedback">
              <span v-if=" !$v.confirmPassword.sameAsPassword">Password does not match </span>
            </div>

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
import NavBar from "../NavBar.vue";
// import { validatePassword } from '@/services/PasswordValidations'
import { required, email, sameAs } from 'vuelidate/lib/validators'
// import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { signup } from "@/services/auth.services";
// import { reactive , computed  } from 'vue'



export default {
  name: "EngineerSignup",
  components: {
    NavBar,
  },
  data() {
    return {
      userType : "",
      name: "",
      userId: "",
      email: "",
      password: "",
      confirmPassword : "",
      showPassword: false,
      submitStatus : null,
      
      error : false,
    };

  },

  validations: {
     userType : {
        required
     },
      name : { 
        required 
      },
      userId : {
        required
      },
      email : { 
        required,
        email,
      },
      password : { 
        required,
        // minLength : minLength(8), 
        // validatePassword,
      },
      confirmPassword : {
        sameAsPassword : sameAs("password"),
      },
    
  },
  methods: {

    async handleSignup() {
      const data = {
        userType : this.userType.toUpperCase(),
        name: this.name,
        userId: this.userId,
        email: this.email,
        password: this.password,
      };
      console.log(this.$v);

      if( data.userType != "ENGINEER"){
            this.$toast.error("You are not an Engineer , Only Engineer able to Signup Here!");
            return false;
      }

      const response = await signup(data);
      
      if( response == true ){
        console.log(response);
        this.$toast.success("Successfully Registered !")
         setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      }else{
        this.$toast.error( response.data )
      }
     
    },

    HidenShowPassword() {
      this.showPassword = !this.showPassword;
    },

    OnSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
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

span {
  font-weight: 900;
  font-size: 14px;
  position: relative;
  cursor: pointer;
}

.dialogbox {
  display: flex;
  justify-content: space-between;
  height: 60px;
}

.none {
  display: none;
}


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
  font-size: 15px;
  font-weight: 900;
}
.inputField {
  height: 40px;
  border: 1px solid black;
}

input::placeholder , p {
  font-weight: 600;
}

@media screen and (max-width: 768px) {
  #home{
    height: 800px;
  }

  .container {
    height: 700px;
    width: 90%;
    margin-top: 100px;
  }

  
}
</style>