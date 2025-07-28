// Auth Action Types
export const AUTH_ACTIONS = {
  // Login
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',

  // Register
  REGISTER_REQUEST: 'AUTH/REGISTER_REQUEST',
  REGISTER_SUCCESS: 'AUTH/REGISTER_SUCCESS',
  REGISTER_FAILURE: 'AUTH/REGISTER_FAILURE',

  // Logout
  LOGOUT_REQUEST: 'AUTH/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'AUTH/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'AUTH/LOGOUT_FAILURE',

  // Token verification
  VERIFY_TOKEN_REQUEST: 'AUTH/VERIFY_TOKEN_REQUEST',
  VERIFY_TOKEN_SUCCESS: 'AUTH/VERIFY_TOKEN_SUCCESS',
  VERIFY_TOKEN_FAILURE: 'AUTH/VERIFY_TOKEN_FAILURE',

  // Auto login
  AUTO_LOGIN_REQUEST: 'AUTH/AUTO_LOGIN_REQUEST',
  AUTO_LOGIN_SUCCESS: 'AUTH/AUTO_LOGIN_SUCCESS',
  AUTO_LOGIN_FAILURE: 'AUTH/AUTO_LOGIN_FAILURE',

  // Forgot password
  FORGOT_PASSWORD_REQUEST: 'AUTH/FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'AUTH/FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILURE: 'AUTH/FORGOT_PASSWORD_FAILURE',

  // Reset password
  RESET_PASSWORD_REQUEST: 'AUTH/RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS: 'AUTH/RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILURE: 'AUTH/RESET_PASSWORD_FAILURE',

  // Clear auth state
  CLEAR_AUTH_ERROR: 'AUTH/CLEAR_AUTH_ERROR',
  CLEAR_AUTH_MESSAGE: 'AUTH/CLEAR_AUTH_MESSAGE',
  RESET_AUTH_STATE: 'AUTH/RESET_AUTH_STATE',
};

// Auth Action Creators
export const authActions = {
  // Login actions
  loginRequest: (email, password, rememberMe = false) => ({
    type: AUTH_ACTIONS.LOGIN_REQUEST,
    payload: { email, password, rememberMe },
  }),

  loginSuccess: (token, user) => ({
    type: AUTH_ACTIONS.LOGIN_SUCCESS,
    payload: { token, user },
  }),

  loginFailure: (error) => ({
    type: AUTH_ACTIONS.LOGIN_FAILURE,
    payload: { error },
  }),

  // Register actions
  registerRequest: (userData) => ({
    type: AUTH_ACTIONS.REGISTER_REQUEST,
    payload: userData,
  }),

  registerSuccess: (token, user) => ({
    type: AUTH_ACTIONS.REGISTER_SUCCESS,
    payload: { token, user },
  }),

  registerFailure: (error) => ({
    type: AUTH_ACTIONS.REGISTER_FAILURE,
    payload: { error },
  }),

  // Logout actions
  logoutRequest: () => ({
    type: AUTH_ACTIONS.LOGOUT_REQUEST,
  }),

  logoutSuccess: () => ({
    type: AUTH_ACTIONS.LOGOUT_SUCCESS,
  }),

  logoutFailure: (error) => ({
    type: AUTH_ACTIONS.LOGOUT_FAILURE,
    payload: { error },
  }),

  // Token verification actions
  verifyTokenRequest: () => ({
    type: AUTH_ACTIONS.VERIFY_TOKEN_REQUEST,
  }),

  verifyTokenSuccess: (user) => ({
    type: AUTH_ACTIONS.VERIFY_TOKEN_SUCCESS,
    payload: { user },
  }),

  verifyTokenFailure: (error) => ({
    type: AUTH_ACTIONS.VERIFY_TOKEN_FAILURE,
    payload: { error },
  }),

  // Auto login actions
  autoLoginRequest: () => ({
    type: AUTH_ACTIONS.AUTO_LOGIN_REQUEST,
  }),

  autoLoginSuccess: (token, user) => ({
    type: AUTH_ACTIONS.AUTO_LOGIN_SUCCESS,
    payload: { token, user },
  }),

  autoLoginFailure: (error) => ({
    type: AUTH_ACTIONS.AUTO_LOGIN_FAILURE,
    payload: { error },
  }),

  // Forgot password actions
  forgotPasswordRequest: (email) => ({
    type: AUTH_ACTIONS.FORGOT_PASSWORD_REQUEST,
    payload: { email },
  }),

  forgotPasswordSuccess: (message) => ({
    type: AUTH_ACTIONS.FORGOT_PASSWORD_SUCCESS,
    payload: { message },
  }),

  forgotPasswordFailure: (error) => ({
    type: AUTH_ACTIONS.FORGOT_PASSWORD_FAILURE,
    payload: { error },
  }),

  // Reset password actions
  resetPasswordRequest: (token, password) => ({
    type: AUTH_ACTIONS.RESET_PASSWORD_REQUEST,
    payload: { token, password },
  }),

  resetPasswordSuccess: (message) => ({
    type: AUTH_ACTIONS.RESET_PASSWORD_SUCCESS,
    payload: { message },
  }),

  resetPasswordFailure: (error) => ({
    type: AUTH_ACTIONS.RESET_PASSWORD_FAILURE,
    payload: { error },
  }),

  // Utility actions
  clearAuthError: () => ({
    type: AUTH_ACTIONS.CLEAR_AUTH_ERROR,
  }),

  clearAuthMessage: () => ({
    type: AUTH_ACTIONS.CLEAR_AUTH_MESSAGE,
  }),

  resetAuthState: () => ({
    type: AUTH_ACTIONS.RESET_AUTH_STATE,
  }),
};

export default authActions;