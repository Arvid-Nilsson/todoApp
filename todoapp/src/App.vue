<template>
  
  <ul v-for="item in tasks" :key="item.message">
    <li>

      <p id="message">{{ item.message }}</p> 
      <button @click="removeTask(item.id)" id="removeButton">remove</button>

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
      let x = document.getElementById("inputAdd")
      this.tasks.push({"id": this.tasks.length + 1, "message": x.value})
      x.value = ""
    },

    removeTask(id){
      this.tasks = this.tasks.filter(task => task.id != id)
    }
  }

}
</script>

<style>
  #removeButton{
    display: inline;
    margin-left: 10px;
  }
  #message{
    display: inline;
  }
</style>
