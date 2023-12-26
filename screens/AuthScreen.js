import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID, WEB_CLIENT_ID } from '@env';

WebBrowser.maybeCompleteAuthSession();

export default function AuthScreen() {
    const navigation = useNavigation();

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: ANDROID_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        webClientId: WEB_CLIENT_ID,
      });

      const handleSignInWithGoogle = async () => {
        const user = await AsyncStorage.getItem('@user');
        if (!user && response?.type === 'success') {
          const token = response.authentication.accessToken;
          const userInfo = await getUserInfo(token);
          await AsyncStorage.setItem('@user', JSON.stringify(userInfo));
          navigation.navigate('Home');
        }
      };
    
      const getUserInfo = async (token) => {
        if (!token) return null;
        try {
          const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          return await response.json();
        } catch (error) {
          console.log(error);
          return null;
        }
      };

      useEffect(() => {
        handleSignInWithGoogle();
      }, [response, navigation]);
      
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Sign in with Google" onPress={() => promptAsync()} />
        </View>
      );
    }