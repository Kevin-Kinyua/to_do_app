const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')
const addBtn = document.getElementById('addBtn')

// const mongoose = require('mongoose')

addBtn.addEventListener('click', function(){
    const li = document.createElement('li')
    const text = document.createTextNode(todoInput.value)

    const doneBtn = document.createElement('button');
    doneBtn.textContent = "Done"
    doneBtn.classList.add('done-btn')

    const progressBtn = document.createElement('button');
    progressBtn.textContent = "In Progress"
    progressBtn.classList.add('progress-btn')

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add('delete-btn')

    
    doneBtn.addEventListener('click', function(){
        li.classList.toggle('complete') 
    })


    progressBtn.addEventListener('click', function(){
        li.classList.toggle('in-progress') 
    })

    deleteBtn.addEventListener('click', function(){
        li.classList.toggle('delete') 
    })

    li.appendChild(text)
    li.appendChild(doneBtn)
    li.appendChild(progressBtn)
    li.appendChild(deleteBtn)

    todoList.appendChild(li)
    todoInput.value = ' '
})

        function createButton(text, className, onClickHandler) {
            const button = document.createElement('button');
            button.textContent = text;
            button.classList.add(className);
            button.addEventListener('click', onClickHandler);
            return button;
        }

        // Additional code for MongoDB connection
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost:27017/tasks', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        
        db.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });
        
        db.once('open', () => {
            console.log('MongoDB connection successful');
        });
        
        const taskSchema = new mongoose.Schema({
            todoInput: String

        });
        
        const Task = mongoose.model('Task', taskSchema);
