<template>
  <div id="home">
    <CustomerNavBar />
    <div class="add-ticket-form bg-warning">
      <h2 class="text-center text-white fw-bold my-3">
        ADD NEW TICKET | CUSTOMER
      </h2>

      <form @submit.prevent="OnSubmit">
        <div class="form-group">
          <label for="title">Title :</label>
          <input
            v-model.trim="$v.title.$model"
            type="text"
            class="form-control"
             :class="{
              'is-valid': !$v.title.$invalid,
              'is-invalid': $v.title.$error,
            }"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Title"
          />

           <div class="invalid-feedback">
            <span v-if="!$v.title.required">Title is required !</span>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description : </label>
          <textarea
            name="description"
             v-model.trim="$v.description.$model"
            class="form-control"
            :class="{
              'is-valid': !$v.description.$invalid,
              'is-invalid': $v.description.$error,
            }"
            id="description"
            cols="30"
            rows="4"
            placeholder="Describe Your Issue Here ..."
          ></textarea>

           <div class="invalid-feedback">
            <span v-if="!$v.description.required">Description is required !</span>
          </div>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import CustomerNavBar from "./CustomerNavBar.vue";
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
import { addNewTicketMethods } from "@/services/addNewTicket";
export default {
  name: "AddNewTicket",

  components: {
    CustomerNavBar,
  },

  data() {
    return {
      title: "",
      description: "",
      submitStatus : null,
    };
  },

  validations: {
    title: {
      required,
    },

    description: {
      required,
    },
  },

  computed: {
    ...mapGetters(['getToken']),
  },

  methods: {
    async onCreateTicket() {
      
    try{
      const data = {
        title: this.title,
        description: this.description,
      };

      console.log("data : ", data);

      const helper = async () => {
        this.ticketsCreated = await addNewTicketMethods.createTicket(
          data,
          this.getToken
        );
      };

      console.log("Token : ", this.getToken );
      console.log(helper());

      if (helper()) {
        this.$toast.success("Tickets Created Successfully !");
      } else {
        this.$toast.error("Something Error Happened , Please try again");
      }
    }catch(error){
      console.log(error.message);
    }
    },
  
    OnSubmit(){
      this.$v.$touch();

      if( this.$v.$invalid){
        this.submitStatus = 'FAIL';
      }
      else{
        this.submitStatus = 'SUCCESS';
        this.onCreateTicket();
      }
    }
    
  },
};
</script >

<style scoped>
.add-ticket-form {
  width: 50%;
  margin: 50px auto;
  padding: 20px;
}

label {
  font-size: 17px;
  font-weight: 900;
  margin-top: 20px;
}

input::placeholder,
textarea::placeholder {
  font-weight: 900;
}

span {
  font-weight: 900;
}
</style>