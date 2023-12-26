// web 1097694407489-t04a451jdjr5flksdfcramdu93o5qhbj.apps.googleusercontent.com
// ios 1097694407489-5fof1hr8f8v0pub897dsm38nmbf2m60q.apps.googleusercontent.com
// android 1097694407489-958nbpoq4thdm92dj76l0of9lvmtgd9j.apps.googleusercontent.com

import React, {useState,useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ANDROID_CLIENT_ID,IOS_CLIENT_ID,WEB_CLIENT_ID} from "@env"

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
