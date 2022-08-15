import React, {useReducer} from "react"

export default function (reducer, actions, initialValue) {
    const Context = React.createContext()

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialValue)

        //loop all actions
        const boundActions = {}
        for(let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ ...boundActions, state }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider}
}