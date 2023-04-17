<template>
  
  <ul v-for="item in tasks" :key="item.message">
    <li>
      {{ item.message }}
    </li>
  </ul>

  <form action="">
    <input type="text" id="inputAdd">
  </form>
  
  <button @click="addTask()">click</button>
    

  
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      tasks: [{"id": 1, "message": "hej"}, {"id": 2, "message": "då"}]
    }
  },

  methods:{
    addTask(){
      let x = document.getElementById("inputAdd").value
      this.tasks.push({"id": this.tasks.length + 1, "message": x})
    }
  }

}
</script>

<style>

</style>
