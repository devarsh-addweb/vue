<template>
    <div class="nav">
        <router-link to="/Home">Home</router-link>
        <router-link to="/Add">Add Restaurant</router-link>
        <!-- <router-link to="/Update">Update Restaurant</router-link> -->
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name:'Heder',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'LogIn'})
        }
    }
    
}
</script>

<style scoped>
.nav{
    background-color: rgba(229, 230, 236, 0.993);
    overflow: hidden;
}
.nav a{
    float: left;
    color: rgb(12, 11, 11);
    padding:10px 15px;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    margin-right: 5px;
}
.nav a:hover{
    background-color: rgb(255, 255, 255);
    color: rgba(255, 166, 0, 0.993);
    /* border:1px solid black; */ 
}
</style>