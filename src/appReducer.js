const initialState = { text: 'Este texto', nome: '', show: {} }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.payload }
        case 'SET_NOME':
            return { ...state, nome: action.payload }
        case 'SET_SHOW':
            return { ...state, show: action.payload }
        default:
            return state
    }
}