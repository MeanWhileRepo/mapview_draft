import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

class locationArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        accuracy: null,
        altitude: null,
        heading: null,
        latitude: 32.78825,
        longitude: null,
        speed: null
      }
    };
  }
  getRegionForCoordinates = (lat, lon, distance) => {
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
    const longitudeDelta =
      distance /
      (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));

    return (result = {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta
    });
  };
  onPressLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        let result = this.getRegionForCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          position.coords.accuracy
        );
        console.log(result);
      },
      err => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
        useSignificantChanges: true
      }
    );
  };
  render() {
    return (
      <React.Fragment>
        <View>
          <Button
            onPress={this.onPressLocation}
            title="Location"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.mb30}
          />
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
              <View style={styles.marker}>
                <Text> 07 </Text>
              </View>
            </Marker>
          </MapView>
        </View>
      </React.Fragment>
    );
  }
}

export default locationArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  map: {
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  marker: {
    backgroundColor: "#e91e63",
    padding: 10,
    borderRadius: 4
  },
  mt30: {
    marginTop: 30
  },
  mb30: {
    marginBottom: 30
  }
});
