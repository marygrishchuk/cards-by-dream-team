import React, {useState} from "react";
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import style from "./MapPage.module.css";
import {config} from "../../config";
import {RouteCalculator} from "./RouteCalculator";


export const MapPage = () => {
    console.log('render TestMapPage')
    const [coordinates, setCoordinates] = useState([55.684758, 37.738521])
    const [destination1, setDestination1] = useState('Moscow, Russia')
    const [destination2, setDestination2] = useState('Minsk, Belarus')
    const [destinations, setDestinations] = useState(['Moscow, Russia', 'Minsk, Belarus'])
    const onDistanceCheckClick = () => {
        setDestinations([destination1, destination2])
    }

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
                                       hintContent: `${coordinates[0]}, ${coordinates[1]}`,
                                   }}
                        />
                    </Map>
                    <div>
                        {/*пока пробный подсчет расстояния между двумя точками, используя Yandex API через HOC withYMaps:*/}
                        Route calculation:
                        <div>
                            <input value={destination1} onChange={e => setDestination1(e.currentTarget.value)}/>{' '}
                            <input value={destination2} onChange={e => setDestination2(e.currentTarget.value)}/>
                            <button onClick={onDistanceCheckClick}>Check distance</button>
                        </div>
                        <RouteCalculator route={destinations}/>
                    </div>
                </div>
            </YMaps>
        </div>
    )
}