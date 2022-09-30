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

export default function all_of_layers({navigation}) {
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
            onPress={ () => navigation.navigate('대피소')}
            />
            <Button 
            title="대피소"
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
            <Marker coordinate = {{latitude:	36.3988 ,longitude: 129.369  }} title= "	영덕세무서	" description="	도로명 : 	경상북도 영덕군 영덕읍 영덕로 35-11	, 면적 :	152 ㎡	" />	
            <Marker coordinate = {{latitude:	36.4006	,longitude:	129.37	}} title= "	영덕경찰서	" description="	도로명 :	경상북도 영덕군 영덕읍 남산리 59-3	, 면적 :	717 ㎡	" />																		
            <Marker coordinate = {{latitude:	36.40899	,longitude:	129.3739	}} title= "	영덕교육지원청	" description="	도로명 : 	경상북도 영덕군 영덕읍 읍사무소1길 32-15	, 면적 :	115 ㎡	" />
            <Marker coordinate = {{latitude:	36.412	,longitude:	129.3698	}} title= "	영덕우체국	" description="	도로명 :	경상북도 영덕군 영덕읍 덕곡길 90	, 면적 :	134 ㎡	" />
            <Marker coordinate = {{latitude:	36.4088	,longitude:	129.3712	}} title= "	맘애듬아파트	" description="	도로명 : 	경상북도 영덕군 영덕읍 덕곡리	, 면적 :	678 ㎡	" />
            <Marker coordinate = {{latitude:	36.415	,longitude:	129.3657	}} title= "	영덕군청(본청)	" description="	도로명 :	경상북도 영덕군 영덕읍 군청길 116	, 면적 :	514 ㎡	" />
            <Marker coordinate = {{latitude:	36.4107	,longitude:	129.3694	}} title= "	농협중앙회영덕군지부	" description="	도로명 : 	경상북도 영덕군 영덕읍 중앙길 97 KR	, 면적 :	173 ㎡	" />
            <Marker coordinate = {{latitude:	36.4147	,longitude:	129.3682	}} title= "	영덕공공도서관	" description="	도로명 :	경상북도 영덕군 영덕읍 군청길 102	, 면적 :	410 ㎡	" />
            <Marker coordinate = {{latitude:	36.4208	,longitude:	129.3657	}} title= "	대구지방검찰청영덕지청	" description="	도로명 : 	경상북도 영덕군 영덕읍 화개리 226-1	, 면적 :	988 ㎡	" />
            <Marker coordinate = {{latitude:	36.42	,longitude:	129.3663	}} title= "	대구지방법원영덕지원	" description="	도로명 :	경상북도 영덕군 영덕읍 경동로 8337	, 면적 :	601 ㎡	" />
            <Marker coordinate = {{latitude:	36.6667	,longitude:	129.1124	}} title= "	영양군청	" description="	도로명 : 	경상북도 영양군 영양읍 군청길 37	, 면적 :	2016 ㎡	" />
            <Marker coordinate = {{latitude:	36.6599	,longitude:	129.1175	}} title= "	영양군문화체육센터	" description="	도로명 :	경상북도 영양군 영양읍 서부리 산 141-1번지	, 면적 :	149 ㎡	" />
            <Marker coordinate = {{latitude:	36.6639	,longitude:	129.1153	}} title= "	영양보건지소	" description="	도로명 : 	경상북도 영양군 영양읍 서부리 292-4	, 면적 :	111 ㎡	" />
            <Marker coordinate = {{latitude:	36.663621	,longitude:	129.113775	}} title= "	신라장	" description="	도로명 :	경상북도 영양군 영양읍 서부리 243-1	, 면적 :	205 ㎡	" />
            <Marker coordinate = {{latitude:	36.6651	,longitude:	129.1129	}} title= "	비상대피시설(k-1)	" description="	도로명 : 	경상북도 영양군 영양읍 서부리 203-1	, 면적 :	197 ㎡	" />
            <Marker coordinate = {{latitude:	36.663	,longitude:	129.1091	}} title= "	비상대피시설(신아빌라)	" description="	도로명 :	경상북도 영양군 영양읍 서부리 507-9	, 면적 :	220 ㎡	" />
            <Marker coordinate = {{latitude:	36.6627	,longitude:	129.1147	}} title= "	비상대피시설(카네기)	" description="	도로명 : 	경상북도 영양군 영양읍 서부리 106-6	, 면적 :	202 ㎡	" />
            <Marker coordinate = {{latitude:	36.6647	,longitude:	129.1136	}} title= "	화이트광장	" description="	도로명 :	경상북도 영양군 영양읍 서부리 208	, 면적 :	161 ㎡	" />
            <Marker coordinate = {{latitude:	36.6668	,longitude:	129.1149	}} title= "	비상대피시설(영양읍사무소)	" description="	도로명 : 	경상북도 영양군 영양읍 동부리 550-1	, 면적 :	111 ㎡	" />
            <Marker coordinate = {{latitude:	36.9931	,longitude:	129.4006	}} title= "	울진군청	" description="	도로명 :	경상북도 울진군 울진읍 울진중앙로 121	, 면적 :	87 ㎡	" />
            <Marker coordinate = {{latitude:	36.9864	,longitude:	129.3988	}} title= "	울진교육지원청	" description="	도로명 : 	경상북도 울진군 울진읍 월변7길 17	, 면적 :	300 ㎡	" />
            <Marker coordinate = {{latitude:	36.9939	,longitude:	129.4033	}} title= "	울진우체국	" description="	도로명 :	경상북도 울진군 울진읍 연호로 19	, 면적 :	543 ㎡	" />
            <Marker coordinate = {{latitude:	36.9935	,longitude:	129.3946	}} title= "	울진소방서	" description="	도로명 : 	경상북도 울진군 울진읍 읍내리 363	, 면적 :	388 ㎡	" />
            <Marker coordinate = {{latitude:	36.995	,longitude:	129.4025	}} title= "	KT울진지사	" description="	도로명 :	경상북도 울진군 울진읍 읍내리 513-1	, 면적 :	787 ㎡	" />
            <Marker coordinate = {{latitude:	36.989	,longitude:	129.3949	}} title= "	한국전력공사울진지점	" description="	도로명 : 	경상북도 울진군 울진읍	, 면적 :	353 ㎡	" />
            <Marker coordinate = {{latitude:	36.9932	,longitude:	129.4014	}} title= "	농협중앙회울진군지부	" description="	도로명 :	경상북도 울진군 울진읍 울진중앙로 130 KR	, 면적 :	100 ㎡	" />
            <Marker coordinate = {{latitude:	36.9833	,longitude:	129.3984	}} title= "	현대아파트	" description="	도로명 : 	경상북도 울진군 울진읍 읍내리 196-4	, 면적 :	2671 ㎡	" />
            <Marker coordinate = {{latitude:	36.9936	,longitude:	129.4046	}} title= "	KB은행	" description="	도로명 :	경상북도 울진군 울진읍 읍내리 547-5	, 면적 :	546 ㎡	" />
            <Marker coordinate = {{latitude:	36.9945	,longitude:	129.4014	}} title= "	삼성생명	" description="	도로명 : 	경상북도 울진군 울진읍 읍내리 516-15	, 면적 :	198 ㎡	" />
            <Marker coordinate = {{latitude:	36.9935	,longitude:	129.4046	}} title= "	명지렉스빌	" description="	도로명 :	 경상북도 울진군 울진읍 읍내리	, 면적 :	337 ㎡	" />
            <Marker coordinate = {{latitude:	37.176	,longitude:	129.3335	}} title= "	진영빌라	" description="	도로명 : 	강원도 삼척시 원덕읍 호산리	, 면적 :	261.44 ㎡	" />
            <Marker coordinate = {{latitude:	37.177	,longitude:	129.3347	}} title= "	원덕도서관	" description="	도로명 :	강원도 삼척시 원덕읍 호산리 242	, 면적 :	137.24 ㎡	" />
            <Marker coordinate = {{latitude:	36.1443	,longitude:	128.0964	}} title= "	법원김천지원	" description="	도로명 : 	경상북도 김천시 물망골길 39	, 면적 :	178.5 ㎡	" />
            <Marker coordinate = {{latitude:	36.1442	,longitude:	128.0952	}} title= "	검찰청김천지청	" description="	도로명 :	경상북도 김천시 삼락동 1222	, 면적 :	82.6 ㎡	" />
            <Marker coordinate = {{latitude:	36.1446	,longitude:	128.0998	}} title= "	코아루2차아파트	" description="	도로명 : 	경상북도 김천시 삼락택지길 137 코아루 2차아파트	, 면적 :	6681.35 ㎡	" />
            <Marker coordinate = {{latitude:	36.1376	,longitude:	128.0918	}} title= "	건화호반아파트	" description="	도로명 :	경상북도 김천시 교동 899	, 면적 :	1758.6 ㎡	" />
            <Marker coordinate = {{latitude:	36.1433	,longitude:	128.0994	}} title= "	코아루1차아파트	" description="	도로명 : 	경상북도 김천시 대신동 삼락택지길 132	, 면적 :	1515 ㎡	" />
            <Marker coordinate = {{latitude:	36.1347	,longitude:	128.1109	}} title= "	신음부거리대피소	" description="	도로명 :	경북 김천시 신음동 1142	, 면적 :	16.5 ㎡	" />
            <Marker coordinate = {{latitude:	36.1425	,longitude:	128.1143	}} title= "	우방1차아파트	" description="	도로명 : 	경상북도 김천시 신음동 1272	, 면적 :	842.9 ㎡	" />
            <Marker coordinate = {{latitude:	36.1423	,longitude:	128.1152	}} title= "	삼보아파트	" description="	도로명 :	경상북도 김천시 신음동 1275	, 면적 :	1289.2 ㎡	" />
            <Marker coordinate = {{latitude:	36.1379	,longitude:	128.113 	}} title= "	신음금류아파트	" description="	도로명 : 	경상북도 김천시 신음동 847-2	, 면적 :	5371.9 ㎡	" />
            <Marker coordinate = {{latitude:	36.1416	,longitude:	128.1139	}} title= "	덕일아파트	" description="	도로명 :	경북 김천시 시청6길 27	, 면적 :	3153.7 ㎡	" />
            <Marker coordinate = {{latitude:	36.1367	,longitude:	128.1187	}} title= "	우방2차아파트	" description="	도로명 : 	경북 김천시 신음2길 42	, 면적 :	3157 ㎡	" />
            <Marker coordinate = {{latitude:	36.1335	,longitude:	128.1187	}} title= "	현대1차아파트	" description="	도로명 :	경상북도 김천시 시청로 46	, 면적 :	7226.4 ㎡	" />
            <Marker coordinate = {{latitude:	36.1354	,longitude:	128.1187	}} title= "	제일병원	" description="	도로명 : 	경상북도 김천시 신음1길 12 KR	, 면적 :	330.5 ㎡	" />
            <Marker coordinate = {{latitude:	36.1453	,longitude:	128.1207	}} title= "	탑웨딩	" description="	도로명 :	경상북도 김천시 시청로 194	, 면적 :	661.1 ㎡	" />
            <Marker coordinate = {{latitude:	36.132	,longitude:	128.119	  }} title= "	현대2차아파트	" description="	도로명 : 	경상북도 김천시 시청로 40	, 면적 :	2644.6 ㎡	" />
            <Marker coordinate = {{latitude:	36.1399	,longitude:	128.1136	}} title= "	김천시청	" description="	도로명 :	경상북도 김천시 시청1길 1	, 면적 :	780.1 면적	" />
            <Marker coordinate = {{latitude:	36.1369	,longitude:	128.1161	}} title= "	대신휴먼시아	" description="	도로명 : 	경상북도 김천시 시청로 93	, 면적 :	4485 ㎡	" />
            <Marker coordinate = {{latitude:	36.1118	,longitude:	128.1234	}} title= "	동부수정아파트	" description="	도로명 :	경상북도 김천시 황금동 129	, 면적 :	3143.8 ㎡	" />
            <Marker coordinate = {{latitude:	36.1161	,longitude:	128.1217	}} title= "	김천황금성당	" description="	도로명 : 	경상북도 김천시 학사대길 64	, 면적 :	793 ㎡	" />
            <Marker coordinate = {{latitude:	36.1183	,longitude:	128.1232	}} title= "	김천남산신경외과	" description="	도로명 :	경상북도 김천시 남산동	, 면적 :	246.82 ㎡	" />
            <Marker coordinate = {{latitude:	36.1268	,longitude:	128.1821	}} title= "	김천경찰서	" description="	도로명 : 	경상북도 김천시 혁신8로 8	, 면적 :	934.2 ㎡	" />
            <Marker coordinate = {{latitude:	36.121	,longitude:	128.1178	}} title= "	농협중앙회지부	" description="	도로명 :	경상북도 김천시 김천로 154	, 면적 :	317.36 ㎡	" />
            <Marker coordinate = {{latitude:	36.1193	,longitude:	128.1191	}} title= "	중앙보건지소	" description="	도로명 : 	경상북도 김천시 남산동 28-18	, 면적 :	100 ㎡	" />
            <Marker coordinate = {{latitude:	36.1213	,longitude:	128.1175	}} title= "	신한은행	" description="	도로명 :	경상북도 김천시 평화동 279-4	, 면적 :	132.23 ㎡	" />
            <Marker coordinate = {{latitude:	36.1209	,longitude:	128.1167	}} title= "	윤대영산부인과	" description="	도로명 : 	경상북도 김천시 평화동 277-59	, 면적 :	135.54 ㎡	" />
            <Marker coordinate = {{latitude:	36.1237	,longitude:	128.1122	}} title= "	달성사우나	" description="	도로명 :	경상북도 김천시 평화동 256-11	, 면적 :	148.76 ㎡	" />
            <Marker coordinate = {{latitude:	36.1241	,longitude:	128.1124	}} title= "	국민은행	" description="	도로명 : 	경상북도 김천시 김천로 94	, 면적 :	231.99 ㎡	" />
            <Marker coordinate = {{latitude:	36.1273	,longitude:	128.1069	}} title= "	서부성결교회	" description="	도로명 :	경상북도 김천시 평화동 220-1	, 면적 :	185.12 ㎡	" />
            <Marker coordinate = {{latitude:	36.1275	,longitude:	128.1152	}} title= "	한일장미아파트	" description="	도로명 : 	경상북도 김천시 평화동 72-9	, 면적 :	1629.76 ㎡	" />
            <Marker coordinate = {{latitude:	36.1245	,longitude:	128.1117	}} title= "	평화프라자	" description="	도로명 :	경상북도 김천시 평화동 245-69	, 면적 :	330.58 ㎡	" />
            <Marker coordinate = {{latitude:	36.1256	,longitude:	128.1084	}} title= "	신천지아파트	" description="	도로명 : 	경상북도 김천시 평화동	, 면적 :	1115.26 ㎡	" />
            <Marker coordinate = {{latitude:	36.1229	,longitude:	128.1097	}} title= "	김천시립도서관	" description="	도로명 :	경상북도 김천시 평화순환길 111 KR	, 면적 :	600 ㎡	" />
            <Marker coordinate = {{latitude:	36.1244	,longitude:	128.1198	}} title= "	항도아파트	" description="	도로명 : 	경상북도 김천시 성내동 62	, 면적 :	2476.04 ㎡	" />
            <Marker coordinate = {{latitude:	36.1185	,longitude:	128.1256	}} title= "	김천우체국	" description="	도로명 :	경상북도 김천시 중앙시장3길 22	, 면적 :	480 ㎡	" />
            <Marker coordinate = {{latitude:	36.1249	,longitude:	128.1229	}} title= "	한일파크맨션	" description="	도로명 : 	경상북도 김천시 모암동 114-3	, 면적 :	165.2 ㎡	" />
            <Marker coordinate = {{latitude:	36.1226	,longitude:	128.1265	}} title= "	김천의료원	" description="	도로명 :	경상북도 김천시 모암길 24	, 면적 :	743 ㎡	" />
            <Marker coordinate = {{latitude:	36.1246	,longitude:	128.1279	}} title= "	한일상가아파트 지하주차장	" description="	도로명 : 	 경상북도 울진군 울진읍 읍내리	, 면적 :	944.38 ㎡	" />
            <Marker coordinate = {{latitude:	36.4187	,longitude:	128.1518	}} title= "	상주종합버스터미널	" description="	도로명 :	경북 상주시 삼백로 71	, 면적 :	231 ㎡	" />
            <Marker coordinate = {{latitude:	36.4152	,longitude:	128.1584	}} title= "	좋은날노래방	" description="	도로명 : 	경상북도 상주시 남성동 13-23	, 면적 :	469.42 ㎡	" />
            <Marker coordinate = {{latitude:	36.4132	,longitude:	128.1597	}} title= "	알리안츠생명보험(주)	" description="	도로명 :	경상북도 상주시 남성동 85-37	, 면적 :	460 ㎡	" />
            <Marker coordinate = {{latitude:	36.3187	,longitude:	127.9612	}} title= "	청춘노래방(모동 용호)	" description="	도로명 : 	경상북도 상주시 모동면 용호리 39	, 면적 :	98 ㎡	" />
            <Marker coordinate = {{latitude:	36.3384	,longitude:	128.1287	}} title= "	남상주농협	" description="	도로명 :	경상북도 상주시 청리면 청하리 879-7	, 면적 :	173 ㎡	" />
            <Marker coordinate = {{latitude:	36.3597	,longitude:	128.2985	}} title= "	낙동강한우촌	" description="	도로명 : 	경상북도 상주시 낙동면 영남제일로 51-8	, 면적 :	405 ㎡	" />
            <Marker coordinate = {{latitude:	36.4663	,longitude:	128.2085	}} title= "	사벌면사무소	" description="	도로명 :	경상북도 상주시 사벌면 덕담1길 39	, 면적 :	76.03 ㎡	" />
            <Marker coordinate = {{latitude:	36.5687	,longitude:	128.1793	}} title= "	함창장로교회	" description="	도로명 : 	경상북도 상주시 함창읍 구향리 130	, 면적 :	60 ㎡	" />
            <Marker coordinate = {{latitude:	36.4017	,longitude:	128.1579	}} title= "	상주 고등학교	" description="	도로명 :	경상북도 상주시 상산로 117	, 면적 :	173 ㎡	" />
            <Marker coordinate = {{latitude:	36.4076	,longitude:	128.1515	}} title= "	명지1차 APT	" description="	도로명 : 	경상북도 상주시 낙양동 경상대로 2930-10	, 면적 :	3451 ㎡	" />
            <Marker coordinate = {{latitude:	36.4086	,longitude:	128.1513	}} title= "	명지2차APT	" description="	도로명 :	상주시 낙양동 201 명지2차아파트	, 면적 :	998 ㎡	" />
            <Marker coordinate = {{latitude:	36.4101	,longitude:	128.1562	}} title= "	대림아크로빌	" description="	도로명 : 	경상북도 상주시 낙양동 상서문로 5	, 면적 :	1593.4 ㎡	" />
            <Marker coordinate = {{latitude:	36.411	,longitude:	128.159 	}} title= "	상주시청(의회청사)	" description="	도로명 :	경상북도 상주시 상산로 223	, 면적 :	294.22 ㎡	" />
            <Marker coordinate = {{latitude:	36.4202	,longitude:	128.1588	}} title= " 농협북지점 " description="	도로명 : 경상북도 상주시 무양동 상산로 329, 면적 : 171.9 ㎡ " />
            <Marker coordinate = {{latitude:	36.4213	,longitude:	128.1587	}} title= " 상주예식장 " description="	도로명 : 경상북도 상주시 상산로 341, 면적 : 945 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4182	,longitude:	128.1519	}} title= " 킹스노래연습장 " description=" 도로명 : 경상북도 상주시 무양동 286-8, 면적 : 198 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4162	,longitude:	128.159	  }} title= " 농협서부출장소 " description=" 도로명 : 경상북도 상주시 서문동 123-28, 면적 : 508 ㎡ " />			
            <Marker coordinate = {{latitude:	36.416	,longitude:	128.1589	}} title= " 월드컵노래방 " description=" 도로명 : 경상북도 상주시 서문동 123-30, 면적 : 303 ㎡	" />	
            <Marker coordinate = {{latitude:	36.4154	,longitude:	128.1598	}} title= " 정소아과 " description=" 도로명 : 경상북도 상주시 남성동 7-7, 면적 : 95.87 ㎡ " />
            <Marker coordinate = {{latitude:	36.4153	,longitude:	128.1596	}} title= " 김치과의원 " description=" 도로명 : 경상북도 상주시 남성동 11-31, 면적 : 109.09 ㎡ " />		
            <Marker coordinate = {{latitude:	36.4147	,longitude:	128.1557	}} title= " 상주적십자병원 " description=" 도로명 : 경상북도 상주시 상서문로 53, 면적 : 1256.2 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4135	,longitude:	128.1614	}} title= " 중앙시장	 " description=" 도로명 : 경상북도 상주시 중앙시장길 7-24, 면적 : 1378.52 ㎡ " />					
            <Marker coordinate = {{latitude:	36.411	,longitude:	128.1589	}} title= " 상주시청(시 청사)	 " description=" 도로명 : 경상북도 상주시 상산로 223, 면적 :  327 ㎡ " />						
            <Marker coordinate = {{latitude:	36.4137	,longitude:	128.1597	}} title= " 삼성생명 상주지점	 " description=" 도로명 : 경상북도 상주시 남성동 85-48, 면적 : 839.67 ㎡ " />				
            <Marker coordinate = {{latitude:	36.4127	,longitude:	128.1582	}} title= " 무지개타운 " description=" 도로명 : 경상북도 상주시 남성동 120-5, 면적 : 1570.26 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4124	,longitude:	128.1622	}} title= " 대흥빌딩(국민건강보험공단 상주지사)	 " description=" 도로명 : 경상북도 상주시 남성동 105-12, 면적 : 375 ㎡ " />		
            <Marker coordinate = {{latitude:	36.4127	,longitude:	128.1582	}} title= " 문화관광	 " description=" 도로명 : 경상북도 상주시 남성동 84-2, 면적 : 109.09 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4149	,longitude:	128.159	  }} title= " 국민은행 상주지점	 " description=" 도로명 : 경상북도 상주시 남성동 12-10, 면적 : 370 ㎡ " />
            <Marker coordinate = {{latitude:	36.4133	,longitude:	128.1598	}} title= " 상주시공영유료주차장 " description=" 도로명 : 경상북도 상주시 남성동 87-15, 면적 : 1424 ㎡	 " />			
            <Marker coordinate = {{latitude:	36.4121	,longitude:	128.1583	}} title= " 경상북도립 상주도서관 " description=" 도로명 : 경상북도 상주시 남원동 상서문1길 127, 면적 : 264 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4141	,longitude:	128.1596	}} title= " 농협중앙회 상주시지부 " description=" 도로명 : 경상북도 상주시 남원동 상산로 260 KR, 면적 : 987 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4196	,longitude:	128.1595	}} title= " 상주소방서 " description=" 도로명 : 경상북도 상주시 상산로 322, 면적 : 170 ㎡ " />				
            <Marker coordinate = {{latitude:	36.4171	,longitude:	128.1613	}} title= " 에야디야회관 " description=" 도로명 : 경상북도 상주시 서성동 156-7, 면적 : 119.01 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4203	,longitude:	128.1597	}} title= " 성모병원 " description=" 도로명 : 경상북도 상주시 냉림서성길 7 KR, 면적 : 1502 ㎡ " />
            <Marker coordinate = {{latitude:	36.4259	,longitude:	128.1586	}} title= " KT 상주지사 " description=" 도로명 : 경상북도 상주시 냉림동 373-1, 면적 : 432 ㎡ " />				
            <Marker coordinate = {{latitude:	36.4266	,longitude:	128.1592	}} title= " 부산해물 " description=" 도로명 : 경상북도 상주시 냉림동 128-10, 면적 : 107 ㎡ " />					
            <Marker coordinate = {{latitude:	36.424	,longitude:	128.1622	}} title= " 진주맨션2차 " description=" 도로명 : 경상북도 상주시 계림동 냉림안길 50-7, 면적 : 1834 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4263	,longitude:	128.1595	}} title= " 천일헬스 " description=" 도로명 : 경상북도 상주시 냉림동 122-1, 면적 : 196 ㎡ " />					
            <Marker coordinate = {{latitude:	36.4204	,longitude:	128.1649	}} title= " 부민아파트 " description=" 도로명 : 경상북도 상주시 냉림동 42-1, 면적 : 1390 ㎡ " />				
            <Marker coordinate = {{latitude:	36.4204	,longitude:	128.1649	}} title= " 우방아파트 " description=" 도로명 : 경상북도 상주시 동문동 복룡3길 29, 면적 : 4070 ㎡ " />					
            
            
    
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