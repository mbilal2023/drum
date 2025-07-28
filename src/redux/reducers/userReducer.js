// User Action Types
export const USER_ACTIONS = {
  GET_PROFILE_REQUEST: 'USER/GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS: 'USER/GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE: 'USER/GET_PROFILE_FAILURE',

  UPDATE_PROFILE_REQUEST: 'USER/UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS: 'USER/UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILURE: 'USER/UPDATE_PROFILE_FAILURE',

  CHANGE_PASSWORD_REQUEST: 'USER/CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS: 'USER/CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILURE: 'USER/CHANGE_PASSWORD_FAILURE',

  CLEAR_USER_ERROR: 'USER/CLEAR_USER_ERROR',
  CLEAR_USER_MESSAGE: 'USER/CLEAR_USER_MESSAGE',
};

// Initial user state
const initialState = {
  profile: null,
  isLoading: false,
  error: null,
  message: null,
  
  // Loading states
  profileLoading: false,
  updateProfileLoading: false,
  changePasswordLoading: false,
  
  // Success flags
  updateProfileSuccess: false,
  changePasswordSuccess: false,
};

// User reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get profile cases
    case USER_ACTIONS.GET_PROFILE_REQUEST:
      return {
        ...state,
        profileLoading: true,
        isLoading: true,
        error: null,
      };

    case USER_ACTIONS.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileLoading: false,
        isLoading: false,
        profile: action.payload.profile,
        error: null,
      };

    case USER_ACTIONS.GET_PROFILE_FAILURE:
      return {
        ...state,
        profileLoading: false,
        isLoading: false,
        error: action.payload.error,
      };

    // Update profile cases
    case USER_ACTIONS.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        updateProfileLoading: true,
        isLoading: true,
        error: null,
        message: null,
        updateProfileSuccess: false,
      };

    case USER_ACTIONS.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfileLoading: false,
        isLoading: false,
        updateProfileSuccess: true,
        profile: { ...state.profile, ...action.payload.profile },
        error: null,
        message: 'Profile updated successfully',
      };

    case USER_ACTIONS.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updateProfileLoading: false,
        isLoading: false,
        updateProfileSuccess: false,
        error: action.payload.error,
        message: null,
      };

    // Change password cases
    case USER_ACTIONS.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        changePasswordLoading: true,
        isLoading: true,
        error: null,
        message: null,
        changePasswordSuccess: false,
      };

    case USER_ACTIONS.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordLoading: false,
        isLoading: false,
        changePasswordSuccess: true,
        error: null,
        message: 'Password changed successfully',
      };

    case USER_ACTIONS.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        changePasswordLoading: false,
        isLoading: false,
        changePasswordSuccess: false,
        error: action.payload.error,
        message: null,
      };

    // Utility cases
    case USER_ACTIONS.CLEAR_USER_ERROR:
      return {
        ...state,
        error: null,
      };

    case USER_ACTIONS.CLEAR_USER_MESSAGE:
      return {
        ...state,
        message: null,
      };

    default:
      return state;
  }
};

export default userReducer;