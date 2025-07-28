import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../../redux/actions/authActions';
import { globalStyles } from '../../styles/globalStyles';
import theme from '../../styles/theme';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(authActions.logoutRequest());
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.screenContainer}>
        <Text style={globalStyles.title}>Welcome to RicoLive!</Text>
        
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Hello, {user?.name || 'User'}!</Text>
          <Text style={globalStyles.bodyText}>
            You are successfully logged in to RicoLive.
          </Text>
          <Text style={[globalStyles.bodyText, { marginTop: theme.spacing.md }]}>
            Email: {user?.email}
          </Text>
        </View>

        <TouchableOpacity
          style={[globalStyles.button, globalStyles.primaryButton, { marginTop: theme.spacing.xl }]}
          onPress={handleLogout}
        >
          <Text style={globalStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;