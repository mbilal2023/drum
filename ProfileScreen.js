import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './ProfileStyles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./images/background.jpg')} // Replace with your background image
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editProfileButton}>
          <Image
            source={require('./images/edit-icon.png')} // Replace with your edit icon
            style={styles.editIcon}
          />
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Bottom Profile Section */}
        <View style={styles.bottomSection}>
          {/* Small Profile Image with VIP Frame */}
          <View style={styles.smallProfileContainer}>
            <Image
              source={require('./images/vip-frame.png')} // Replace with your VIP frame
              style={styles.smallVipFrame}
            />
            <Image
              source={require('./images/avatar.jpg')} // Replace with user avatar
              style={styles.smallAvatar}
            />
          </View>

          {/* User Info - Small */}
          <View style={styles.smallUserInfo}>
            <Text style={styles.smallUserName}>Ahmed Sahriyar Abir</Text>
            <View style={styles.smallUserIdContainer}>
              <Text style={styles.smallUserId}>ID=505253</Text>
              <Image
                source={require('./images/level-badge.png')} // Replace with level badge
                style={styles.smallLevelBadge}
              />
            </View>
            <Text style={styles.smallUserBadge}>Badge Host/Agency/CoinSaller/Admin (5 Badge)</Text>
            <Text style={styles.smallUserBio}>Bio= Official Head Rico Live (50 Word)</Text>
          </View>

          {/* Stats Section - Compact */}
          <View style={styles.compactStatsContainer}>
            <View style={styles.compactStatItem}>
              <Text style={styles.compactStatLabel}>Friends</Text>
              <Text style={styles.compactStatValue}>25</Text>
            </View>
            <View style={styles.compactStatItem}>
              <Text style={styles.compactStatLabel}>Following</Text>
              <Text style={styles.compactStatValue}>10</Text>
            </View>
            <View style={styles.compactStatItem}>
              <Text style={styles.compactStatLabel}>Followers</Text>
              <Text style={styles.compactStatValue}>30</Text>
            </View>
          </View>

          {/* Currency Section - Compact */}
          <View style={styles.compactCurrencyContainer}>
            <TouchableOpacity style={styles.compactCurrencyItem}>
              <Image
                source={require('./images/recharge-icon.png')} // Replace with recharge icon
                style={styles.compactCurrencyIcon}
              />
              <Text style={styles.compactCurrencyLabel}>Online Recharge</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.compactCurrencyItem}>
              <Image
                source={require('./images/diamond-icon.png')} // Replace with diamond icon
                style={styles.compactCurrencyIcon}
              />
              <Text style={styles.compactCurrencyLabel}>Diamond</Text>
              <Text style={styles.compactCurrencyValue}>500k</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.compactCurrencyItem}>
              <Image
                source={require('./images/coin-icon.png')} // Replace with coin icon
                style={styles.compactCurrencyIcon}
              />
              <Text style={styles.compactCurrencyLabel}>Receving Coin</Text>
              <Text style={styles.compactCurrencyValue}>190k</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Buttons - Compact */}
          <View style={styles.compactNavigationContainer}>
            <TouchableOpacity style={styles.compactNavButton}>
              <Image
                source={require('./images/vip-icon.png')} // Replace with VIP icon
                style={styles.compactNavIcon}
              />
              <Text style={styles.compactNavLabel}>Vip</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.compactNavButton}>
              <Image
                source={require('./images/shop-icon.png')} // Replace with shop icon
                style={styles.compactNavIcon}
              />
              <Text style={styles.compactNavLabel}>Shop</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.compactNavButton}>
              <Image
                source={require('./images/bag-icon.png')} // Replace with bag icon
                style={styles.compactNavIcon}
              />
              <Text style={styles.compactNavLabel}>My Bag</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.compactNavButton}>
              <Image
                source={require('./images/badge-icon.png')} // Replace with badge icon
                style={styles.compactNavIcon}
              />
              <Text style={styles.compactNavLabel}>Badge</Text>
            </TouchableOpacity>
          </View>

          {/* Menu Items - Compact */}
          <View style={styles.compactMenuContainer}>
            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/host-icon.png')} // Replace with host icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>Apply Host</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/invite-icon.png')} // Replace with invite icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>Invite Friend</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/level-icon.png')} // Replace with level icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>Level</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/offline-recharge-icon.png')} // Replace with offline recharge icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>Offline Recharge</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/agency-icon.png')} // Replace with agency icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>Agency Record</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/my-agency-icon.png')} // Replace with my agency icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>My Agency</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/help-icon.png')} // Replace with help icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>Help Center</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/settings-icon.png')} // Replace with settings icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>Setting</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.compactMenuItem}>
              <Image
                source={require('./images/logout-icon.png')} // Replace with logout icon
                style={styles.compactMenuIcon}
              />
              <Text style={styles.compactMenuLabel}>Log Out</Text>
              <Image
                source={require('./images/arrow-right.png')} // Replace with arrow icon
                style={styles.compactArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;