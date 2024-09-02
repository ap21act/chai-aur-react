### Redux Summary
```
Redux is core library and React-redux is it's implemenation
Redux-Toolkit 
```
## Store

```
All application has only one store -A single source of truth
Need configure STore

Intoduction of reducer into the configure store - a combination of function becuase it only works what you dfine it to take value to put in central store

```

### Reducer Configuration in todoSlice

```
createSlice is method to create slice 
--it needs name, initial state, reducers

I created initial state as
const initialState = {
    todos:[{
        id:1,
        text:'Hello World',
        
    }]
}

now creation of slice

addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
               
                
            }
            state.todos.push(todo)
        },



state=> Updated value of state in store not initial state
action=> action.payload   // for value payload==value 

now you need to push the value in store using 

state.todos.push(todo)


export reducer of reducers 

```