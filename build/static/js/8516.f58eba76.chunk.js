"use strict";(self.webpackChunkhyper_react_ts=self.webpackChunkhyper_react_ts||[]).push([[8516],{78516:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var s=l(55615),o=l(9140),r=l(89743),i=l(2677),a=l(7631),n=l(72791);var y=l(80184),f=function(e){var t=e.google;return(0,y.jsx)(o.Z,{children:(0,y.jsxs)(o.Z.Body,{children:[(0,y.jsx)("h4",{className:"header-title mb-3",children:"Basic Google Map"}),(0,y.jsx)("div",{className:"gmaps",style:{position:"relative",overflow:"hidden"},children:(0,y.jsx)(a.Map,{google:t,zoom:14,initialCenter:{lat:21.569874,lng:71.5893798},style:{width:"100%",height:"100%",position:"relative"},zoomControlOptions:{position:t.maps.ControlPosition.LEFT_TOP}})})]})})},p=function(e){var t=e.google;return(0,y.jsx)(o.Z,{children:(0,y.jsxs)(o.Z.Body,{children:[(0,y.jsx)("h4",{className:"header-title mb-3",children:"Google Map with Marker"}),(0,y.jsx)("div",{className:"gmaps",style:{position:"relative",overflow:"hidden"},children:(0,y.jsx)(a.Map,{google:t,zoom:18,initialCenter:{lat:21.569874,lng:71.5893798},style:{width:"100%",height:"100%",position:"relative"},zoomControlOptions:{position:t.maps.ControlPosition.LEFT_TOP},children:(0,y.jsx)(a.Marker,{title:"This is sweet home.",name:"Home sweet home!",position:{lat:21.569874,lng:71.5893798}})})})]})})},g=function(e){var t=e.google,l=function(){var e=(0,n.useRef)();return{setMapRef:function(t){e=t},activateStreetView:function(t){if(e){var l=e.map.getStreetView();l.setPov({heading:34,pitch:10}),l.setPosition(t),l.setVisible(!0)}}}}(),s=l.setMapRef,r=l.activateStreetView;return(0,y.jsx)(o.Z,{children:(0,y.jsxs)(o.Z.Body,{children:[(0,y.jsx)("h4",{className:"header-title mb-3",children:"Street View Panoramas Google Map"}),(0,y.jsx)("div",{id:"panorama",className:"gmaps",style:{position:"relative",overflow:"hidden"},children:(0,y.jsx)(a.Map,{google:t,ref:function(e){return s(e)},zoom:14,initialCenter:{lat:40.7295174,lng:-73.9986496},style:{width:"100%",height:"100%",position:"relative"},onReady:function(){r({lat:40.7295174,lng:-73.9986496})}})})]})})},c=function(e){var t=e.google;return(0,y.jsx)(o.Z,{children:(0,y.jsxs)(o.Z.Body,{children:[(0,y.jsx)("h4",{className:"header-title mb-3",children:"Ultra Light with Labels"}),(0,y.jsx)("div",{className:"gmaps",style:{position:"relative",overflow:"hidden"},children:(0,y.jsx)(a.Map,{google:t,zoom:14,initialCenter:{lat:40.7295174,lng:-73.9986496},style:{width:"100%",height:"100%",position:"relative"},styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}],zoomControlOptions:{position:t.maps.ControlPosition.LEFT_TOP}})})]})})},h=function(e){var t=e.google;return(0,y.jsx)(o.Z,{children:(0,y.jsxs)(o.Z.Body,{children:[(0,y.jsx)("h4",{className:"header-title mb-3",children:"Dark"}),(0,y.jsx)("div",{className:"gmaps",style:{position:"relative",overflow:"hidden"},children:(0,y.jsx)(a.Map,{google:t,zoom:14,initialCenter:{lat:40.7295174,lng:-73.9986496},style:{width:"100%",height:"100%",position:"relative"},styles:[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#c4c4c4"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#e5c163"},{lightness:"0"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#e5c163"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575757"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}],zoomControlOptions:{position:t.maps.ControlPosition.LEFT_TOP}})})]})})},m=(0,a.GoogleApiWrapper)({apiKey:"AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA"})((function(e){var t=e.google;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s.V1,{breadCrumbItems:[{label:"Maps",path:"/ui/googlemaps"},{label:"Google Maps",path:"/ui/googlemaps",active:!0}],title:"Google Maps"}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(i.Z,{xl:6,children:(0,y.jsx)(f,{google:t})}),(0,y.jsx)(i.Z,{xl:6,children:(0,y.jsx)(p,{google:t})})]}),(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(i.Z,{xl:6,children:(0,y.jsx)(g,{google:t})}),(0,y.jsx)(i.Z,{xl:6,children:(0,y.jsx)(c,{google:t})})]}),(0,y.jsx)(r.Z,{children:(0,y.jsx)(i.Z,{xl:6,children:(0,y.jsx)(h,{google:t})})})]})]})}))}}]);
//# sourceMappingURL=8516.f58eba76.chunk.js.map