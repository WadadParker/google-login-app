import React, {useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ANDROID_CLIENT_ID,IOS_CLIENT_ID,WEB_CLIENT_ID} from "@env"

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo,setUserInfo] = useState(null);
  const [request,response,promptAsync] = Google.useAuthRequest({
    androidClientId:ANDROID_CLIENT_ID,
    iosClientId:IOS_CLIENT_ID,
    webClientId:WEB_CLIENT_ID
  })

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if(!user) {
      if(response?.type==="success")
      {
      await getUserInfo(response.authentication.accessToken)
      }
    }
    else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async(token)=> {
    if(!token) return;
    try {
      const response = await fetch("https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${token}`},
      });

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch(error)
    {
      console.log(error);
    }
  }

  useEffect(()=>{
    handleSignInWithGoogle();
  },[response])

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(userInfo,null,2)}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Sign in with Google" onPress={()=>promptAsync()} />
      <Button title="Logout" onPress={()=>AsyncStorage.removeItem("@user")} />
      <StatusBar style="auto" />
    </View>
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
