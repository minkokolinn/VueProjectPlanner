<template>
  <div class="project" :class="{complete:project.complete}">
    <div class="flexing">
      <h3 @click="showDetail = !showDetail">{{ project.title }}</h3>
      <div>
        <span class="material-symbols-sharp" @click="deleteProject"> delete </span>
        <router-link :to="{
          name:'EditProjectView',
          params:{
            id:project.id
          }
        }">
          <span class="material-symbols-sharp"> edit </span>
        </router-link>
        <span class="material-symbols-sharp" @click="completeProject"> check_circle </span>
      </div>
    </div>
    <div v-if="showDetail">
      <p>{{ project.detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetail: false,
      api : "http://localhost:3000/projects/",
    };
  },
  methods:{
    deleteProject(){
      fetch(this.api+this.project.id, {method:"DELETE"})
      .then(response=>{
        if(response.ok){
          this.$emit("delete",this.project.id)
        }
      })
      .catch(err=>{
        console.error(err)
      })
    },
    completeProject(){
      let completeroute = this.api+this.project.id
      fetch(completeroute, {
        method : "PATCH",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify({
          complete : !this.project.complete
        })
      })
      .then(reponse => {
        this.$emit("complete", this.project.id)
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
};
</script>

<style scoped>
.project {
  padding: 20px;
  background-color: #f2f2f2;
  margin: 10px;
  border-left: 6px solid crimson;
  border-radius: 8px;
}
h3 {
  color: indigo;
  cursor: pointer;
}
.flexing{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span{
  margin-left: 10px;
  color: black;
}
span:hover{
  color: #777;
  cursor: pointer;
}
.complete{
  border-color: green;
}
</style>
