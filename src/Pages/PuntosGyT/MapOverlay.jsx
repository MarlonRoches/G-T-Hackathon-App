import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const OverlayTest = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/PlaceHolders/mapPlaceholder.png')} style={styles.image} />
      <View style={styles.overlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
   width:"50%",
   height:"50%",
    backgroundColor: 'green',
    opacity: 0.5,
  },
});

export default OverlayTest;