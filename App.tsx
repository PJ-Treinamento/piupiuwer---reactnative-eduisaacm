import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/hooks/auth';
import LoginPage from './src/pages/LoginPage';
import { Routes } from './src/routes/routes';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}