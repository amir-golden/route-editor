import React from "react";
import './MyMap.css';
import {YMaps, Map, Polyline, ZoomControl} from 'react-yandex-maps';
import PlacemarksList from '../PlacemarksList';

const MyMap = (props) => {

  const polylineOptions = {
    balloonCloseButton: false,
    strokeColor: '#7c3113',
    strokeWidth: 4,
    strokeOpacity: 0.5,
  };
  const {defaultState, points, onInstanceUpdate, onPlacemarkDrag} = props;
  const pointsCoordinates = points.map(point => point.coordinates);

  return <div className='my-map'>
    <YMaps>
      <Map
        width='100%'
        height='500px'
        defaultState={defaultState}
        instanceRef={onInstanceUpdate}
      >
        <PlacemarksList
          placemarks={points}
          onPlacemarkDrag={onPlacemarkDrag}
        />
        <Polyline
          geometry={pointsCoordinates}
          options={polylineOptions}
        />
        <ZoomControl/>
      </Map>
    </YMaps>
  </div>
};

export default MyMap;