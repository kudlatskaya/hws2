import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // в алфавитном порядке a.name > b.name
            if(action.payload === 'up') {
                return [...state.sort((a, b) => {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB) //сортируем строки по возрастанию
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0 // Никакой сортировки
                } )]
            }
            // в обратном порядке a.name < b.name}
            if(action.payload === 'down') {
                return [...state.sort((a, b) => {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB) return 1
                    if (nameA > nameB) return -1
                    return 0
                } )]
            }
            return state // need to fix
        }
        case 'check': {

            return [...state.filter((u) => u.age > action.payload)] // need to fix
        }
        default:
            return state
    }
}
