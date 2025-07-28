import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { authActions } from '../../redux/actions/authActions';
import { globalStyles } from '../../styles/globalStyles';
import theme from '../../styles/theme';
import LoadingScreen from '../../components/common/LoadingScreen';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { registerLoading, error, registerSuccess } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [focusedField, setFocusedField] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Handle registration success
  useEffect(() => {
    if (registerSuccess) {
      console.log('Registration successful');
    }
  }, [registerSuccess]);

  // Handle registration error
  useEffect(() => {
    if (error) {
      Alert.alert('Registration Failed', error);
      dispatch(authActions.clearAuthError());
    }
  }, [error, dispatch]);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = () => {
    if (!formData.name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }

    if (!formData.email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    if (!formData.password.trim()) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!acceptedTerms) {
      Alert.alert('Error', 'Please accept the terms and conditions');
      return;
    }

    const userData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    dispatch(authActions.registerRequest(userData));
  };

  const handleBack = () => {
    navigation.goBack();
  };

  if (registerLoading) {
    return <LoadingScreen text="Creating account..." />;
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
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={globalStyles.centerContainer}>
              {/* Header */}
              <View style={[globalStyles.logoContainer, { marginBottom: theme.spacing.xl }]}>
                <Text style={globalStyles.title}>Create Account</Text>
                <Text style={globalStyles.bodyText}>
                  Join RicoLive and get started
                </Text>
              </View>

              {/* Registration Form */}
              <View style={{ width: '100%' }}>
                {/* Name Input */}
                <View style={globalStyles.inputContainer}>
                  <Text style={globalStyles.inputLabel}>Full Name</Text>
                  <TextInput
                    style={[
                      globalStyles.input,
                      focusedField === 'name' && globalStyles.inputFocused,
                      error && globalStyles.inputError,
                    ]}
                    placeholder="Enter your full name"
                    placeholderTextColor={theme.colors.textLight}
                    value={formData.name}
                    onChangeText={(value) => updateFormData('name', value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    autoCapitalize="words"
                    autoCorrect={false}
                  />
                </View>

                {/* Email Input */}
                <View style={globalStyles.inputContainer}>
                  <Text style={globalStyles.inputLabel}>Email</Text>
                  <TextInput
                    style={[
                      globalStyles.input,
                      focusedField === 'email' && globalStyles.inputFocused,
                      error && globalStyles.inputError,
                    ]}
                    placeholder="Enter your email"
                    placeholderTextColor={theme.colors.textLight}
                    value={formData.email}
                    onChangeText={(value) => updateFormData('email', value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
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
                      focusedField === 'password' && globalStyles.inputFocused,
                      error && globalStyles.inputError,
                    ]}
                    placeholder="Enter your password"
                    placeholderTextColor={theme.colors.textLight}
                    value={formData.password}
                    onChangeText={(value) => updateFormData('password', value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                {/* Confirm Password Input */}
                <View style={globalStyles.inputContainer}>
                  <Text style={globalStyles.inputLabel}>Confirm Password</Text>
                  <TextInput
                    style={[
                      globalStyles.input,
                      focusedField === 'confirmPassword' && globalStyles.inputFocused,
                      error && globalStyles.inputError,
                    ]}
                    placeholder="Confirm your password"
                    placeholderTextColor={theme.colors.textLight}
                    value={formData.confirmPassword}
                    onChangeText={(value) => updateFormData('confirmPassword', value)}
                    onFocus={() => setFocusedField('confirmPassword')}
                    onBlur={() => setFocusedField('')}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                {/* Terms and Conditions */}
                <TouchableOpacity
                  style={[globalStyles.row, { marginVertical: theme.spacing.md }]}
                  onPress={() => setAcceptedTerms(!acceptedTerms)}
                >
                  <View style={{
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderColor: acceptedTerms ? theme.colors.primary : theme.colors.border,
                    backgroundColor: acceptedTerms ? theme.colors.primary : 'transparent',
                    marginRight: theme.spacing.sm,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    {acceptedTerms && (
                      <Text style={{ color: theme.colors.textWhite, fontSize: 12 }}>✓</Text>
                    )}
                  </View>
                  <Text style={{ 
                    color: theme.colors.textSecondary, 
                    fontSize: theme.fontSizes.sm,
                    flex: 1,
                  }}>
                    I agree to the{' '}
                    <Text style={{ color: theme.colors.primary, textDecorationLine: 'underline' }}>
                      Terms of Service
                    </Text>
                    {' '}and{' '}
                    <Text style={{ color: theme.colors.primary, textDecorationLine: 'underline' }}>
                      Privacy Policy
                    </Text>
                  </Text>
                </TouchableOpacity>

                {/* Register Button */}
                <TouchableOpacity
                  style={[globalStyles.button, globalStyles.primaryButton]}
                  onPress={handleRegister}
                  disabled={registerLoading}
                >
                  <Text style={globalStyles.buttonText}>Create Account</Text>
                </TouchableOpacity>

                {/* Sign In Link */}
                <TouchableOpacity
                  style={{ marginTop: theme.spacing.lg, alignSelf: 'center' }}
                  onPress={handleBack}
                >
                  <Text style={{
                    color: theme.colors.textSecondary,
                    fontSize: theme.fontSizes.md,
                  }}>
                    Already have an account?{' '}
                    <Text style={{
                      color: theme.colors.primary,
                      fontWeight: theme.fontWeights.semiBold,
                    }}>
                      Sign In
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default RegisterScreen;