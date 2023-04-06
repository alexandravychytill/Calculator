import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
      <StatusBar style="auto" />
        <MyKeyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FA7CA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
