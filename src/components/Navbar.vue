<template>
  <nav class="main-nav">
    <router-link :to="{name:'home'}">Projects</router-link>
    <router-link :to="{name:'AddProjectView'}">Add Project</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main-nav{
        text-align: center;
        margin: 40px auto;
    }
    .main-nav a{
        display: inline-block;
        text-decoration: none;
        margin: 0px 10px;
        color: #999;
        font-size: 19px;
    }
    a.router-link-active{
        border-bottom: 2px solid #00ce89;
    }
</style>