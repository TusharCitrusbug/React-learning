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
https://www.youtube.com/watch?v=271tQskDiCg&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=17
    
    - creating multiple reducers and combine reducers in one and the create a store.

    - middleware is the custom functionality to extend redux functionality.
    