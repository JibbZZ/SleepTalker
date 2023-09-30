import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Recordings: undefined;
  Settings: undefined;
  Playback: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    if (isRecording) {
      
    } else {
      
    }
    setIsRecording(!isRecording);
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title={isRecording ? "Stop Recording" : "Start Recording"} onPress={toggleRecording} />
      <Button title="Go to Recordings" onPress={() => navigation.navigate('Recordings')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Go to Playback" onPress={() => navigation.navigate('Playback')} />
    </View>
  );
}


function RecordingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Recordings Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function PlaybackScreen() {
  return (
    <View style={styles.container}>
      <Text>Playback Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recordings" component={RecordingsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Playback" component={PlaybackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
