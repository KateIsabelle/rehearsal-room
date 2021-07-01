export const SET_USER_INFO = 'SET_USER';
export const SET_POPUP = 'SET_POPUP';
export const SET_SPACE_DATA = 'SET_SPACE_DATA';
export const SET_SPACE_VISUAL_MODE = 'SET_SPACE_VISUAL_MODE';

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_USER_INFO: // on login
            return {
                ...state,
                user: action.user,
                bookings: action.bookings,
                hostBookings: action.hostBookings
            };
        case SET_POPUP: // for /space/:id
            return {
                ...state,
                popUp: action.popUp,
            }
        case SET_SPACE_VISUAL_MODE: // for /space/:id
            return {
                ...state,
                visualMode: action.visualMode
            }
        case SET_SPACE_DATA: // for /space/:id
            return {
                ...state,
                spaceData: action.spaceData
            }
        default:
            return state;
    }
};

export default dataReducer;