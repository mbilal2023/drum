import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../redux/actions/authActions';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import LoadingScreen from '../components/common/LoadingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isInitialized, autoLoginLoading } = useSelector(state => state.auth);

  useEffect(() => {
    // Try auto login when app starts
    if (!isInitialized) {
      dispatch(authActions.autoLoginRequest());
    }
  }, [dispatch, isInitialized]);

  // Show loading screen while checking authentication
  if (!isInitialized || autoLoginLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;