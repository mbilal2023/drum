import { call, put, takeLatest } from 'redux-saga/effects';
import { USER_ACTIONS } from '../reducers/userReducer';
import { uiActions } from '../reducers/uiReducer';
import { ApiService } from '../../services/api';

// User Action Creators
export const userActions = {
  getProfileRequest: () => ({
    type: USER_ACTIONS.GET_PROFILE_REQUEST,
  }),

  getProfileSuccess: (profile) => ({
    type: USER_ACTIONS.GET_PROFILE_SUCCESS,
    payload: { profile },
  }),

  getProfileFailure: (error) => ({
    type: USER_ACTIONS.GET_PROFILE_FAILURE,
    payload: { error },
  }),

  updateProfileRequest: (profileData) => ({
    type: USER_ACTIONS.UPDATE_PROFILE_REQUEST,
    payload: profileData,
  }),

  updateProfileSuccess: (profile) => ({
    type: USER_ACTIONS.UPDATE_PROFILE_SUCCESS,
    payload: { profile },
  }),

  updateProfileFailure: (error) => ({
    type: USER_ACTIONS.UPDATE_PROFILE_FAILURE,
    payload: { error },
  }),

  changePasswordRequest: (currentPassword, newPassword) => ({
    type: USER_ACTIONS.CHANGE_PASSWORD_REQUEST,
    payload: { currentPassword, newPassword },
  }),

  changePasswordSuccess: (message) => ({
    type: USER_ACTIONS.CHANGE_PASSWORD_SUCCESS,
    payload: { message },
  }),

  changePasswordFailure: (error) => ({
    type: USER_ACTIONS.CHANGE_PASSWORD_FAILURE,
    payload: { error },
  }),

  clearUserError: () => ({
    type: USER_ACTIONS.CLEAR_USER_ERROR,
  }),

  clearUserMessage: () => ({
    type: USER_ACTIONS.CLEAR_USER_MESSAGE,
  }),
};

// Get profile saga
function* getProfileSaga() {
  try {
    // Show loading
    yield put(uiActions.setLoading('Loading profile...', 'profile'));

    // Call get profile API
    const response = yield call(ApiService.user.getProfile);

    if (response.success) {
      yield put(userActions.getProfileSuccess(response.data));
    } else {
      yield put(userActions.getProfileFailure(response.error));
      yield put(uiActions.showToast(response.error, 'error'));
    }
  } catch (error) {
    console.error('Get profile saga error:', error);
    yield put(userActions.getProfileFailure('Failed to load profile'));
    yield put(uiActions.showToast('Failed to load profile', 'error'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('profile'));
  }
}

// Update profile saga
function* updateProfileSaga(action) {
  try {
    const profileData = action.payload;

    // Show loading
    yield put(uiActions.setLoading('Updating profile...', 'updateProfile'));

    // Call update profile API
    const response = yield call(ApiService.user.updateProfile, profileData);

    if (response.success) {
      yield put(userActions.updateProfileSuccess(response.data));
      yield put(uiActions.showToast('Profile updated successfully!', 'success'));
    } else {
      yield put(userActions.updateProfileFailure(response.error));
      yield put(uiActions.showToast(response.error, 'error'));
    }
  } catch (error) {
    console.error('Update profile saga error:', error);
    yield put(userActions.updateProfileFailure('Failed to update profile'));
    yield put(uiActions.showToast('Failed to update profile', 'error'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('updateProfile'));
  }
}

// Change password saga
function* changePasswordSaga(action) {
  try {
    const { currentPassword, newPassword } = action.payload;

    // Show loading
    yield put(uiActions.setLoading('Changing password...', 'changePassword'));

    // Call change password API
    const response = yield call(ApiService.user.changePassword, currentPassword, newPassword);

    if (response.success) {
      yield put(userActions.changePasswordSuccess(response.data.message));
      yield put(uiActions.showToast('Password changed successfully!', 'success'));
    } else {
      yield put(userActions.changePasswordFailure(response.error));
      yield put(uiActions.showToast(response.error, 'error'));
    }
  } catch (error) {
    console.error('Change password saga error:', error);
    yield put(userActions.changePasswordFailure('Failed to change password'));
    yield put(uiActions.showToast('Failed to change password', 'error'));
  } finally {
    // Clear loading
    yield put(uiActions.clearLoading('changePassword'));
  }
}

// User saga watcher
export default function* userSaga() {
  yield takeLatest(USER_ACTIONS.GET_PROFILE_REQUEST, getProfileSaga);
  yield takeLatest(USER_ACTIONS.UPDATE_PROFILE_REQUEST, updateProfileSaga);
  yield takeLatest(USER_ACTIONS.CHANGE_PASSWORD_REQUEST, changePasswordSaga);
}