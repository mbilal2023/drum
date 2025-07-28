// UI Action Types
export const UI_ACTIONS = {
  SET_LOADING: 'UI/SET_LOADING',
  CLEAR_LOADING: 'UI/CLEAR_LOADING',
  SHOW_MODAL: 'UI/SHOW_MODAL',
  HIDE_MODAL: 'UI/HIDE_MODAL',
  SET_NETWORK_STATUS: 'UI/SET_NETWORK_STATUS',
  SHOW_TOAST: 'UI/SHOW_TOAST',
  HIDE_TOAST: 'UI/HIDE_TOAST',
};

// Initial UI state
const initialState = {
  isLoading: false,
  loadingText: '',
  
  // Modal state
  modal: {
    visible: false,
    type: null,
    data: null,
  },
  
  // Network status
  isConnected: true,
  
  // Toast/notification state
  toast: {
    visible: false,
    message: '',
    type: 'info', // 'success', 'error', 'warning', 'info'
    duration: 3000,
  },
  
  // Screen-specific loading states
  screenLoading: {},
};

// UI reducer
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
        loadingText: action.payload?.text || '',
        screenLoading: {
          ...state.screenLoading,
          [action.payload?.screen || 'global']: true,
        },
      };

    case UI_ACTIONS.CLEAR_LOADING:
      return {
        ...state,
        isLoading: false,
        loadingText: '',
        screenLoading: {
          ...state.screenLoading,
          [action.payload?.screen || 'global']: false,
        },
      };

    case UI_ACTIONS.SHOW_MODAL:
      return {
        ...state,
        modal: {
          visible: true,
          type: action.payload.type,
          data: action.payload.data || null,
        },
      };

    case UI_ACTIONS.HIDE_MODAL:
      return {
        ...state,
        modal: {
          visible: false,
          type: null,
          data: null,
        },
      };

    case UI_ACTIONS.SET_NETWORK_STATUS:
      return {
        ...state,
        isConnected: action.payload.isConnected,
      };

    case UI_ACTIONS.SHOW_TOAST:
      return {
        ...state,
        toast: {
          visible: true,
          message: action.payload.message,
          type: action.payload.type || 'info',
          duration: action.payload.duration || 3000,
        },
      };

    case UI_ACTIONS.HIDE_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          visible: false,
        },
      };

    default:
      return state;
  }
};

// UI Action Creators
export const uiActions = {
  setLoading: (text, screen) => ({
    type: UI_ACTIONS.SET_LOADING,
    payload: { text, screen },
  }),

  clearLoading: (screen) => ({
    type: UI_ACTIONS.CLEAR_LOADING,
    payload: { screen },
  }),

  showModal: (type, data) => ({
    type: UI_ACTIONS.SHOW_MODAL,
    payload: { type, data },
  }),

  hideModal: () => ({
    type: UI_ACTIONS.HIDE_MODAL,
  }),

  setNetworkStatus: (isConnected) => ({
    type: UI_ACTIONS.SET_NETWORK_STATUS,
    payload: { isConnected },
  }),

  showToast: (message, type = 'info', duration = 3000) => ({
    type: UI_ACTIONS.SHOW_TOAST,
    payload: { message, type, duration },
  }),

  hideToast: () => ({
    type: UI_ACTIONS.HIDE_TOAST,
  }),
};

export default uiReducer;