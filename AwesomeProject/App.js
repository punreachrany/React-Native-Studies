import { StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';
import WebView from 'react-native-webview';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize:42}}>
        {text.split}
      </Text>
      <WebView source={{uri:'facebook.com'}} />
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
