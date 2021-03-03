import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

import WebView from 'react-native-webview';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText("The text has changed")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
