import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {
return (
    <div key={anecdote.id}>
        <div>
            {anecdote.content}
        </div>
        <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
        </div>
    </div>
    )
}

const AnecdoteList = ({ store }) => {

    const voteForAnecdote = (anecdote) => {
        //console.log(anecdote.id)
        store.dispatch(voteFor(anecdote.id))
        store.dispatch(setNotification('you voted for: ' + anecdote.content))
        setTimeout(function(){store.dispatch(resetNotification())}, 5000)
    }

return (<div>
{store.getState().anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(store.getState().filter.toLowerCase()) ).map(anecdote =>
<Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => voteForAnecdote(anecdote)}/> )}
</div>
)
}

export default AnecdoteList