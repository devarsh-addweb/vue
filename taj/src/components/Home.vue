<template>
<heder></heder>
<br>
    <h1>Hello {{name}}, Welcome to Home pages</h1>
<br>
    <center>
        <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CONTACT</th>
            <th>ADDRESS</th>
            <center><th>ACTION</th></center>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td>
                <button class="link">
                    <router-link :to="'/Update/'+item.id" class="link">Update </router-link>
                </button>
                <button v-on:click="deleteRestaurant(item.id)" class="link">Delete</button>
            </td>
        </tr>
    </table>
    </center>
</template>

<script>
import Heder from './Heder.vue';
import axios from 'axios';

    export default{
        name:'Home',
        data(){
            return{
                name:'',
                restaurant:[],
            }
        },
        components:{
            Heder
        },
        methods:{
            async deleteRestaurant(id)
            {
                let result =await axios.delete("http://localhost:3000/restaurant/"+id);
                console.warn(result);
                if(result.status==200)
                {
                    this.loadData()
                }
                
            },
            async loadData()
            {
                let user = localStorage.getItem('user-info');
                this.name=JSON.parse(user).name;
                if(!user)
                {
                    this.$router.push({name:'SignUp'})
                }

                let result =await axios.get("http://localhost:3000/restaurant");
                console.warn(result)
                this.restaurant=result.data;
            }
        },
        async mounted()
        {
            this.loadData();
            // let user = localStorage.getItem('user-info');
            // this.name=JSON.parse(user).name;
            // if(!user)
            // {
            //     this.$router.push({name:'SignUp'})
            // }

            // let result =await axios.get("http://localhost:3000/restaurant");
            // console.warn(result)
            // this.restaurant=result.data;
        }
    }
</script>

<style scoped>
table{
    float:center;
    border: 2px solid rgba(229, 230, 236, 0.993);
}
th{
    padding: 15px;
    margin: 20px;
    color: orange;
    font-size: 20px;
}
td{
    padding: 15px;
    margin: 20px;
    color:grey;
    font-size: 20px;
}
tr:hover{
    background-color: rgb(243, 243, 231);
}
.link{
    border:none;
    background:none;
    color: rgb(219, 31, 6);
    text-decoration: none;
}
.link:hover{
    color: rgb(3, 3, 3);
    text-decoration: none;
    /* border: 1px solid black; */
    /* border-radius: 3px solid red; */
    /* font-size: 30px; */
}
</style>