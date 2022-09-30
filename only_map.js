import React, {useEffect} from 'react';
import { StyleSheet, View, Dimensions, Linking, Button } from 'react-native';
import { FAB, Portal,Switch, Provider, Appbar, Divider } from 'react-native-paper';
import MapView, { Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBFrQ9asMweyPu6BXO5gcH26QCdnZr0bbo'; // never save your real api key in a snack!
import * as Location from "expo-location";

function getLocation() {
    useEffect(() => {
        (async () => {
            let permissionStatus = null;
            if (Platform.OS === 'ios') {
                let {status} = await Permissions.askAsync(Permissions.LOCATION);
                permissionStatus = status;
            } else {
                let {status} = await Location.requestForegroundPermissionsAsync();
                permissionStatus = status;
            }
            if (permissionStatus !== 'granted') {
                return;
            }
            //setLocation(location);
        })();
    }, []);
}

export default function only_map({navigation}) {
    const [region, setRegion] = React.useState(null);
    const [location, setLocation] = React.useState(null);
    
    const [rstate, setRstate] = React.useState(   {
        mapRegion: {
            latitude: 35.78825,
            longitude: 129.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
    });
    
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    
    getLocation();
    
    
    return (
        
        <Provider>
        <Appbar.Header>
        <Appbar.Content title="내 주변 대피소 확인" />
        <Button 
            title="대피소"
            onPress={ () => navigation.navigate('대피소')}
            />
            <Button 
            title="침수"
            onPress={ () => navigation.navigate('침수만')}
            />
        </Appbar.Header>
        
        <Divider/>
        <View style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10
        }}>
        
        </View>
        <MapView 
        loadingEnabled={true}
        style={{ flex: 1 }}
        initialRegion={rstate.mapRegion}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}  
        zoomControlEnabled={true} 
        //provider={PROVIDER_GOOGLE} 
        rotateEnabled={true}
        scrollEnabled={true}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        keepResultsAfterBlur={true}
        //onRegionChange={onRegionChange}
        
        >
        </MapView>
        
        </Provider>
        );
    };
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        map: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
        fab: {
            flexDirection: 'row',
            alignItems: 'flex-start'
        },
    });