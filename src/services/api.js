import axios from 'axios';
import { SecureStorage, TokenManager } from '../utils/storage';

// API Configuration - Update this with your backend URL
const API_BASE_URL = 'https://your-backend-api.com/api'; // Replace with your actual API URL

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStorage.getToken();
      if (token && !TokenManager.isTokenExpired(token)) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error adding auth token:', error);
    }
    
    // Log request for debugging (remove in production)
    console.log('API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      data: config.data,
    });
    
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    // Log response for debugging (remove in production)
    console.log('API Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data,
    });
    
    return response;
  },
  async (error) => {
    console.error('API Error:', {
      status: error.response?.status,
      url: error.config?.url,
      message: error.message,
      data: error.response?.data,
    });

    // Handle token expiration
    if (error.response?.status === 401) {
      try {
        await SecureStorage.removeToken();
        // You might want to redirect to login screen here
        // NavigationService.navigate('Login');
      } catch (storageError) {
        console.error('Error removing expired token:', storageError);
      }
    }

    return Promise.reject(error);
  }
);

// API Service
export const ApiService = {
  // Authentication endpoints
  auth: {
    // Login with email and password
    async login(email, password) {
      try {
        const response = await apiClient.post('/auth/login', {
          email,
          password,
        });
        
        const { token, user } = response.data;
        
        if (token) {
          // Store token securely
          await SecureStorage.setToken(token);
          
          // Optionally store credentials for auto-login
          await SecureStorage.setCredentials(email, password);
        }
        
        return {
          success: true,
          data: {
            token,
            user,
          },
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Login failed',
          statusCode: error.response?.status,
        };
      }
    },

    // Register new user
    async register(userData) {
      try {
        const response = await apiClient.post('/auth/register', userData);
        
        const { token, user } = response.data;
        
        if (token) {
          await SecureStorage.setToken(token);
        }
        
        return {
          success: true,
          data: {
            token,
            user,
          },
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Registration failed',
          statusCode: error.response?.status,
        };
      }
    },

    // Logout
    async logout() {
      try {
        // Call logout endpoint if available
        await apiClient.post('/auth/logout');
      } catch (error) {
        console.error('Logout API error:', error);
      } finally {
        // Always clear local storage
        await SecureStorage.removeToken();
        await SecureStorage.removeCredentials();
      }
      
      return { success: true };
    },

    // Refresh token
    async refreshToken() {
      try {
        const response = await apiClient.post('/auth/refresh');
        const { token } = response.data;
        
        if (token) {
          await SecureStorage.setToken(token);
        }
        
        return {
          success: true,
          data: { token },
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Token refresh failed',
        };
      }
    },

    // Verify token
    async verifyToken() {
      try {
        const response = await apiClient.get('/auth/verify');
        return {
          success: true,
          data: response.data,
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Token verification failed',
        };
      }
    },

    // Forgot password
    async forgotPassword(email) {
      try {
        const response = await apiClient.post('/auth/forgot-password', { email });
        return {
          success: true,
          data: response.data,
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Failed to send reset email',
        };
      }
    },

    // Reset password
    async resetPassword(token, newPassword) {
      try {
        const response = await apiClient.post('/auth/reset-password', {
          token,
          password: newPassword,
        });
        return {
          success: true,
          data: response.data,
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Password reset failed',
        };
      }
    },
  },

  // User endpoints
  user: {
    // Get user profile
    async getProfile() {
      try {
        const response = await apiClient.get('/user/profile');
        return {
          success: true,
          data: response.data,
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Failed to get profile',
        };
      }
    },

    // Update user profile
    async updateProfile(userData) {
      try {
        const response = await apiClient.put('/user/profile', userData);
        return {
          success: true,
          data: response.data,
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Failed to update profile',
        };
      }
    },

    // Change password
    async changePassword(currentPassword, newPassword) {
      try {
        const response = await apiClient.post('/user/change-password', {
          currentPassword,
          newPassword,
        });
        return {
          success: true,
          data: response.data,
        };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.message || 'Password change failed',
        };
      }
    },
  },

  // Generic API methods
  async get(endpoint, params = {}) {
    try {
      const response = await apiClient.get(endpoint, { params });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Request failed',
        statusCode: error.response?.status,
      };
    }
  },

  async post(endpoint, data = {}) {
    try {
      const response = await apiClient.post(endpoint, data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Request failed',
        statusCode: error.response?.status,
      };
    }
  },

  async put(endpoint, data = {}) {
    try {
      const response = await apiClient.put(endpoint, data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Request failed',
        statusCode: error.response?.status,
      };
    }
  },

  async delete(endpoint) {
    try {
      const response = await apiClient.delete(endpoint);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Request failed',
        statusCode: error.response?.status,
      };
    }
  },

  // Utility methods
  setBaseURL(url) {
    apiClient.defaults.baseURL = url;
  },

  setTimeout(timeout) {
    apiClient.defaults.timeout = timeout;
  },

  // Check network connectivity
  async checkConnectivity() {
    try {
      await apiClient.get('/health', { timeout: 5000 });
      return true;
    } catch (error) {
      return false;
    }
  },
};

export default ApiService;