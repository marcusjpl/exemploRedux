export default {

    setText(text) {
        return { type: 'SET_TEXT', payload: text }
    },

    setNome(text) {
        return { type: 'SET_NOME', payload: text }
    },

    setShow(object) {
        return { type: 'SET_SHOW', payload: object }
    }
    
}