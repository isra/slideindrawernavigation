import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const CustomHeader = ({title, isHome, navigator}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigator.openDrawer()}>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
              source={require('./src/assets/images/menu.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigator.goBack()}>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
              source={require('./src/assets/images/back.png')}
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text />
      </View>
    </View>
  );
};

const navOptionsHandler = () => ({
  headerShown: false,
});

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={'Home Screen'}
        isHome={true}
        navigator={navigation}
      />
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('HomeDetail');
          }}>
          <Text>Go to Home Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const HomeScreenDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={'Home Detail Screen'} navigator={navigation} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back to Home Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={'Settings Screen'}
        isHome={true}
        navigator={navigation}
      />
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('SettingsDetail');
          }}>
          <Text>Go to Settings Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const SettingsScreenDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={'Settings Screen'} navigator={navigation} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back to Settings Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();
const StackSettings = createStackNavigator();
const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

const drawerContentHandler = props => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView style={{marginLeft: 5}}>
      <View
        style={{height: 150, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./src/assets/images/user.png')}
          style={{width: 120, height: 120, borderRadius: 60}}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => props.navigation.navigate('HomeTab')}>
        <Text>Menu tab</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => props.navigation.navigate('NotificationsTab')}>
        <Text>Notifications</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={'Notifications Screen'} navigator={navigation} />
      <View style={styles.container}>
        <Text>Notifications Screen</Text>
      </View>
    </SafeAreaView>
  );
}

function RegisterScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={'Register Screen'} navigator={navigation} />
      <View style={styles.container}>
        <Text>Register Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('AppStart');
          }}>
          <Text>Login start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
            iconName = focused
              ? require('./src/assets/images/home.png')
              : require('./src/assets/images/home-o.png');
          } else if (route.name === 'Settings') {
            iconName = focused
              ? require('./src/assets/images/settings.png')
              : require('./src/assets/images/settings-o.png');
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
      drawerContent={props => drawerContentHandler(props)}>
      <Drawer.Screen name="HomeTab" component={TabNavigatior} />
      <Drawer.Screen name="NotificationsTab" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

/*
<Drawer.Navigator
  initialRouteName="HomeTab"
  drawerContent={props => drawerContentHandler(props)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
