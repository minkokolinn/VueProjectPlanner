<template>
  <nav class="filter-nav">
    <button @click="filterBy('all')" :class="{active:current=='all'}">All</button>
    <button @click="filterBy('completed')" :class="{active:current=='completed'}">Completed</button>
    <button @click="filterBy('ongoing')" :class="{active:current=='ongoing'}">On going</button>
  </nav>
</template>

<script>
export default {
  props:['current'],
  methods:{
    filterBy(param){
      this.$emit('filterBtn',param)
    }
  }
}
</script>

<style>
  .filter-nav button{
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-left: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
  button.active{
    color: #333;
  }
</style>