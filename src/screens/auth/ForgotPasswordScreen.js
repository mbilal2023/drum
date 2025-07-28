import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { authActions } from '../../redux/actions/authActions';
import { globalStyles } from '../../styles/globalStyles';
import theme from '../../styles/theme';
import LoadingScreen from '../../components/common/LoadingScreen';

const ForgotPasswordScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { forgotPasswordLoading, error, forgotPasswordSuccess } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);

  const handleSendResetEmail = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    dispatch(authActions.forgotPasswordRequest(email.trim()));
  };

  if (forgotPasswordLoading) {
    return <LoadingScreen text="Sending reset email..." />;
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
            <View style={[globalStyles.logoContainer, { marginBottom: theme.spacing.xl }]}>
              <Text style={globalStyles.title}>Forgot Password</Text>
              <Text style={globalStyles.bodyText}>
                Enter your email to receive a password reset link
              </Text>
            </View>

            <View style={{ width: '100%' }}>
              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputLabel}>Email</Text>
                <TextInput
                  style={[
                    globalStyles.input,
                    emailFocused && globalStyles.inputFocused,
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

              <TouchableOpacity
                style={[globalStyles.button, globalStyles.primaryButton]}
                onPress={handleSendResetEmail}
                disabled={forgotPasswordLoading}
              >
                <Text style={globalStyles.buttonText}>Send Reset Email</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginTop: theme.spacing.lg, alignSelf: 'center' }}
                onPress={() => navigation.goBack()}
              >
                <Text style={{
                  color: theme.colors.primary,
                  fontSize: theme.fontSizes.md,
                  fontWeight: theme.fontWeights.semiBold,
                }}>
                  Back to Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;