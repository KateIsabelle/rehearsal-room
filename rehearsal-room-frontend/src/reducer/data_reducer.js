export const SET_USERS = 'SET_USERS';
export const SET_BOOKINGS = 'SET_BOOKINGS';


const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                    loading: false,
            };
        case SET_BOOKINGS:
            return {
                ...state, 
                bookings: action.bookings
            };
        default:
            return state;
    }
};

export default dataReducer;