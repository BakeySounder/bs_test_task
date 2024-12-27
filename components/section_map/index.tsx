"use client"
// import { YMapLocation } from "@yandex/ymaps3-types/imperative/YMap";
// import { Placemark, YMaps } from "react-yandex-maps";
import { useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { CN } from '@/utils';
// import { YMap, YMapComponentsProvider, YMapDefaultFeaturesLayer, YMapDefaultMarker, YMapDefaultSchemeLayer } from "ymap3-components"

interface MapSectionProps extends React.HTMLAttributes<HTMLDivElement> {

}
// const mapState = { center: [55.76, 37.64], zoom: 10 };

export default function MapSection(porps: MapSectionProps) {
  const mapRef = useRef(null)
  console.log("123");
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  return <div className={CN("container", porps.className)}>
    <YMaps>
      <Map height={"480px"} defaultState={defaultState}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  </div>
}