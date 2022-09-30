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

export default function water_leak({navigation}) {
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
    const mapRef = React.createRef();
    
    
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);    
    getLocation();
    
    
    return (
        
        <Provider>
        <Appbar.Header>
        <Appbar.Content title="내 주변 대피소 확인" />
        <Button 
        title="침수"
        onPress={ () => navigation.navigate('지도')}
        />
        <Button 
        title="대피소"
        onPress={ () => navigation.navigate('침수')}
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
        ref={mapRef}
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
     

     <Polygon coordinates={[{ latitude: 36.4112, longitude: 129.3694 },{ latitude: 36.4094, longitude: 129.3712 },{ latitude: 36.4105 , longitude: 129.3692 },]} fillColor="rgba(255,0,221,0.3)" strokeWidth={0.1}/>
<Polygon coordinates = {[{ latitude:36.373    , longitude:128.1451    },{ latitude:36.3743         ,longitude:128.1543    },{ latitude:36.3788        , longitude:128.1599    },
{ latitude:36.3838    , longitude:128.1616    },{ latitude:36.391         ,longitude:128.1714    },{ latitude:36.4126        , longitude:128.1844    },
{ latitude:36.4209    , longitude:128.1841    },{ latitude:36.4273         ,longitude:128.159      },{ latitude:36.4159        , longitude:128.1394    },
{ latitude:36.4125    , longitude:128.147      },{ latitude:36.4114         ,longitude:128.156      },{ latitude:36.3991        , longitude:128.1602    },]} 
fillColor="rgba(255,0,221,0.3)" strokeWidth={0.1}/>
<Polygon coordinates = {[
{ latitude:36.422   , longitude:128.1836    },
{ latitude:36.4328  , longitude:128.1784    },
{ latitude:36.4375  , longitude:128.183 },
{ latitude:36.4383  , longitude:128.1805    },
{ latitude:36.4399  , longitude:128.1815    },
{ latitude:36.4444  , longitude:128.1818    },
{ latitude:36.4444  , longitude:128.1873    },
{ latitude:36.4565  , longitude:128.186     },
{ latitude:36.4684  , longitude:128.1787    },
{ latitude:36.4725  , longitude:128.173 },
{ latitude:36.4841  , longitude:128.1784 },
{ latitude:36.5003  , longitude:128.178 },
{ latitude:36.4922  , longitude:128.1867  },
{ latitude:36.4859  , longitude:128.1871  },
{ latitude:36.4818  , longitude:128.1946    },
{ latitude:36.4744  , longitude:128.1992  },
{ latitude:36.4726  , longitude:128.1993  },
{ latitude:36.4684  , longitude:128.2002    },
{ latitude:36.463     , longitude:128.202  },
{ latitude:36.4612  , longitude:128.2  },
{ latitude:36.4558  , longitude:128.1973    },
{ latitude:36.454   , longitude:128.1954  },
{ latitude:36.4486  , longitude:128.1974  },
{ latitude:36.4494  , longitude:128.1925    },
{ latitude:36.4488  , longitude:128.1955    },
{ latitude:36.4434  , longitude:128.1997  },
{ latitude:36.4406  , longitude:128.201 },
{ latitude:36.4391  , longitude:128.2045  },
{ latitude:36.4404  , longitude:128.2079  },
{ latitude:36.4365  , longitude:128.2134    },
{ latitude:36.4389  , longitude:128.222  },
{ latitude:36.4502  , longitude:128.2227  },
{ latitude:36.44      , longitude:128.2412  },
{ latitude:36.4388  , longitude:128.2324  },
{ latitude:36.4434  , longitude:128.2322  },
{ latitude:36.4443  , longitude:128.2271    },
{ latitude:36.4392  , longitude:128.2277    },
{ latitude:36.4315  , longitude:128.2144},
{ latitude:36.4325  , longitude:128.2074    },
{ latitude:36.4319  , longitude:128.2069    },
{ latitude:36.4299  , longitude:128.2087    },
{ latitude:36.4269  , longitude:128.2096    },
{ latitude:36.4236  , longitude:128.2073    },
{ latitude:36.4238  , longitude:128.2021    },
{ latitude:36.4255  , longitude:128.2009    },
{ latitude:36.423   , longitude:128.1927},]} fillColor="rgba(255,0,221,0.3)" strokeWidth={0.1}/>

<Polygon coordinates = {[
{ latitude:36.0499  , longitude:128.1176    },
{ latitude:36.0609  , longitude:128.1112    },
{ latitude:36.0663  , longitude:128.108 },
{ latitude:36.0763  , longitude:128.1074    },
{ latitude:36.0842  , longitude:128.1134    },
{ latitude:36.0862  , longitude:128.1167    },
{ latitude:36.0923  , longitude:128.1154    },
{ latitude:36.1174  , longitude:128.1245    },
{ latitude:36.1198  , longitude:128.1273    },
{ latitude:36.1267  , longitude:128.1222    },
{ latitude:36.1284  , longitude:128.1229    },
{ latitude:36.1299  , longitude:128.1208    },
{ latitude:36.1307  , longitude:128.1233    },
{ latitude:36.1267  , longitude:128.1305    },
{ latitude:36.1197  , longitude:128.1302    },
{ latitude:36.1169  , longitude:128.134 },
{ latitude:36.1113  , longitude:128.1335    },
{ latitude:36.1054  , longitude:128.1279    },
{ latitude:36.1006  , longitude:128.1262    },
{ latitude:36.0943  , longitude:128.127 },
{ latitude:36.0857  , longitude:128.1229    },
{ latitude:36.0844  , longitude:128.1312    },
{ latitude:36.0822  , longitude:128.1313    },
{ latitude:36.0786  , longitude:128.1277    },
{ latitude:36.0719  , longitude:128.1203    },
{ latitude:36.0652  , longitude:128.1132    },
{ latitude:36.0634  , longitude:128.1246    },
{ latitude:36.0564  , longitude:128.1229    },
{ latitude:36.0575  , longitude:128.1182    },
{ latitude:36.0523  , longitude:128.1171},]} fillColor="rgba(255,0,221,0.3)" strokeWidth={0.1}/>

<Polygon coordinates = {[
{ latitude:36.1265  , longitude:128.1275    },
{ latitude:36.1241  , longitude:128.1383    },
{ latitude:36.1355  , longitude:128.1643    },
{ latitude:36.1219  , longitude:128.1715    },
{ latitude:36.1242  , longitude:128.1756    },
{ latitude:36.1379  , longitude:128.18  },
{ latitude:36.1499  , longitude:128.1789    },
{ latitude:36.1635  , longitude:128.1954    },
{ latitude:36.1693  , longitude:128.1864    },
{ latitude:36.1526  , longitude:128.176 },
{ latitude:36.1716  , longitude:128.169 },
{ latitude:36.1768  , longitude:128.1609    },
{ latitude:36.1865  , longitude:128.1572    },
{ latitude:36.1805  , longitude:128.1239    },
{ latitude:36.1719  , longitude:128.1655    },
{ latitude:36.1688  , longitude:128.1574    },
{ latitude:36.1461  , longitude:128.1625    },
{ latitude:36.1445  , longitude:128.1494    },
{ latitude:36.1345  , longitude:128.1442},]} fillColor="rgba(255,0,221,0.3)" strokeWidth={0.1}/>

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