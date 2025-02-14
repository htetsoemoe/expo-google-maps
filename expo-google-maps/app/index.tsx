import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function Index() {
  const [marker, setMarker] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleDoublePress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarker({ latitude, longitude });
  }

  return (
    <View
      style={styles.container}
    >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.939634032513027,
          longitude: 96.09596069717787,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        zoomControlEnabled={true}
        onDoublePress={handleDoublePress}
      >
        {marker && <Marker coordinate={marker} />}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%"
  }
})
