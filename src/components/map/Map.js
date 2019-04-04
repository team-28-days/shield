import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
 
const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibGFuY2VvbSIsImEiOiJjanUzMG00Y2kwZXI5NDRvNm1jYnd3a3dtIn0.vDr7pAjr-k3raESs6trfrw'
});
export default class MapComp extends React.PureComponent {
  render() {
    return (
    // in render()
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
      </Map>
    );
  }
}
   
// // in render()
// <Map
//   style="mapbox://styles/mapbox/streets-v9"
//   containerStyle={{
//     height: '100vh',
//     width: '100vw'
//   }}>
//   <Layer
//     type="symbol"
//     id="marker"
//     layout={{ 'icon-image': 'marker-15' }}>
//     <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
//   </Layer>
// </Map>;

