import React from 'react'
import SingleTodo from './SingleTodo'

function propogate_todo(todo) {
    return (<SingleTodo />)
  }
export default function Todos(props) {
  return (
    <>
    props.todos
    </>
  )
}
