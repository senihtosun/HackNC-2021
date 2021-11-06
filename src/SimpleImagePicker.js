import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { STYLES, COLORS } from './Styles';
import * as ImagePicker from "react-native-image-picker"

export default function SimpleImagePicker() {
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 300,
      maxHeight: 300,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // Set new image source
        setImageSource(response.assets[0].uri);
      }
    });
  }
  
  return (
    <View

      style={[
        STYLES.flex,
        STYLES.centerContainer,
        { backgroundColor: COLORS.primaryDark }
      ]}
    >
      <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
        Simple Image Picker
      </Text>
      {/* ADD THIS */}
      <View style={STYLES.imageContainer}>
        {imageSource === null ? (
          <Image
            source={require('../assets/dummy-image.jpg')}
            style={STYLES.imageBox}
            resizeMode='contain'
          />
        ) : (
          <Image
            source={{ uri: imageSource }}
            style={STYLES.imageBox}
            resizeMode='contain'
          />
        )}
      </View>
      <TouchableOpacity
        onPress={selectImage}
        style={[
          STYLES.selectButtonContainer,
          { backgroundColor: COLORS.primaryLight }
        ]}
      >
        <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
      </TouchableOpacity>
    </View>
  );
}