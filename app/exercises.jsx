import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'

export default function Exercises() {
    const router = useRouter()
    const item = useLocalSearchParams();
    console.log('got item: ', item);
  return (
    <View>
      <Text className="mt-20">Exercises</Text>
      <Link href="/login" asChild>
        <Button title="Go to Login" />
      </Link>
    </View>
  )
}