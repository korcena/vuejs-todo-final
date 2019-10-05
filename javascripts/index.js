
var app = new Vue({
    el: '#app', 
    data : {
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
            const value = event.target.value;
            if(value){
                this.todos.push({isDone: false, value: value});
            }
            event.target.value = null;
        }
    }, 
    mounted: function(){
        // Retrieve session data 
        const ssTodoList = sessionStorage.getItem('my-todo-list');
        this.todos = ssTodoList ? JSON.parse(ssTodoList) : [];
    }
});