import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CalculatorScreen from './screens/CalculatorScreen';
import { CalculatorProvider } from './contexts/CalculatorContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <CalculatorProvider>
        <StatusBar style="auto" />
        <CalculatorScreen />
      </CalculatorProvider>
    </SafeAreaProvider>
  );
}
