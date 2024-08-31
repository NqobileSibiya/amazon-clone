export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,  // Spread the existing state properties
                basket: [...state.basket, action.payload]  // Add the new item to the basket
            };
            case 'SET_USER':
                return {
                    ...state,
                    user: action.payload,
                }
        default:
            return state;  // Return the current state if action type is not matched
    }
};


