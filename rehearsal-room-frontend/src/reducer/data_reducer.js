export const SET_USERS = 'SET_USERS';
export const SET_BOOKINGS = 'SET_BOOKINGS';
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";


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
            case SET_APPLICATION_DATA:
            return {
                users: action.users,
                loading: false,
                bookings: action.bookings
            };
        default:
            return state;
    }
};

export default dataReducer;