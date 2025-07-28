import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { authActions } from '../../redux/actions/authActions';
import { globalStyles } from '../../styles/globalStyles';

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logoutRequest());
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.screenContainer}>
        <Text style={globalStyles.title}>Settings</Text>
        
        <View style={globalStyles.card}>
          <Text style={globalStyles.subtitle}>Account Settings</Text>
          <TouchableOpacity
            style={[globalStyles.button, globalStyles.primaryButton]}
            onPress={handleLogout}
          >
            <Text style={globalStyles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;