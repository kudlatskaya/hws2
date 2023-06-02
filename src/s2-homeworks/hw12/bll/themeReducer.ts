import {combineReducers} from "redux";

const initState = {
    themeId: 1,
}

type ActionType =  {type: string, id: number}
export type StateType = {themeId: number}

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({type: 'SET_THEME_ID', id}) // fix any

export const rootReducer = combineReducers({
    theme: themeReducer
})

export type StoreType = ReturnType<typeof rootReducer>