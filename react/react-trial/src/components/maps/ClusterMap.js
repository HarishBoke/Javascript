import React, {Fragment} from "react"

import { compose, withProps, withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const fetch = require("isomorphic-fetch");


const MapWithAMarkerClusterer = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD4ebDP2zxcMARJJAvjIXBvryp7Wk77sOY&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
      onMarkerClustererClick: () => (markerClusterer) => {
        const clickedMarkers = markerClusterer.getMarkers()
        console.log(`Current clicked markers length: ${clickedMarkers.length}`)
        console.log(clickedMarkers)
      },
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
    >
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers.map(marker => (
          <Marker
            key={marker.photo_id}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );
  
  export default class ClusterMap extends React.PureComponent {
    componentWillMount() {
      this.setState({ markers: [] })
    }
  
    componentDidMount() {
      const url = [
        // Length issue
        `https://gist.githubusercontent.com`,
        `/farrrr/dfda7dd7fccfec5474d3`,
        `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
      ].join("")
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({ markers: data.photos });
        });
    }
  
    render() {
      return (
        <Fragment>
           <h1>Maps</h1>
          <MapWithAMarkerClusterer markers={this.state.markers} />
        </Fragment>        
      )
    }
  }
  
