import Marker from 'react-google-maps';

<Marker 
google={this.props.google}
name={'Dattawadi'}
draggable={true}
onDragEnd={ this.onMarkerDragEnd }
position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
>
    
</Marker>