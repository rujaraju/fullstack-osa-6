import React from 'react'
import { setFilter } from '../reducers/filterReducer'

const FilterForm = ({ store }) => {
  const formStyle = {
    marginBottom: 5
  }

/*const addAnecdote= (event) => {
    console.log(addNew)
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log(anecdote)
    store.dispatch(addNew(anecdote))
    store.dispatch(setNotification("saving new notification: " + anecdote))
    setTimeout(function(){store.dispatch(resetNotification())}, 5000)
    event.target.anecdote.value = ''
}*/

return (
<form style={formStyle}>
      Filter: <input onChange={(event) => store.dispatch(setFilter(event.target.value))}name="anecdote" />
  </form>
)
}

export default FilterForm