import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VwZXJ4aW4iLCJhIjoiY2thNWlqZHd4MDBpODNnb3owMDA2Y3dnYiJ9.-zciQf0emsOdjhIjB2uoNA';


class Map extends React.Component {

    state = {
        lng: -97.194360,
        lat: 49.785080,
        zoom: 14
    };

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        var marker = new mapboxgl.Marker({
            color: "#0066ff",
            }).setLngLat([-97.194360, 49.785080])
            .addTo(map);
    }
    render() {
        return (
                <div ref={el => this.mapContainer = el} className="mapContainer"/>
        )
    }
}

export default Map;