import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {

    const showMarker = () => {

    }
    const [locations, setLocations] = useState([])

    useEffect(() => {
        loadLocations()
    }, [""]

    )

    const loadLocations = async () => {
        try {
            const response = await fetch("Locations.json")
            setLocations(response.json)
            console.log(locations)
        }catch(e) {
            console.log(e)
        }
    }



    return (
        <>
        <MapView prop style={styles.map}>
        <Marker 
        title='cool place' 
        description='a place in rotterdam'
        pinColor='blue' 
        onPress={showMarker}
        coordinate={{
            latitude: 51.9225,
            longitude: 4.475917
        }}></Marker>
    </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {

      width: '100%',
      height: '100%',
    },
  });

export default Map