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


React Hooks
    1 important react hooks

    2 useState
        - used for manage states.

    3 useEffect
        - used to change data dynamically or add effects in dom with state for example we can chnge title with a state changing data.

        - you can add effects to the out side of yourn component in dom which is called side effects.

        - we can call an out side api using use Effect.

        - deta fatching, dom changing.

        - It re-render our component.

        - we can use dependency list to re-render the component for specific changhe of usestates.

        - Mounting and Unmounting the event listners. (clean up code  returning a function with unmounting the mounted events in useEffect)--imp

- Data fatching from api using axio using useEffect --imp

                ****important*** 
 -practice data fatching using useEffect

    4 useContext

    5 useRef

    6 useReducer

    7 useMemo

    8 useCallback

    9 useImperativeHandle

    10 useLayoutEffect

    11 useDebugValue
