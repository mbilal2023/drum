import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Secure storage for sensitive data (tokens, passwords)
export const SecureStorage = {
  // Store token securely
  async setToken(token) {
    try {
      await Keychain.setInternetCredentials(
        'ricolive_token',
        'user_token',
        token
      );
      return true;
    } catch (error) {
      console.error('Error storing token:', error);
      return false;
    }
  },

  // Get token securely
  async getToken() {
    try {
      const credentials = await Keychain.getInternetCredentials('ricolive_token');
      if (credentials) {
        return credentials.password;
      }
      return null;
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  },

  // Remove token
  async removeToken() {
    try {
      await Keychain.resetInternetCredentials('ricolive_token');
      return true;
    } catch (error) {
      console.error('Error removing token:', error);
      return false;
    }
  },

  // Store user credentials securely
  async setCredentials(username, password) {
    try {
      await Keychain.setInternetCredentials(
        'ricolive_credentials',
        username,
        password
      );
      return true;
    } catch (error) {
      console.error('Error storing credentials:', error);
      return false;
    }
  },

  // Get user credentials
  async getCredentials() {
    try {
      const credentials = await Keychain.getInternetCredentials('ricolive_credentials');
      if (credentials) {
        return {
          username: credentials.username,
          password: credentials.password,
        };
      }
      return null;
    } catch (error) {
      console.error('Error retrieving credentials:', error);
      return null;
    }
  },

  // Remove credentials
  async removeCredentials() {
    try {
      await Keychain.resetInternetCredentials('ricolive_credentials');
      return true;
    } catch (error) {
      console.error('Error removing credentials:', error);
      return false;
    }
  },

  // Check if keychain is available
  async isKeychainAvailable() {
    try {
      const result = await Keychain.getSupportedBiometryType();
      return true;
    } catch (error) {
      return false;
    }
  },
};

// Regular storage for non-sensitive data
export const Storage = {
  // Store data
  async setItem(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (error) {
      console.error(`Error storing ${key}:`, error);
      return false;
    }
  },

  // Get data
  async getItem(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Error retrieving ${key}:`, error);
      return null;
    }
  },

  // Remove data
  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
      return false;
    }
  },

  // Clear all data
  async clear() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  },

  // Get all keys
  async getAllKeys() {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Error getting all keys:', error);
      return [];
    }
  },

  // Store user data
  async setUserData(userData) {
    return await this.setItem('userData', userData);
  },

  // Get user data
  async getUserData() {
    return await this.getItem('userData');
  },

  // Remove user data
  async removeUserData() {
    return await this.removeItem('userData');
  },

  // Store app settings
  async setAppSettings(settings) {
    return await this.setItem('appSettings', settings);
  },

  // Get app settings
  async getAppSettings() {
    return await this.getItem('appSettings');
  },
};

// Token management utilities
export const TokenManager = {
  // Decode JWT token (basic decode without verification)
  decodeToken(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  },

  // Check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = this.decodeToken(token);
      if (!decoded || !decoded.exp) {
        return true;
      }
      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true;
    }
  },

  // Get user info from token
  getUserInfoFromToken(token) {
    try {
      const decoded = this.decodeToken(token);
      if (!decoded) {
        return null;
      }
      return {
        userId: decoded.sub || decoded.user_id,
        email: decoded.email,
        name: decoded.name,
        exp: decoded.exp,
        iat: decoded.iat,
        ...decoded,
      };
    } catch (error) {
      console.error('Error getting user info from token:', error);
      return null;
    }
  },
};

export default { SecureStorage, Storage, TokenManager };