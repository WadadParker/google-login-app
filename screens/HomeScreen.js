import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const user = await AsyncStorage.getItem('@user');
      if (user) {
        const userData = JSON.parse(user);
        setUserInfo(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@user');
      setUserInfo(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {userInfo ? (
        <>
          <Text>Welcome, {userInfo.name}!</Text>
          <Text>Email: {userInfo.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
        <Text>Please Sign up</Text>
        <Button title='Sign in' onPress={()=>navigation.navigate('Auth')} />
        </>
      )}
      
    </View>
  );
}
