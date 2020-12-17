import React, { useReducer } from 'react';

export const GlobalContext = React.createContext();

const initialState = {
  users: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return { ...state, users: state.users.filter(user => {
          return user.id !== action.payload;
        })
      }
    case 'ADD_USER':
      return { ...state, users: [action.payload, ...state.users]}
    case 'EDIT_USER':
      const updateUser = action.payload;

      const updateUsers = state.users.map(user => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      })
      return { ...state, users: updateUsers }

    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeUser = (id) => {
    dispatch({ type: 'REMOVE_USER', payload: id })
  }

  const addUser = (user) => {
    dispatch({ type: 'ADD_USER', payload: user })
  }

  const editUser = (user) => {
    dispatch({ type: 'EDIT_USER', payload: user })
  }

  return (
    <GlobalContext.Provider value={{ users: state.users, removeUser, addUser, editUser }}>
      {children}
    </GlobalContext.Provider>
  )
}