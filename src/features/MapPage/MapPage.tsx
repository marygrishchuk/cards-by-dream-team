import React, {useState} from "react";
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import style from "./MapPage.module.css";
import {config} from "../../config";


export const MapPage = () => {
    console.log('render TestMapPage')
    const [coordinates, setCoordinates] = useState([55.684758, 37.738521])
    // const [position, setPosition] = useState<Array<number>>([])


    return (
        <div>
            <YMaps query={{
                apikey: config.MY_API_KEY,
                ns: 'use-load-option',
                load:
                    'map.Converter, geoObject.addon.hint',
            }}>
                <div className={style.mapPage}>

                    <Map height={370} width={370}
                         state={{center: [55.75, 37.57], zoom: 9}}
                         onClick={(e: any) => setCoordinates([...e.get('coords')])}
                         // modules={['map.Converter']}
                    >
                        <Placemark geometry={[coordinates[0], coordinates[1]]}
                                   options={{draggable: 'true'}}
                                   properties={{
                                       hintContent: `${coordinates}`,
                                   }}

                                   onDragEnd={() => {
                                       // setPosition(e.get('position'))
                                   }}
                        />
                    </Map>
                </div>

            </YMaps>
        </div>
    )
}