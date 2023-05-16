const initState = {
    isLoading: false,
}

type StateType = typeof initState
type ActionType = LoadingActionType

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {isLoading: action.isLoading}

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
