import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {IMAGE} from './src/constants/Image';

import {
  HomeScreen,
  HomeScreenDetail,
  SettingsScreen,
  SettingsScreenDetail,
} from './src/tabs';
import {LoginScreen, RegisterScreen} from './src/auth';
import {NotificationsScreen} from './src/drawer';
import {CustomDrawerContent} from './src/shared';

const navOptionsHandler = () => ({
  headerShown: false,
});

const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();
const StackSettings = createStackNavigator();
const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <StackHome.Navigator initialRouteName={'Home'}>
      <StackHome.Screen
        name={'Home'}
        component={HomeScreen}
        options={navOptionsHandler}
      />
      <StackHome.Screen
        name={'HomeDetail'}
        component={HomeScreenDetail}
        options={navOptionsHandler}
      />
    </StackHome.Navigator>
  );
};

const SettingsScreenStack = () => {
  return (
    <StackSettings.Navigator initialRouteName={'Settings'}>
      <StackSettings.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={navOptionsHandler}
      />
      <StackSettings.Screen
        name={'SettingsDetail'}
        component={SettingsScreenDetail}
        options={navOptionsHandler}
      />
    </StackSettings.Navigator>
  );
};

const TabNavigatior = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IMAGE.ICON_HOME : IMAGE.ICON_HOME_O;
          } else if (route.name === 'Settings') {
            iconName = focused ? IMAGE.ICON_SETTINGS : IMAGE.ICON_SETTINGS_O;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreenStack} />
      <Tab.Screen name="Settings" component={SettingsScreenStack} />
    </Tab.Navigator>
  );
};

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="HomeTab" component={TabNavigatior} />
      <Drawer.Screen name="NotificationsTab" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

/*
<Drawer.Navigator
  initialRouteName="HomeTab"
  drawerContent={props => CustomDrawerContent(props)}>
  <Drawer.Screen name="HomeTab" component={TabNavigatior} />
  <Drawer.Screen
    name="NotificationsTab"
    component={NotificationsScreen}
  />
</Drawer.Navigator>
*/

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={'Login'}>
        <AppStack.Screen
          name={'AppStart'}
          component={AppDrawerNavigator}
          options={navOptionsHandler}
        />
        <AppStack.Screen
          name={'Login'}
          component={LoginScreen}
          options={navOptionsHandler}
        />
        <AppStack.Screen
          name={'Register'}
          component={RegisterScreen}
          options={navOptionsHandler}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
