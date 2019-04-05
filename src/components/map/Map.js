import React, { PureComponent } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { data } from '../../services/oregonData';
import styles from '../home/Home.css';

const MapBox = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibGFuY2VvbSIsImEiOiJjanUzMnJ4OW0wajEzNDNxdnh2ZG5ocXR6In0.3EFZBsL6gGw9kFVNbRPmTQ'
});

class Map extends PureComponent {

  state = {
    selected: 'one'
  };

   handleChange = ({ target }) => {
     this.setState({ selected: target.value }, () => {
     });
   };
   isSelected = (value) => {
     return this.state.selected === value;
   }

   render() {
     let layerOne = [];
     let layerTwo = [];
     let layerThree = [];
     data.map((location, i) => {
       const { count } = location;
       if(count === '1') {
         layerOne.push(<Feature key={i} coordinates={[location.coordinates[1], location.coordinates[0]]}/>);
       }
       else if(count <= 2) {
         layerTwo.push(<Feature key={i} coordinates={[location.coordinates[1], location.coordinates[0]]}/>);
       }
       else {
         layerThree.push(<Feature key={i} coordinates={[location.coordinates[1], location.coordinates[0]]}/>);
       }
     });
     return (
      <>
      <form className={styles.form}>
        <label> SELECT FONT
          <select name="one" onChange={this.handleChange}>
            <option key='one' value='one'>Some Risk</option>
            <option key='two' value='two'>Medium Risk</option>
            <option key='three' value='three'>High Risk</option>
          </select>
        </label>
      </form>
      <MapBox
        style="mapbox://styles/mapbox/outdoors-v10"
        center={[-122.634903, 45.530107]}
        zoom={[8]}
        containerStyle={{
          height: 'calc(100vh - 130px)',
          width: '0'
        }}>
        {this.isSelected('one') && <Layer
          layout={{
            visibility: 'visible'
          }}
          type="circle"
          id="marker"
          paint={{
            'circle-color': '#94dd2b',
            'circle-stroke-width': 3,
            'circle-stroke-color': '#559f1d',
            'circle-stroke-opacity': 1
          }}>
          {layerOne}
        </Layer>}
        {this.isSelected('three') &&  <Layer
          layout={{
            visibility: 'visible'
          }}
          type="circle"
          id="marker"
          paint={{
            'circle-color': '#ff0000',
            'circle-stroke-width': 7,
            'circle-stroke-color': '#ff0000',
            'circle-stroke-opacity': 1
          }}>
          {layerThree}
        </Layer>}
        {this.isSelected('two') && <Layer
          layout={{
            visibility: 'visible'
          }}
          type="circle"
          id="marker"
          paint={{
            'circle-color': '#f08b25',
            'circle-stroke-width': 5,
            'circle-stroke-color': '#f08b25',
            'circle-stroke-opacity': 1
          }}>
          {layerTwo}
        </Layer>}
      </MapBox>
    </>
     );
   }
}

export default Map;
