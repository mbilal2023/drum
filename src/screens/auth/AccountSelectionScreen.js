import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { authActions } from '../../redux/actions/authActions';
import { globalStyles } from '../../styles/globalStyles';
import theme from '../../styles/theme';
import LoadingScreen from '../../components/common/LoadingScreen';

// Mock account data - in a real app, this would come from Google Sign-In
const mockAccounts = [
  {
    id: '1',
    name: 'Rao abid',
    email: 'raoabid922@gmail.com',
    avatar: null,
    initials: 'R',
  },
  {
    id: '2',
    name: 'Abid hussain',
    email: 'programmerabid4@gmail.com',
    avatar: null,
    initials: 'A',
  },
  {
    id: '3',
    name: 'Morning Star',
    email: 'mstar10112@gmail.com',
    avatar: null,
    initials: 'M',
  },
  {
    id: '4',
    name: 'Ohh Yar',
    email: 'ohhyar7@gmail.com',
    avatar: null,
    initials: 'O',
  },
  {
    id: '5',
    name: 'test',
    email: 'twstjogard@gmail.com',
    avatar: null,
    initials: 't',
  },
  {
    id: '6',
    name: 'Rao Abid',
    email: 'abid@alphinex.com',
    avatar: null,
    initials: 'R',
  },
  {
    id: '7',
    name: 'Mr ArMan',
    email: 'mrarman390667@gmail.com',
    avatar: null,
    initials: 'Mr',
  },
];

const AccountSelectionScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loginLoading } = useSelector(state => state.auth);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountSelect = (account) => {
    setSelectedAccount(account);
    
    // Simulate login with selected account
    setTimeout(() => {
      // In a real app, you would get the actual token from Google
      const mockToken = 'mock_google_token_' + account.id;
      const mockUser = {
        id: account.id,
        name: account.name,
        email: account.email,
        avatar: account.avatar,
        provider: 'google',
      };

      dispatch(authActions.loginSuccess(mockToken, mockUser));
    }, 1000);
  };

  const handleAddAnotherAccount = () => {
    Alert.alert(
      'Add Account',
      'This would normally open Google Sign-In to add another account.',
      [{ text: 'OK' }]
    );
  };

  const handleBack = () => {
    navigation.goBack();
  };

  if (loginLoading) {
    return <LoadingScreen text="Signing in with Google..." />;
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <LinearGradient
        colors={['#F8F9FA', '#FFFFFF']}
        style={globalStyles.container}
      >
        <View style={globalStyles.screenContainer}>
          {/* Header */}
          <View style={globalStyles.logoContainer}>
            <Image
              source={require('../../../assets/icon.png')}
              style={[globalStyles.logo, { width: 80, height: 80 }]}
              resizeMode="cover"
            />
            <Text style={[globalStyles.title, { fontSize: theme.fontSizes.xxl, marginBottom: theme.spacing.sm }]}>
              Choose an account
            </Text>
            <Text style={globalStyles.bodyText}>
              to continue to RicoLive
            </Text>
          </View>

          {/* Account List */}
          <ScrollView 
            style={{ flex: 1, marginTop: theme.spacing.xl }}
            showsVerticalScrollIndicator={false}
          >
            {mockAccounts.map((account) => (
              <TouchableOpacity
                key={account.id}
                style={[
                  globalStyles.accountItem,
                  selectedAccount?.id === account.id && {
                    backgroundColor: theme.colors.backgroundSecondary,
                  }
                ]}
                onPress={() => handleAccountSelect(account)}
              >
                {/* Avatar */}
                <View style={globalStyles.accountAvatar}>
                  {account.avatar ? (
                    <Image
                      source={{ uri: account.avatar }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                      }}
                    />
                  ) : (
                    <Text style={globalStyles.accountAvatarText}>
                      {account.initials}
                    </Text>
                  )}
                </View>

                {/* Account Info */}
                <View style={globalStyles.accountInfo}>
                  <Text style={globalStyles.accountName}>
                    {account.name}
                  </Text>
                  <Text style={globalStyles.accountEmail}>
                    {account.email}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

            {/* Add Another Account */}
            <TouchableOpacity
              style={[
                globalStyles.accountItem,
                {
                  borderTopWidth: 1,
                  borderTopColor: theme.colors.border,
                  marginTop: theme.spacing.md,
                }
              ]}
              onPress={handleAddAnotherAccount}
            >
              <View style={[
                globalStyles.accountAvatar,
                { backgroundColor: theme.colors.backgroundSecondary }
              ]}>
                <Text style={[
                  globalStyles.accountAvatarText,
                  { color: theme.colors.textPrimary, fontSize: 20 }
                ]}>
                  +
                </Text>
              </View>

              <View style={globalStyles.accountInfo}>
                <Text style={[
                  globalStyles.accountName,
                  { color: theme.colors.primary }
                ]}>
                  Add another account
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          {/* Footer */}
          <View style={{ marginTop: theme.spacing.lg, paddingVertical: theme.spacing.md }}>
            <Text style={[
              globalStyles.bodyText,
              { fontSize: theme.fontSizes.xs, textAlign: 'left' }
            ]}>
              To continue, Google will share your name, email address, language preference, and profile picture with RicoLive. Before using this app, you can review RicoLive's{' '}
              <Text style={{ color: theme.colors.primary, textDecorationLine: 'underline' }}>
                privacy policy
              </Text>
              {' '}and{' '}
              <Text style={{ color: theme.colors.primary, textDecorationLine: 'underline' }}>
                terms of service
              </Text>
              .
            </Text>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            style={[
              globalStyles.button,
              globalStyles.secondaryButton,
              { marginTop: theme.spacing.md }
            ]}
            onPress={handleBack}
          >
            <Text style={[globalStyles.buttonText, globalStyles.secondaryButtonText]}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AccountSelectionScreen;