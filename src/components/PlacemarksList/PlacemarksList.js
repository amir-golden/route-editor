import React from 'react';
import {Placemark} from 'react-yandex-maps';

const PlacemarksList = (props) => {
  const {placemarks, onPlacemarkDrag} = props;
  return placemarks.map((placemark) => {
    const {id, ...itemProps} = placemark;
    return (
      <Placemark
        key={id}
        geometry={
          itemProps.coordinates
        }
        properties={ {balloonContent: itemProps.name} }
        modules={['geoObject.addon.balloon']}
        options={{
          draggable: 'true'
        }}
        onDrag={ (event) => onPlacemarkDrag(event, id) }
      />
    );
  });
};

export default PlacemarksList;
