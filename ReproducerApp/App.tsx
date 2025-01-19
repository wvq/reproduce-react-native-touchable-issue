/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  useColorScheme,
  View,
} from 'react-native';

import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount((state) => state + 1);
    ToastAndroid.showWithGravityAndOffset(
      `pressed: ${count}`,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      200
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="test touchable" onPress={onPress}></Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Home',
        headerRight: () => (
          <Button
            title="test onPress"
            onPress={() => {
              console.log(`pressed top`);
              ToastAndroid.showWithGravityAndOffset(
                `pressed top`,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                0,
                200
              );
            }
            }></Button>
        ),
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
