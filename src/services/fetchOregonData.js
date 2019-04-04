import { data } from '../services/oregonData';

const encodedAddress = () => {
  return data.map(obj => {
    if(obj.address) {
      return obj.address.replace(/ /g, '%20');
    } else return false;
  });
};

export const getMeaslesOutbreak = () => {
  const addresses = encodedAddress();
  console.log(addresses);
  return addresses.map(address => {
    return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?proximity=-122.634903,45.530107&country=us&access_token=pk.eyJ1IjoibGFuY2VvbSIsImEiOiJjanUzMnJ4OW0wajEzNDNxdnh2ZG5ocXR6In0.3EFZBsL6gGw9kFVNbRPmTQ`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        console.log('points', res.features[0].geometry.coordinates);
      });
  });
};
