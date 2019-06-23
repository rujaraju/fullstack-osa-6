import React from 'react'

const Notification = ({ store }) => {

  let visible = ''

  if (store.getState().notification == null) {
  visible = 'none'
  } 

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: visible,
    marginBottom: 5
  }
  return (
    <div style={style}>
      {store.getState().notification}
    </div>
  )
}

export default Notification
