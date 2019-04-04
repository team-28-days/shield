import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { getMeaslesOutbreak } from '../../services/fetchOregonData';

const MapBox = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibGFuY2VvbSIsImEiOiJjanUzMnJ4OW0wajEzNDNxdnh2ZG5ocXR6In0.3EFZBsL6gGw9kFVNbRPmTQ'
});


class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    locations: []
  }

  fetchData = () => {
    getMeaslesOutbreak(response => {
      this.setState({
        locations: response
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
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
        </Layer>
      </MapBox>
    );
  }
}

export default Map;
