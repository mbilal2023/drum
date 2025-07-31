import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './ProfileStyles';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
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

        {/* Profile Section */}
        <View style={styles.profileSection}>
          {/* VIP Badge and Avatar */}
          <View style={styles.avatarContainer}>
            <Image
              source={require('./images/vip-frame.png')} // Replace with your VIP frame
              style={styles.vipFrame}
            />
            <Image
              source={require('./images/avatar.jpg')} // Replace with user avatar
              style={styles.avatar}
            />
          </View>

          {/* User Info */}
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Ahmed Sahriyar Abir</Text>
            <View style={styles.userIdContainer}>
              <Text style={styles.userId}>ID=505253</Text>
              <Image
                source={require('./images/level-badge.png')} // Replace with level badge
                style={styles.levelBadge}
              />
            </View>
            <Text style={styles.userBadge}>Badge Host/Agency/CoinSaller/Admin (5 Badge)</Text>
            <Text style={styles.userBio}>Bio= Official Head Rico Live (50 Word)</Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Friends</Text>
            <Text style={styles.statValue}>25</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Following</Text>
            <Text style={styles.statValue}>10</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Followers</Text>
            <Text style={styles.statValue}>30</Text>
          </View>
        </View>

        {/* Currency Section */}
        <View style={styles.currencyContainer}>
          <TouchableOpacity style={styles.currencyItem}>
            <Image
              source={require('./images/recharge-icon.png')} // Replace with recharge icon
              style={styles.currencyIcon}
            />
            <Text style={styles.currencyLabel}>Online Recharge</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.currencyItem}>
            <Image
              source={require('./images/diamond-icon.png')} // Replace with diamond icon
              style={styles.currencyIcon}
            />
            <Text style={styles.currencyLabel}>Diamond</Text>
            <Text style={styles.currencyValue}>500k</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.currencyItem}>
            <Image
              source={require('./images/coin-icon.png')} // Replace with coin icon
              style={styles.currencyIcon}
            />
            <Text style={styles.currencyLabel}>Receving Coin</Text>
            <Text style={styles.currencyValue}>190k</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Image
              source={require('./images/vip-icon.png')} // Replace with VIP icon
              style={styles.navIcon}
            />
            <Text style={styles.navLabel}>Vip</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navButton}>
            <Image
              source={require('./images/shop-icon.png')} // Replace with shop icon
              style={styles.navIcon}
            />
            <Text style={styles.navLabel}>Shop</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navButton}>
            <Image
              source={require('./images/bag-icon.png')} // Replace with bag icon
              style={styles.navIcon}
            />
            <Text style={styles.navLabel}>My Bag</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navButton}>
            <Image
              source={require('./images/badge-icon.png')} // Replace with badge icon
              style={styles.navIcon}
            />
            <Text style={styles.navLabel}>Badge</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/host-icon.png')} // Replace with host icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Apply Host</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/invite-icon.png')} // Replace with invite icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Invite Friend</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/level-icon.png')} // Replace with level icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Level</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/offline-recharge-icon.png')} // Replace with offline recharge icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Offline Recharge</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/agency-icon.png')} // Replace with agency icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Agency Record</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/my-agency-icon.png')} // Replace with my agency icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>My Agency</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/help-icon.png')} // Replace with help icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Help Center</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/settings-icon.png')} // Replace with settings icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Setting</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('./images/logout-icon.png')} // Replace with logout icon
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Log Out</Text>
            <Image
              source={require('./images/arrow-right.png')} // Replace with arrow icon
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ProfileScreen;