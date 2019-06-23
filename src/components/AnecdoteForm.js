import React from 'react'
import { addNew } from  '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {
  const formStyle = {
    marginBottom: 5
  }

const addAnecdote= (event) => {
    console.log(addNew)
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log(anecdote)
    store.dispatch(addNew(anecdote))
    store.dispatch(setNotification("saving new notification: " + anecdote))
    setTimeout(function(){store.dispatch(resetNotification())}, 5000)
    event.target.anecdote.value = ''
}

return (
<form style={formStyle} onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">Add new</button>
  </form>
)
}

export default AnecdoteForm