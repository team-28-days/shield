import React, { PureComponent } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { data } from '../../services/oregonData';

const MapBox = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibGFuY2VvbSIsImEiOiJjanUzMnJ4OW0wajEzNDNxdnh2ZG5ocXR6In0.3EFZBsL6gGw9kFVNbRPmTQ'
});

class Map extends PureComponent {


  render() {
    const listOfMarkers = data.map(obj => {
      return (
        <Feature key={obj.specfic_location} coordinates={obj.coordinates}/>
      );
    });
    console.log(listOfMarkers);
    return (
      <MapBox
        style="mapbox://styles/mapbox/outdoors-v10"
        center={[-122.634903, 45.530107]}
        zoom={[9]}
        containerStyle={{
          height: '100%',
          width: '100%'
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-122.634903, 45.530107]}/>
          {listOfMarkers}
        </Layer>
      </MapBox>
    );
  }
}

export default Map;
