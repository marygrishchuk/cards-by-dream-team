import React, {useState} from "react";
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import style from "./MapPage.module.css";


export const MapPage = () => {
    console.log('render TestMapPage')
    const [coordinates, setCoordinates] = useState([55.684758, 37.738521])
    const [position, setPosition] = useState<Array<number>>([])


    return (
        <div>
            <YMaps query={{
                ns: 'use-load-option',
                load:
                    'map.Converter, geoObject.addon.hint',
            }}>
                <div className={style.mapPage}>

                    <Map height={370} width={370}
                         state={{center: [55.75, 37.57], zoom: 9}}
                         onClick={(e: any) => setCoordinates([...e.get('coords')])}
                         properties={{
                             converter: (e: any) => setCoordinates(e.pageToGlobal(position)),
                         }}
                    >
                        <Placemark geometry={[coordinates[0], coordinates[1]]}
                                   options={{draggable: 'true'}}
                                   properties={{
                                       hintContent: `${coordinates}`,
                                   }}

                                   onDragEnd={(e: any) => {
                                       setPosition(e.get('position'))
                                   }}
                        />
                    </Map>
                </div>

            </YMaps>
        </div>
    )
}