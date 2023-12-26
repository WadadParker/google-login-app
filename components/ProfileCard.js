import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ userInfo }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: userInfo?.picture }} style={styles.profileImage} />
      <Text style={styles.text}>Name: {userInfo?.name}</Text>
      <Text style={styles.text}>Email: {userInfo?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth:1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 10,
    marginBottom:30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileCard;
