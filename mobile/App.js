
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from "./screens/login";
import BottomTabs from './components/BottomTabs';
import { Provider } from 'react-redux';
import makeStore from "./redux/store";



const Stack = createNativeStackNavigator();
const store = makeStore();
 function App() {
  return (
  <Stack.Navigator screenOptions={{headerShown: false}} >
    <Stack.Screen name='login' component={login} />
    <Stack.Screen name='home' component={BottomTabs} />

  </Stack.Navigator>
  );
}

export default ()=>{
  return(
    <Provider store={store}>
    <NavigationContainer>
      <App/>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
