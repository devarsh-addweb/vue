<template>
  <center>
    <div class="container loginbox">
      <br />
      <img alt="Vue logo" class="logo" src="../assets/lll.jpg" /><br /><br />
      <h2>LogIn</h2>
      <br />
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="text" v-model="password" placeholder="Enter Password" />
      <button v-on:click="login">Log In</button><br /><br />
      <p>
        Don’t have an account?
        <router-link to="/SignUp">Sign Up</router-link>
      </p>
    </div>
  </center>
</template>

<script>
import axios from 'axios'

export default {
  name: "LogIn",
  data()
  {
      return{
          email:'',
          password:''
      }
  },
  methods:{
      async login()
      {
          let result = await axios.get(
              `http://localhost:3000/userss?email=${this.email}&password=${this.password}`
          )
          if(result.status==200 && result.data.length > 0)
            {
                // alert("Sign Up Done");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }
            else
            {
                alert("Username And Password Are Wrong....Please Check IT ");
            }
          console.warn(result)
      }
  }
};
</script>

<style scoped> 

</style>

