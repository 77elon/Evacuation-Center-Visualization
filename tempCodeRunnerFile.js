import * as React from 'react';
import { Linking } from 'react-native';
import { FAB, Portal, Provider, Appbar } from 'react-native-paper';
import { WebView } from "react-native-webview";

const MyComponent = () => {
  // 하단 FAB
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;  
  return (
    <Provider>
      <Appbar.Header>
       <Appbar.Content title="내 주변 대피소 확인" />
      </Appbar.Header>
        <WebView
          source={{ uri: 'http://localhost:3000/app/map' }}
          style={{ marginTop: 20 }}
        />
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
              onPress: () => console.log('move my position'),
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
