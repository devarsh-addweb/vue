<template>
    <!-- <heder></heder> -->
    <center>
    <div class="container loginbox"><br>
    <img alt="Vue logo" class="logo" src="../assets/lll.jpg"><br><br>
        <h2>Sign Up</h2><br>
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="text" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button><br><br>
        <p>
            Already have an account?
            <router-link to="/LogIn">Log In</router-link>
        </p>
    </div>
    </center>
</template>

<script>
import axios from 'axios'

export default{
    name:"SignUp",
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/userss",
            {
                email : this.email,
                password : this.password,
                name : this.name
            });
            console.warn(result);
            if(result.status==201)
            {
                // alert("Sign Up Done");
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
            // console.warn("signup",this.name,this.email,this.password)
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style scoped>

</style>
