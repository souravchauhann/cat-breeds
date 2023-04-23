import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Home from '../home';
import Detail from '../detail';
import Splash from '../splash';
import ViewAll from '../viewall';
import WebViewScreen from '../webview';




const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="Cart" component={Cart} /> */}
      
      <Stack.Screen name='Splash' component={Splash}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Detail' component={Detail}/>
      <Stack.Screen name='ViewAll' component={ViewAll}/>
      <Stack.Screen name='WebViewScreen' component={WebViewScreen}/>
      {/* <Stack.Screen name='Home' component={Home}/> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;