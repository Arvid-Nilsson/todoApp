<template>
  
  <div class="todolist">
    <ul v-for="item in tasks" :key="item.message">
      
      <li>

        <p id="message">{{ item.message }}</p> 
        <button @click="removeTask(item.id)" id="removeButton">remove</button>

      </li>

    </ul>

    <form id="addForm" v-if="edit == false">
      
      <input type="text" id="inputAdd">

      <div> 
        <button @click="addTask()" id="addButton" type="button">click</button>
      </div>
      
      

    </form>
    
    

</div>
 

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      tasks: [{"id": 1, "message": "hej"}, {"id": 2, "message": "då"}],
      edit: false
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
    },

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

  #addForm{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .todolist{
    width: 100vw;
    height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
