import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DashboardStack } from '../../constants/Screens'

const Stack = createNativeStackNavigator()

export default function DashboardStackNavigation() {
  return (
    <Stack.Navigator>
      {DashboardStack.map((dash) => (
        <Stack.Screen
          name={dash.name}
          component={dash.component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  )
}
