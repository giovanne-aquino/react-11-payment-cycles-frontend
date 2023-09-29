const INITIAL_STATE = { selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {//seleciona ação
        case 'TAB_SELECTED':// aba for selecionada 
            return { ...state, selected: action.payload }
        case 'TAB_SHOWED':
            return { ...state, visible: action.payload }
        default:
            return state
    }
}