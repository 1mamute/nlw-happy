import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import mapMarker from '../images/MapMarker.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3',
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

const OrphanagesMap = (): JSX.Element => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: -22.7146356,
        longitude: -47.6218322,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}>
      <Marker
        icon={mapMarker}
        calloutAnchor={{
          x: 2.05,
          y: 0.7,
        }}
        coordinate={{
          latitude: -22.7146356,
          longitude: -47.6218322,
        }}>
        <Callout
          tooltip
          onPress={() => {
            // eslint-disable-next-line no-alert
            alert('clicado');
          }}>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Lar do gabriel</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>

    <View style={styles.footer}>
      <Text style={styles.footerText}>2 orfanatos encontrados</Text>

      <TouchableOpacity
        style={styles.createOrphanageButton}
        onPress={() => {
          // eslint-disable-next-line no-alert
          alert('clicou aqui');
        }}>
        <Feather name="plus" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  </View>
);

export default OrphanagesMap;
