import { AUTH_ACTIONS } from '../actions/authActions';

// Initial auth state
const initialState = {
  // User authentication status
  isAuthenticated: false,
  isLoading: false,
  isInitialized: false,

  // User data
  user: null,
  token: null,

  // Error and success messages
  error: null,
  message: null,

  // Loading states for different operations
  loginLoading: false,
  registerLoading: false,
  logoutLoading: false,
  verifyTokenLoading: false,
  autoLoginLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false,

  // Success flags
  loginSuccess: false,
  registerSuccess: false,
  logoutSuccess: false,
  forgotPasswordSuccess: false,
  resetPasswordSuccess: false,

  // Remember me option
  rememberMe: false,
};

// Auth reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login cases
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        isLoading: true,
        error: null,
        message: null,
        loginSuccess: false,
        rememberMe: action.payload.rememberMe,
      };

    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        loginLoading: false,
        loginSuccess: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        message: 'Login successful',
      };

    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        loginLoading: false,
        loginSuccess: false,
        user: null,
        token: null,
        error: action.payload.error,
        message: null,
      };

    // Register cases
    case AUTH_ACTIONS.REGISTER_REQUEST:
      return {
        ...state,
        registerLoading: true,
        isLoading: true,
        error: null,
        message: null,
        registerSuccess: false,
      };

    case AUTH_ACTIONS.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        registerLoading: false,
        registerSuccess: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        message: 'Registration successful',
      };

    case AUTH_ACTIONS.REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        registerLoading: false,
        registerSuccess: false,
        user: null,
        token: null,
        error: action.payload.error,
        message: null,
      };

    // Logout cases
    case AUTH_ACTIONS.LOGOUT_REQUEST:
      return {
        ...state,
        logoutLoading: true,
        isLoading: true,
        error: null,
        message: null,
        logoutSuccess: false,
      };

    case AUTH_ACTIONS.LOGOUT_SUCCESS:
      return {
        ...initialState,
        isInitialized: true,
        logoutSuccess: true,
        message: 'Logout successful',
      };

    case AUTH_ACTIONS.LOGOUT_FAILURE:
      return {
        ...state,
        logoutLoading: false,
        isLoading: false,
        logoutSuccess: false,
        error: action.payload.error,
        message: null,
      };

    // Token verification cases
    case AUTH_ACTIONS.VERIFY_TOKEN_REQUEST:
      return {
        ...state,
        verifyTokenLoading: true,
        isLoading: true,
        error: null,
      };

    case AUTH_ACTIONS.VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isInitialized: true,
        verifyTokenLoading: false,
        isLoading: false,
        user: action.payload.user,
        error: null,
      };

    case AUTH_ACTIONS.VERIFY_TOKEN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isInitialized: true,
        verifyTokenLoading: false,
        isLoading: false,
        user: null,
        token: null,
        error: action.payload.error,
      };

    // Auto login cases
    case AUTH_ACTIONS.AUTO_LOGIN_REQUEST:
      return {
        ...state,
        autoLoginLoading: true,
        isLoading: true,
        error: null,
      };

    case AUTH_ACTIONS.AUTO_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isInitialized: true,
        autoLoginLoading: false,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };

    case AUTH_ACTIONS.AUTO_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isInitialized: true,
        autoLoginLoading: false,
        isLoading: false,
        user: null,
        token: null,
        error: action.payload.error,
      };

    // Forgot password cases
    case AUTH_ACTIONS.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPasswordLoading: true,
        isLoading: true,
        error: null,
        message: null,
        forgotPasswordSuccess: false,
      };

    case AUTH_ACTIONS.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordLoading: false,
        isLoading: false,
        forgotPasswordSuccess: true,
        error: null,
        message: action.payload.message,
      };

    case AUTH_ACTIONS.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotPasswordLoading: false,
        isLoading: false,
        forgotPasswordSuccess: false,
        error: action.payload.error,
        message: null,
      };

    // Reset password cases
    case AUTH_ACTIONS.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPasswordLoading: true,
        isLoading: true,
        error: null,
        message: null,
        resetPasswordSuccess: false,
      };

    case AUTH_ACTIONS.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordLoading: false,
        isLoading: false,
        resetPasswordSuccess: true,
        error: null,
        message: action.payload.message,
      };

    case AUTH_ACTIONS.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPasswordLoading: false,
        isLoading: false,
        resetPasswordSuccess: false,
        error: action.payload.error,
        message: null,
      };

    // Utility cases
    case AUTH_ACTIONS.CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: null,
      };

    case AUTH_ACTIONS.CLEAR_AUTH_MESSAGE:
      return {
        ...state,
        message: null,
      };

    case AUTH_ACTIONS.RESET_AUTH_STATE:
      return {
        ...initialState,
        isInitialized: true,
      };

    default:
      return state;
  }
};

export default authReducer;