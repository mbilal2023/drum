import { call, put, takeLatest, select } from 'redux-saga/effects';
import { AUTH_ACTIONS, authActions } from '../actions/authActions';
import { uiActions } from '../reducers/uiReducer';
import { ApiService } from '../../services/api';
import { SecureStorage, TokenManager } from '../../utils/storage';

// Login saga
function* loginSaga(action) {
  try {
    const { email, password, rememberMe } = action.payload;

    // Show loading
    yield put(uiActions.setLoading('Signing in...', 'login'));

    // Call login API
    const response = yield call(ApiService.auth.login, email, password);

    if (response.success) {
      const { token, user } = response.data;

      // Store token securely
      yield call(SecureStorage.setToken, token);

      // Store credentials if remember me is checked
      if (rememberMe) {
        yield call(SecureStorage.setCredentials, email, password);
      }

      // Dispatch success action
      yield put(authActions.loginSuccess(token, user));
      
      // Show success toast
      yield put(uiActions.showToast('Welcome back!', 'success'));
    } else {
      // Dispatch failure action
      yield put(authActions.loginFailure(response.error));
      
      // Show error toast
      yield put(uiActions.showToast(response.error, 'error'));
    }
  } catch (error) {
    console.error('Login saga error:', error);
    yield put(authActions.loginFailure('Login failed. Please try again.'));
    yield put(uiActions.showToast('Login failed. Please try again.', 'error'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('login'));
  }
}

// Register saga
function* registerSaga(action) {
  try {
    const userData = action.payload;

    // Show loading
    yield put(uiActions.setLoading('Creating account...', 'register'));

    // Call register API
    const response = yield call(ApiService.auth.register, userData);

    if (response.success) {
      const { token, user } = response.data;

      // Store token securely
      yield call(SecureStorage.setToken, token);

      // Dispatch success action
      yield put(authActions.registerSuccess(token, user));
      
      // Show success toast
      yield put(uiActions.showToast('Account created successfully!', 'success'));
    } else {
      // Dispatch failure action
      yield put(authActions.registerFailure(response.error));
      
      // Show error toast
      yield put(uiActions.showToast(response.error, 'error'));
    }
  } catch (error) {
    console.error('Register saga error:', error);
    yield put(authActions.registerFailure('Registration failed. Please try again.'));
    yield put(uiActions.showToast('Registration failed. Please try again.', 'error'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('register'));
  }
}

// Logout saga
function* logoutSaga() {
  try {
    // Show loading
    yield put(uiActions.setLoading('Signing out...', 'logout'));

    // Call logout API
    yield call(ApiService.auth.logout);

    // Clear secure storage
    yield call(SecureStorage.removeToken);
    yield call(SecureStorage.removeCredentials);

    // Dispatch success action
    yield put(authActions.logoutSuccess());
    
    // Show success toast
    yield put(uiActions.showToast('Signed out successfully', 'success'));
  } catch (error) {
    console.error('Logout saga error:', error);
    // Even if logout fails, clear local data
    yield call(SecureStorage.removeToken);
    yield call(SecureStorage.removeCredentials);
    yield put(authActions.logoutSuccess());
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('logout'));
  }
}

// Auto login saga
function* autoLoginSaga() {
  try {
    // Show loading
    yield put(uiActions.setLoading('Checking authentication...', 'autoLogin'));

    // Get stored token
    const token = yield call(SecureStorage.getToken);

    if (!token) {
      yield put(authActions.autoLoginFailure('No stored token found'));
      return;
    }

    // Check if token is expired
    const isExpired = TokenManager.isTokenExpired(token);
    if (isExpired) {
      // Try to refresh token or clear storage
      yield call(SecureStorage.removeToken);
      yield put(authActions.autoLoginFailure('Token expired'));
      return;
    }

    // Get user info from token
    const userInfo = TokenManager.getUserInfoFromToken(token);
    if (!userInfo) {
      yield put(authActions.autoLoginFailure('Invalid token'));
      return;
    }

    // Verify token with server
    const response = yield call(ApiService.auth.verifyToken);

    if (response.success) {
      // Dispatch success action
      yield put(authActions.autoLoginSuccess(token, response.data.user || userInfo));
    } else {
      // Token is invalid, clear storage
      yield call(SecureStorage.removeToken);
      yield put(authActions.autoLoginFailure(response.error));
    }
  } catch (error) {
    console.error('Auto login saga error:', error);
    yield call(SecureStorage.removeToken);
    yield put(authActions.autoLoginFailure('Auto login failed'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('autoLogin'));
  }
}

// Verify token saga
function* verifyTokenSaga() {
  try {
    // Show loading
    yield put(uiActions.setLoading('Verifying session...', 'verifyToken'));

    // Get stored token
    const token = yield call(SecureStorage.getToken);

    if (!token) {
      yield put(authActions.verifyTokenFailure('No token found'));
      return;
    }

    // Verify token with server
    const response = yield call(ApiService.auth.verifyToken);

    if (response.success) {
      yield put(authActions.verifyTokenSuccess(response.data.user));
    } else {
      // Token is invalid, clear storage
      yield call(SecureStorage.removeToken);
      yield put(authActions.verifyTokenFailure(response.error));
    }
  } catch (error) {
    console.error('Verify token saga error:', error);
    yield call(SecureStorage.removeToken);
    yield put(authActions.verifyTokenFailure('Token verification failed'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('verifyToken'));
  }
}

// Forgot password saga
function* forgotPasswordSaga(action) {
  try {
    const { email } = action.payload;

    // Show loading
    yield put(uiActions.setLoading('Sending reset email...', 'forgotPassword'));

    // Call forgot password API
    const response = yield call(ApiService.auth.forgotPassword, email);

    if (response.success) {
      yield put(authActions.forgotPasswordSuccess(response.data.message));
      yield put(uiActions.showToast('Reset email sent successfully!', 'success'));
    } else {
      yield put(authActions.forgotPasswordFailure(response.error));
      yield put(uiActions.showToast(response.error, 'error'));
    }
  } catch (error) {
    console.error('Forgot password saga error:', error);
    yield put(authActions.forgotPasswordFailure('Failed to send reset email'));
    yield put(uiActions.showToast('Failed to send reset email', 'error'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('forgotPassword'));
  }
}

// Reset password saga
function* resetPasswordSaga(action) {
  try {
    const { token, password } = action.payload;

    // Show loading
    yield put(uiActions.setLoading('Resetting password...', 'resetPassword'));

    // Call reset password API
    const response = yield call(ApiService.auth.resetPassword, token, password);

    if (response.success) {
      yield put(authActions.resetPasswordSuccess(response.data.message));
      yield put(uiActions.showToast('Password reset successfully!', 'success'));
    } else {
      yield put(authActions.resetPasswordFailure(response.error));
      yield put(uiActions.showToast(response.error, 'error'));
    }
  } catch (error) {
    console.error('Reset password saga error:', error);
    yield put(authActions.resetPasswordFailure('Password reset failed'));
    yield put(uiActions.showToast('Password reset failed', 'error'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('resetPassword'));
  }
}

// Auth saga watcher
export default function* authSaga() {
  yield takeLatest(AUTH_ACTIONS.LOGIN_REQUEST, loginSaga);
  yield takeLatest(AUTH_ACTIONS.REGISTER_REQUEST, registerSaga);
  yield takeLatest(AUTH_ACTIONS.LOGOUT_REQUEST, logoutSaga);
  yield takeLatest(AUTH_ACTIONS.AUTO_LOGIN_REQUEST, autoLoginSaga);
  yield takeLatest(AUTH_ACTIONS.VERIFY_TOKEN_REQUEST, verifyTokenSaga);
  yield takeLatest(AUTH_ACTIONS.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeLatest(AUTH_ACTIONS.RESET_PASSWORD_REQUEST, resetPasswordSaga);
}