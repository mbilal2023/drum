import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { authActions } from '../../redux/actions/authActions';
import { globalStyles } from '../../styles/globalStyles';
import theme from '../../styles/theme';
import LoadingScreen from '../../components/common/LoadingScreen';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loginLoading, error, loginSuccess } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  // Handle login success
  useEffect(() => {
    if (loginSuccess) {
      // Navigation will be handled by AppNavigator
      console.log('Login successful');
    }
  }, [loginSuccess]);

  // Handle login error
  useEffect(() => {
    if (error) {
      Alert.alert('Login Failed', error);
      dispatch(authActions.clearAuthError());
    }
  }, [error, dispatch]);

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    dispatch(authActions.loginRequest(email.trim(), password, rememberMe));
  };

  const handleGoogleLogin = () => {
    // Navigate to account selection screen (simulating Google login flow)
    navigation.navigate('AccountSelection');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  if (loginLoading) {
    return <LoadingScreen text="Signing in..." />;
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <LinearGradient
        colors={['#F8F9FA', '#FFFFFF']}
        style={globalStyles.container}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={globalStyles.container}
        >
          <View style={globalStyles.centerContainer}>
            {/* Logo Section */}
            <View style={globalStyles.logoContainer}>
              <Image
                source={require('../../../assets/icon.png')} // You'll need to add this
                style={globalStyles.logo}
                resizeMode="cover"
              />
              <Text style={globalStyles.title}>RicoLive</Text>
              <Text style={globalStyles.bodyText}>
                Welcome back! Sign in to continue
              </Text>
            </View>

            {/* Login Form */}
            <View style={{ width: '100%', marginTop: theme.spacing.xl }}>
              {/* Email Input */}
              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputLabel}>Email</Text>
                <TextInput
                  style={[
                    globalStyles.input,
                    emailFocused && globalStyles.inputFocused,
                    error && globalStyles.inputError,
                  ]}
                  placeholder="Enter your email"
                  placeholderTextColor={theme.colors.textLight}
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              {/* Password Input */}
              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputLabel}>Password</Text>
                <TextInput
                  style={[
                    globalStyles.input,
                    passwordFocused && globalStyles.inputFocused,
                    error && globalStyles.inputError,
                  ]}
                  placeholder="Enter your password"
                  placeholderTextColor={theme.colors.textLight}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              {/* Remember Me & Forgot Password */}
              <View style={[globalStyles.row, globalStyles.spaceBetween, { marginVertical: theme.spacing.md }]}>
                <TouchableOpacity
                  style={globalStyles.row}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View style={{
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderColor: rememberMe ? theme.colors.primary : theme.colors.border,
                    backgroundColor: rememberMe ? theme.colors.primary : 'transparent',
                    marginRight: theme.spacing.sm,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    {rememberMe && (
                      <Text style={{ color: theme.colors.textWhite, fontSize: 12 }}>✓</Text>
                    )}
                  </View>
                  <Text style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                    Remember me
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text style={{
                    color: theme.colors.primary,
                    fontSize: theme.fontSizes.sm,
                    fontWeight: theme.fontWeights.medium,
                  }}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Login Button */}
              <TouchableOpacity
                style={[globalStyles.button, globalStyles.primaryButton]}
                onPress={handleLogin}
                disabled={loginLoading}
              >
                <Text style={globalStyles.buttonText}>Sign In</Text>
              </TouchableOpacity>

              {/* Divider */}
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: theme.spacing.lg,
              }}>
                <View style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: theme.colors.border,
                }} />
                <Text style={{
                  marginHorizontal: theme.spacing.md,
                  color: theme.colors.textSecondary,
                  fontSize: theme.fontSizes.sm,
                }}>
                  More Login Methods
                </Text>
                <View style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: theme.colors.border,
                }} />
              </View>

              {/* Google Login Button */}
              <TouchableOpacity
                style={[globalStyles.button, globalStyles.googleButton]}
                onPress={handleGoogleLogin}
              >
                <Text style={[globalStyles.buttonText, { marginLeft: theme.spacing.sm }]}>
                  Continue with Google
                </Text>
              </TouchableOpacity>

              {/* Social Login Icons */}
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: theme.spacing.lg,
              }}>
                <TouchableOpacity style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: theme.colors.backgroundSecondary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: theme.spacing.sm,
                }}>
                  <Text style={{ fontSize: 20 }}>f</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: theme.colors.backgroundSecondary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: theme.spacing.sm,
                }}>
                  <Text style={{ fontSize: 20 }}>📱</Text>
                </TouchableOpacity>
              </View>

              {/* Terms and Privacy */}
              <View style={{ marginTop: theme.spacing.xl }}>
                <Text style={[globalStyles.bodyText, { fontSize: theme.fontSizes.xs }]}>
                  By Using RicoLive You Agree To This{' '}
                  <Text style={{ color: theme.colors.primary, textDecorationLine: 'underline' }}>
                    RicoLive Term of Services
                  </Text>
                  {' '}And{' '}
                  <Text style={{ color: theme.colors.primary, textDecorationLine: 'underline' }}>
                    Privacy Policy
                  </Text>
                </Text>
              </View>

              {/* Sign Up Link */}
              <TouchableOpacity
                style={{ marginTop: theme.spacing.lg, alignSelf: 'center' }}
                onPress={handleSignUp}
              >
                <Text style={{
                  color: theme.colors.textSecondary,
                  fontSize: theme.fontSizes.md,
                }}>
                  Don't have an account?{' '}
                  <Text style={{
                    color: theme.colors.primary,
                    fontWeight: theme.fontWeights.semiBold,
                  }}>
                    Sign Up
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginScreen;