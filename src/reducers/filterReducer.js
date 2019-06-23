const filterReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.data
      default:
        return state
    }
  }
  
  export const setFilter = data => {
    return {
      type: 'SET_FILTER',
      data,
    }
  }

  export const resetNotification = () => {
    return {
      type: 'RESET_NOTIFICATION',
    }
  }
  
  export default filterReducer  