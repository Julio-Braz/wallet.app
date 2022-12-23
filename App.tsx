import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppLoading from  'expo-app-loading'
import { ThemeProvider} from 'styled-components'
import { useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold}
     from '@expo-google-fonts/poppins';
import {DMSans_400Regular} from '@expo-google-fonts/dm-sans'
import {DMSerifDisplay_400Regular} from '@expo-google-fonts/dm-serif-display'
import  {Login} from './src/screens/Login/Login'
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();
import COLORS from './src/styles/theme';

export default function App() {


    const [fontsLoaded] = useFonts ({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    })
if(!fontsLoaded){
    return null;
}
    return (
        <ThemeProvider theme={COLORS}>
                        <StatusBar style='dark' translucent backgroundColor='transparent'/>
            <View>
                <Login/>
            </View>
    </ThemeProvider>
  );
}

