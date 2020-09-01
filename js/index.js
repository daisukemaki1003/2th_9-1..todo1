
(function() {
  'use strict';

  var vm = new Vue ({
    el: '#app',
    data: {
      newItem: '',
      errerMessage: '',
      finishTask: [],
      todos: [],
      endTask: [],
    },

    watch: {
      todos: {
        handler() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      },

      endTask: {
        handler() {
          localStorage.setItem('endTask', JSON.stringify(this.endTask));
        },
        deep: true
      },
    },

    mounted() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
      this.endTask = JSON.parse(localStorage.getItem('endTask')) || [];
    },

    methods: {
      addItem() {
        if (this.newItem.length !== 0){
          var item = {
            title: this.newItem,
            isDone: false
          }
          this.todos.push(item);
          this.newItem = '';
        } else {
          this.errerMessage = 'taskを入力してください。'
        }
      },

      remaining(todo) {
        return todo.isDone = true;
      },

      finising(todo) { 
        return todo.isDone = false;
      },

      parge() {
        if (this.finish.length !== 0) {
          var d = new Date();
          var date = 
          d.getFullYear() + "/" + 
          (d.getMonth() +1 ) + "/" + 
          d.getDate();
          
          this.finish.forEach(fItem => {
            var f = fItem.title;
            this.finishTask.push(f);
          })
          var pastTask = {
            title: this.finishTask,
            today: date
          }
          this.endTask.push(pastTask);
          return this.todos = this.todos.filter(todo => !todo.isDone);
        }
        }
      },
    
  

    computed: {
      // Items() {
      //   return this.todos.filter(todo => todo.title.length !== 0);
      // },

      remain() {
        return this.todos.filter(todo => !todo.isDone);
      },

      finish() {
        return this.todos.filter(todo => todo.isDone);
      },
    },
  
  });
})();