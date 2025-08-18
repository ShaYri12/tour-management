import {createContext, useEffect, useReducer} from 'react'

const initial_state = {
    user: localStorage.getItem('user') !== "undefined" && localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    error: null,
}

export const AuthContext = createContext(initial_state)

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
          return {
            user: null,
            loading: true,
            error: null,
          }
        case 'LOGIN_SUCCESS':
          return {
            user: action.payload.user,
            loading: false,
            error:null,
          }
        case 'LOGIN_FAILURE':
          return {
            user: null,
            loading: false,
            error: action.payload.error,
          }
        case 'LOGOUT':
          return {
            user: null,
            loading: false,
            error: null,
            
          }
        case 'REGISTER_SUCCESS':
          return {
            user: null,
            loading: false,
            error: null,
            
          }
        default:
        return state
    }
}


export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state)

    useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])

    return (
    <AuthContext.Provider value={{
        user:state.user,
        loading: state.loading,
        error:state.error,
        role: state.user?.role,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>

)} 


