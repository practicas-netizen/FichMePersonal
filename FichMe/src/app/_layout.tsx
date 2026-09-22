import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AdminLoginScreen } from '@/components/admin-login-screen';
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import { AdminAuthProvider, useAdminAuth } from '@/hooks/use-admin-auth';
import "../global.css";

SplashScreen.preventAutoHideAsync();

function RootNavigation() {
  const { isAdminLoggedIn } = useAdminAuth();
  return isAdminLoggedIn ? <AppTabs /> : <AdminLoginScreen />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AdminAuthProvider>
        <AnimatedSplashOverlay />
        <RootNavigation />
      </AdminAuthProvider>
    </ThemeProvider>
  );
}