import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora !</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{color: 'blue'}}>Go to Home</Link>
    </View>
  );
}
