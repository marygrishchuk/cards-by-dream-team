import React, {useState} from "react";
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import style from "./MapPage.module.css";
import {config} from "../../config";


export const MapPage = () => {
    console.log('render TestMapPage')
    const [coordinates, setCoordinates] = useState([55.684758, 37.738521])


    return (
        <div>
            <YMaps query={{
                apikey: config.MY_API_KEY,
            }}>
                <div className={style.mapPage}>

                    <Map height={370} width={370}
                         state={{center: [55.75, 37.57], zoom: 9}}
                         onClick={(e: any) => {
                             setCoordinates([...e.get('coords')])
                         }}
                    >
                        <Placemark geometry={[coordinates[0], coordinates[1]]} modules={['geoObject.addon.hint']}
                                   properties={{
                                       hintContent: `${coordinates}`,
                                   }}
                        />
                    </Map>
                </div>

            </YMaps>
        </div>
    )
}