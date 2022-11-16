React Learning

Components types 

    1 statefull components (class based components)
    2 stateless components (function based components)

SetState
    - always use setState method in class to modify the value dont modify the state value directly.

Event Binding in class based component
    1 in event handlers user event_func.bind()
    2 call the event_func in ()=> function
    3 bind the function in constructor in class based components
    4 use a method with arrow ()=> function and directlu use it into and event handler (recomanded and easy to use)

two way data transfer

    1 parent to child using props
    2 child to parent using props with function


conditional-rendering
    1 using if/else
    2 Element variables
    3 Ternary conditional operator
    4 short circuit operator 


Form handling using form


Redux  
    - for javascript apps
    - state container
    - is predictable
    - manage the communication between multiple components.

Topics of Redux:
    1 Redux architecture.

        \src
            \components
                - component.js
            \containers
                - container.js
            \services
                \actions
                \reducers
            constants.js
        stores.js

***************last video****************************
https://www.youtube.com/watch?v=OlTxr6EKKS4&list=PL8p2I9GklV47TDYUq8RmFzeI9CgOoVgpJ&index=10
    2 Props in Redux.
    3 make necesary file and wraps.
    4 action
    5 Reducer
    6 root reducer
    7 container
    8 middleware
    9 selector