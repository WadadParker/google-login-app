import React, { useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../context/AuthContext';
import ProfileCard from '../components/ProfileCard';

export default function HomeScreen() {
  const {userInfo, setUserInfo} = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUserInfo();
  }, [userInfo]);

  const fetchUserInfo = async () => {
    try {
      const user = await AsyncStorage.getItem('@user');
      if (user && !userInfo) {
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

  console.log(userInfo,"Console on render");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {userInfo ? (
        <>
            <ProfileCard userInfo={userInfo} />
            <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
            <Text style={{fontSize:30,marginBottom:30}}>Please Sign in to continue</Text>
            <Button title='Sign in' onPress={()=>navigation.navigate('Auth')} />
        </>
      )}
      
    </View>
  );
}

