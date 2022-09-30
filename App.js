import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Linking, Alert } from 'react-native';
import { FAB, Portal, Provider, Appbar, Divider } from 'react-native-paper';
import { PROVIDER_GOOGLE, MAP_TYPES } from 'react-native-maps';
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";

const MyComponent = () => {

  
  // 하단 FAB
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  // 위치 정보 받기
  const getLocation = async () => {
  try {
    await Location.requestForegroundPermissionsAsync(); 
    const position = await Location.getCurrentPositionAsync();
      console.log(position);
  } catch (error) {
      Alert.alert("Can't find you", "Sorry 😭");
    }
  }

  return (
    
    <Provider>
      <Appbar.Header>
       <Appbar.Content title="내 주변 대피소 확인" />
      </Appbar.Header>

      <Divider/>
      <MapView 
        style={{ flex: 1 }}
        initialRegion={{
        latitude: 35.78825,
        longitude: 129.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 35.78825, longitude: 129.4324}}
          title="35/129"
          description="this is a marker example"
        />
      </MapView>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'minus' : 'plus'}
          actions={[
            {
              icon: 'cloud',
              label: '기상청',
              onPress: () => Linking.openURL('https://www.weather.go.kr/w/index.do')
            },
            {
              icon: 'target',
              label: '내 위치 보기',
              onPress: () => getLocation(),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default MyComponent;

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
});
