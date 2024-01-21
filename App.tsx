const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import Main from "./screens/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "KaiseiTokumin-Regular": require("./assets/fonts/KaiseiTokumin-Regular.ttf"),
    "KaiseiTokumin-Bold": require("./assets/fonts/KaiseiTokumin-Bold.ttf"),
    "KaiseiTokumin-ExtraBold": require("./assets/fonts/KaiseiTokumin-ExtraBold.ttf"),
    "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf")
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />

            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
