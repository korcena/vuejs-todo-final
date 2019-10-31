var app = new Vue({
    el: '#app', 
    data : {
        newEntry: "",
        todos: []
    }, 
    watch: {
        todos: {
            handler: function(newList){
                const json = JSON.stringify(newList);
                sessionStorage.setItem('my-todo-list', json);
            }, 
            deep: true
        }
    },
    computed: {
        unfinishedEntries: function(){
            return this.todos.filter(entry => !entry.isDone);
        }
    }, 
    methods: {
        addEntry: function(event) {
            if(this.newEntry){
                this.todos.push({isDone: false, value: this.newEntry});
            }
            this.newEntry = null;
        }, 
        removeEntry: function(event, index){
            this.todos.splice(index, 1);
        }
    }, 
    mounted: function(){
        // Retrieve session data 
        const ssTodoList = sessionStorage.getItem('my-todo-list');
        this.todos = ssTodoList ? JSON.parse(ssTodoList) : [];
    }
});





