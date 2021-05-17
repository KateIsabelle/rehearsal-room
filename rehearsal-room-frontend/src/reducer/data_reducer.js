export const SET_USERS = 'SET_USERS';
export const SET_USER_INFO = 'SET_USER';
export const SET_BOOKINGS = 'SET_BOOKINGS';
export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';
export const SET_POPUP = 'SET_POPUP';
export const SET_SPACE_DATA = 'SET_SPACE_DATA';
export const SET_SPACE_VISUAL_MODE = 'SET_SPACE_VISUAL_MODE';
export const SET_MAP_LOADED = 'SET_MAP_LOADED';

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
        case SET_USER_INFO: // on login
            return {
                ...state,
                user: action.user,
                bookings: action.bookings,
                hostBookings: action.hostBookings
            };
        case SET_APPLICATION_DATA:
            return {
                ...state,
                users: action.users,
                // bookings: action.bookings 
            };
        case SET_POPUP:
            return {
                ...state,
                popUp: action.popUp,
            }
        case SET_SPACE_VISUAL_MODE:
            return {
                ...state,
                visualMode: action.visualMode
            }
        case SET_SPACE_DATA:
            return {
                ...state,
                spaceData: action.spaceData
            }
        case SET_MAP_LOADED:
            return {
                ...state,
                mapLoaded: action.mapLoaded
            }
        default:
            return state;
    }
};

export default dataReducer;