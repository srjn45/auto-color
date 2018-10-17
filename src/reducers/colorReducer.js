export default function colorReducer(state = { backgroundColor: "777777", color: "222222" }, action) {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            return { ...state, backgroundColor: action.payload.backgroundColor, color: action.payload.color }
        }
    }
    return state;
}