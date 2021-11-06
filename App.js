import React from 'react'
import { StatusBar } from 'react-native'
import SimpleImagePicker from './src/SimpleImagePicker'

export default function (){
  return (
    <>
      <StatusBar barStyle='light-content'/>
      <SimpleImagePicker/>
    </>
  )
}