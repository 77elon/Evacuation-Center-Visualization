# Evacuation-Center-Visualization
> 2022년 동북권 공공데이터 활용 챌린지 - 프로토타입 애플리케이션 (2022.10.01 우수상)

![1](https://user-images.githubusercontent.com/88618717/195340661-f91e3ebf-8715-4fd8-bccc-e6ca266b2e96.jpg)  

인명피해 감소를 위한 재난대피소 시각화 애플리케이션 제작

## 구현 환경 
BackEnd: Expo -- 웹 엔진, 안드로이드, iOS 등 범용적인 구현을 위함.  
FrontEnd: React Native -- 간단한 프로토타입 애플리케이션 제작을 위함.   
          Google Maps API -- 애플리케이션 사용자(시민)의 인근 위치의 대피소 표시, 경로 안내, 과거 침수 여부 안내 기능 구현.


![2](https://user-images.githubusercontent.com/88618717/195340666-81cd9b21-6307-483b-9831-a5e359adc603.jpg)  

문제 제시 1. 현대 시대에 가까워질수록 자연 재해로 인한 피해 금액이 증가되고 있다.

![3](https://user-images.githubusercontent.com/88618717/195340668-ebf5c801-77e8-44d5-bece-5e32761016d2.jpg)  

문제 제시 2. 국가에서 지정한 대피소 중 침수되는 대피소가 존재하지만, 이를 알려주는 플랫폼이 존재하지 않는다.
> 정부에서 제공하는 [생활안전지도](https://www.safemap.go.kr/main/smap.do?flag=2), 홍수위험지도(서비스 종료), [도시침수지도](https://safemap.go.kr/main/smap.do?flag=2&coreThemaMap=8)가 운영되고 있다.  
> 그러나 강남, 서초 같은 가치가 높으면서, 저지대 구역은 침수 지역으로 표시되어 있지 않아 사전 대비에 취약하다는 점을 확인하였다. (건물 가치 하락 우려, 임의 수정된 지도)

![4](https://user-images.githubusercontent.com/88618717/195340672-acb83a0e-c18d-4e30-9460-69d47871dc52.jpg)  

![5](https://user-images.githubusercontent.com/88618717/195340676-28e86fd3-24c9-4111-b942-8638b2f33b02.jpg)  

해당 애플리케이션은 인근 위치의 지도를 시민들에게 보여주면서, 인근 대피소, 침수 지역을 일괄적으로 확인할 수 있다.   
또한 대피소 경로 안내 기능까지 구현하였으므로, 더욱 빠르고, 안전하게 대피할 수 있으며, 사전 대비에도 용이한 우리 재난대피소 시각화 애플리케이션을 제안한다.  
