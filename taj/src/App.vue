<template>
  <!-- <img alt="Vue logo" class="logo" src="../assets/logo.png"> -->
  <router-view/>
</template>

<script>

export default{
  name:"App",
  
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.loginbox input{
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    /* margin-right:auto;
    margin-left:auto; */
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
.loginbox{
    /* border: 2px solid rgb(17, 17, 17); */
    /* box-shadow: 10px 5px 5px rgb(104, 103, 103); */
    width: 70%;
}
.regilink{
    font-size: 25px;
}
.logo{
    opacity: .6;
    width: 200px;
}
.loginbox button:hover{
    background-color: white;
    color:rgb(24, 23, 22);
    border:1px solid orange;
}
</style>
