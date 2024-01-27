import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native", "Warning: Failed prop type"]);
  return (
    <Stack
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="exercises" options={{
        presentation: 'fullScreenModal'
      }}/>
      <Stack.Screen name="exerciseDetails" options={{
        // title: 'Exercise Details',
        presentation: 'modal'
      }}/>
    </Stack>
  )
}