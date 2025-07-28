import { StyleSheet, Dimensions } from 'react-native';
import theme from './theme';

const { width, height } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  
  screenContainer: {
    flex: 1,
    padding: theme.layout.screenPadding,
    backgroundColor: theme.colors.background,
  },
  
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.layout.containerPadding,
  },
  
  // Card styles
  card: {
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.lg,
    padding: theme.layout.cardPadding,
    ...theme.shadows.md,
  },
  
  // Text styles
  title: {
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  
  subtitle: {
    fontSize: theme.fontSizes.xl,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  
  bodyText: {
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.regular,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  
  // Button styles
  button: {
    height: theme.layout.buttonHeight,
    borderRadius: theme.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing.sm,
  },
  
  primaryButton: {
    backgroundColor: theme.colors.primary,
    ...theme.shadows.sm,
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  
  googleButton: {
    backgroundColor: theme.colors.google,
    flexDirection: 'row',
    ...theme.shadows.sm,
  },
  
  buttonText: {
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.textWhite,
  },
  
  secondaryButtonText: {
    color: theme.colors.primary,
  },
  
  // Input styles
  inputContainer: {
    marginVertical: theme.spacing.sm,
  },
  
  input: {
    height: theme.layout.inputHeight,
    backgroundColor: theme.colors.inputBackground,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.textPrimary,
  },
  
  inputFocused: {
    borderColor: theme.colors.inputFocus,
    borderWidth: 2,
  },
  
  inputLabel: {
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  
  inputError: {
    borderColor: theme.colors.error,
  },
  
  errorText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.error,
    marginTop: theme.spacing.xs,
  },
  
  // Loading styles
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  
  loadingText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.md,
  },
  
  // Logo styles
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  
  logo: {
    width: 120,
    height: 120,
    borderRadius: theme.borderRadius.xxl,
    marginBottom: theme.spacing.md,
  },
  
  // Account selection styles
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  
  accountAvatar: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  
  accountAvatarText: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textWhite,
  },
  
  accountInfo: {
    flex: 1,
  },
  
  accountName: {
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.textPrimary,
  },
  
  accountEmail: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  
  // Utility styles
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  textCenter: {
    textAlign: 'center',
  },
  
  marginTop: {
    marginTop: theme.spacing.md,
  },
  
  marginBottom: {
    marginBottom: theme.spacing.md,
  },
  
  // Responsive styles
  fullWidth: {
    width: '100%',
  },
  
  screenWidth: {
    width: width,
  },
  
  screenHeight: {
    height: height,
  },
});

export default globalStyles;