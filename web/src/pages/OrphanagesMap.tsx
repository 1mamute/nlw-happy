import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/orphanages-map.css';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/Map-Marker.svg';
import mapIcon from '../utils/mapIcon';

export default function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>

          <p>Muitas crianças estão esperando a sua visita {':)'}</p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      <Map
        center={[-22.7146356, -47.6218322]}
        zoom={13.5}
        style={{ width: '100%', height: '100%' }}
      >
        <Marker position={[-22.7146356, -47.6218322]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar dos velhinhos
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}
