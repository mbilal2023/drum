import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: height,
    justifyContent: 'flex-end',
  },
  editProfileButton: {
    position: 'absolute',
    top: 40,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 123, 255, 0.9)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
    zIndex: 10,
  },
  editIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
    tintColor: '#fff',
  },
  editProfileText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  
  // Bottom section that contains everything
  bottomSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  
  // Small profile section
  smallProfileContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 8,
  },
  smallVipFrame: {
    position: 'absolute',
    width: 60,
    height: 60,
    zIndex: 2,
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
    zIndex: 1,
  },
  
  // Small user info
  smallUserInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  smallUserName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  smallUserIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  smallUserId: {
    fontSize: 11,
    color: '#FFD700',
    marginRight: 8,
    fontWeight: '600',
  },
  smallLevelBadge: {
    width: 20,
    height: 15,
  },
  smallUserBadge: {
    fontSize: 9,
    color: '#FFA500',
    textAlign: 'center',
    marginBottom: 3,
    fontWeight: '500',
  },
  smallUserBio: {
    fontSize: 9,
    color: '#CCCCCC',
    textAlign: 'center',
    fontWeight: '400',
  },
  
  // Compact stats section
  compactStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  compactStatItem: {
    alignItems: 'center',
    flex: 1,
  },
  compactStatLabel: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 2,
  },
  compactStatValue: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  
  // Compact currency section
  compactCurrencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  compactCurrencyItem: {
    flex: 1,
    backgroundColor: 'rgba(0, 123, 255, 0.8)',
    marginHorizontal: 2,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  compactCurrencyIcon: {
    width: 16,
    height: 16,
    marginBottom: 4,
    tintColor: '#fff',
  },
  compactCurrencyLabel: {
    fontSize: 8,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 2,
  },
  compactCurrencyValue: {
    fontSize: 10,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  
  // Compact navigation section
  compactNavigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 123, 255, 0.9)',
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  compactNavButton: {
    alignItems: 'center',
    flex: 1,
  },
  compactNavIcon: {
    width: 20,
    height: 20,
    marginBottom: 2,
    tintColor: '#fff',
  },
  compactNavLabel: {
    fontSize: 9,
    color: '#fff',
    fontWeight: '600',
  },
  
  // Compact menu section
  compactMenuContainer: {
    paddingBottom: 5,
  },
  compactMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 60, 0.9)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 1,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#007BFF',
  },
  compactMenuIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    tintColor: '#fff',
  },
  compactMenuLabel: {
    flex: 1,
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  compactArrowIcon: {
    width: 12,
    height: 12,
    tintColor: '#007BFF',
  },
});

export default styles;