const initialState = { text: 'Este texto', nome: '' }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.payload }
        case 'SET_NOME':
            return { ...state, nome: action.payload }
        default:
            return state
    }
}