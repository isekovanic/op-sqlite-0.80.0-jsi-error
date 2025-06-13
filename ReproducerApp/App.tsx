/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import {SqliteClient} from "./SQLiteClient.ts";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

    useEffect(() => {
        SqliteClient.openDB();
    }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            ✨OP-SQLite JSI Error Reproduction ✨
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
