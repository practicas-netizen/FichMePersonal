import { useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAdminAuth } from '@/hooks/use-admin-auth';

export function AdminLoginScreen() {
  const { login } = useAdminAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin() {
    const success = login(username, password);
    if (!success) setError('Usuario o contraseña incorrectos');
  }

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1 justify-center px-6">
        <ThemedText type="title" className="mb-8 text-center">
          FichMe Admin
        </ThemedText>

        <ThemedText type="small" className="mb-1">Usuario</ThemedText>
        <TextInput
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholder="admin"
          className="mb-4 rounded-lg border border-gray-300 px-4 py-3 text-base"
        />

        <ThemedText type="small" className="mb-1">Contraseña</ThemedText>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="••••••••"
          className="mb-2 rounded-lg border border-gray-300 px-4 py-3 text-base"
        />

        {error ? (
          <ThemedText type="small" className="mb-4 text-red-500">
            {error}
          </ThemedText>
        ) : null}

        <Pressable onPress={handleLogin} className="mt-4 items-center rounded-lg bg-blue-600 py-3">
          <ThemedText type="default" style={{ color: '#ffffff' }}>
            Iniciar sesión
          </ThemedText>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}