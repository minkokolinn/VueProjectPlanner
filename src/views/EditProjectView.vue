<template>
  <h1>Edit Project</h1>
  <form @submit.prevent="addProject">
    <label>Project Title</label>
    <input type="text" v-model="title" />
    <label>Project Detail</label>
    <input type="text" v-model="detail" />
    <button>Edit Project</button>
  </form>
</template>

<script>
export default {
  props:['id'],
  data(){
    return {
      title : "",
      detail : "",
      api : "http://localhost:3000/projects/"
    }
  },
  mounted(){
    fetch(this.api+this.id)
    .then(response => response.json())
    .then(data => {
      this.title = data.title
      this.detail = data.detail
    })
    .catch(err => {
      console.error(err)
    })
  },
  methods : {
    addProject(){
      fetch(this.api+this.id,{
        method : "PATCH",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify({
          title : this.title,
          detail : this.detail
        })
      })
      .then(response => {
        this.$router.push({name : 'home'})
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style>

</style>