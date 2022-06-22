import React from 'react'
import { SafeAreaView } from 'react-native'

export default function AppWrapper({ children, color = '#fff', ...props }) {
  return (
    <SafeAreaView style={{ backgroundColor: color, flex: 1, props }}>
      {children}
    </SafeAreaView>
  )
}
