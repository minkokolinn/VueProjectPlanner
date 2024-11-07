<template>
  <div class="home">
    <h1>Home Page</h1>
    <FilterNav @filterBtn="current=$event" :current="current"></FilterNav>
    <div v-for="project in filteredProjects" :key="project.id">
      <SingleProject :project="project" @delete="removeProject" @complete="completeProject"></SingleProject>
    </div>
  </div>
</template>

<script>

import FilterNav from '../components/FilterNav'
import SingleProject from '../components/SingleProject'
export default {
  name: 'HomeView',
  components: {
    FilterNav,
    SingleProject
  },
  data(){
    return {
      projects : [],
      current : "all"
    }
  },
  computed:{
    filteredProjects(){
      if(this.current == "completed"){
        return this.projects.filter(p=>p.complete==true)
      }
      if(this.current == "ongoing"){
        return this.projects.filter(p=>p.complete==false)
      }
      return this.projects
    }
  },
  methods:{
    removeProject(id){
      this.projects = this.projects.filter(project=>project.id!=id)
    },
    completeProject(id){
      let foundProject = this.projects.find(project=>project.id===id)
      foundProject.complete = !foundProject.complete
    }
  },
  mounted(){
    fetch("http://localhost:3000/projects")
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.projects = data
    })
    .catch(err => {
      console.error(err);
    })
  }
}
</script>
