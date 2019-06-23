const notificationReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      case 'RESET_NOTIFICATION':
        return null
      default:
        return state
    }
  }
  
  export const setNotification = data => {
    return {
      type: 'SET_NOTIFICATION',
      data,
    }
  }

  export const resetNotification = () => {
    return {
      type: 'RESET_NOTIFICATION',
    }
  }
  
  export default notificationReducer  