<template>
<heder></heder>
<br>
    <h1>Hello User, Welcome to Add Restaurant pages</h1>
<br>
<form>
    <center>
        <div class="loginbox">
        <input type="text" name="name" placeholder="Enter Restaurant Name" v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter Restaurant Contact" v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter Restaurant address" v-model="restaurant.address">
        <button type="button" v-on:click="addRestaurant">Sign Up</button><br><br>
    </div>
    </center>
</form>
</template>

<script>
import Heder from './Heder.vue';
import axios from 'axios';
    export default{
        name:'Add',
        components:{
            Heder
        },
        data()
        {
            return{
                restaurant:{
                    name:'',
                    contact:'',
                    address:''
                }
            }
        },
        methods:{
            async addRestaurant()
            {
                console.warn(this.restaurant)
                const result = await axios.post("http://localhost:3000/restaurant",{
                    name:this.restaurant.name,
                    contact:this.restaurant.contact,
                    address:this.restaurant.address,
                });
                if(result.status==201)
                {
                    this.$router.push({name:'Home'})
                }
                else
                {   
                    alert("data not submitteds");
                }
                    console.warn("result",result)
            }
        },
        mounted()
        {
            let user = localStorage.getItem('user-info');
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
        }
    }
</script>

<style scoped>

.loginbox input{
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    border: 1px solid orange;
    color: rgb(114, 114, 114);
    font-size: 20px;
}
.loginbox button{
     width:300px;
    height: 40px;
    border: 2px solid rgb(0, 0, 0);
    background-color:rgb(238, 193, 109);
    font-size: 20px;
}
.loginbox button:hover{
    background-color: white;
    color:rgb(24, 23, 22);
    border:1px solid orange;
}
</style>

