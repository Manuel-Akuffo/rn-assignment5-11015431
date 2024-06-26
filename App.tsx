import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import MyCardsScreen from './MyCardsScreen';
import MyStatisticsScreen from './MyStatisticsScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="MyCards" 
          component={MyCardsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="credit-card" color={color} size={size} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen 
          name="MyStatistics" 
          component={MyStatisticsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="line-chart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
