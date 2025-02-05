import React from 'react'
import styles from './KakaoMap.module.scss';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface IKakaoMapProps {
    latitude: number;
    longitude: number;
    setCustomValue?: (id: string, value: number) => void;
    detailPage?: boolean;
}

const KakaoMap = ({
    latitude,
    longitude,
    setCustomValue,
    detailPage = false,
}: IKakaoMapProps) => {

    const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
        // console.log('mouseEvent', mouseEvent);
    
        // detailPage에서는 setCustomValue를 사용하지 않음.
        if (detailPage) return;
    
        // detailPage가 아니면 setCustomValue를 반드시 사용할 것이기 때문에 !를 추가해준다. 위의 인터페이스에서 setCustomValue에 옵션(?)을 선택할 수 있도록 설정했기 때문
        setCustomValue!('latitude', mouseEvent.latLng.getLat());
        setCustomValue!('longitude', mouseEvent.latLng.getLng());
      }

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100%", height: "360px" }}
      onClick={(_, mouseEvent) => handleClick(mouseEvent)}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}>
      </MapMarker>
    </Map>
  )
}

export default KakaoMap