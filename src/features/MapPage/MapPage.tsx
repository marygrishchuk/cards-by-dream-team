import React, {useState} from "react";
import {
    Button,
    FullscreenControl,
    GeolocationControl,
    Map,
    Placemark,
    SearchControl,
    YMaps,
    ZoomControl
} from 'react-yandex-maps';
import style from "./MapPage.module.css";
import {config} from "../../config";
import {RouteCalculator} from "./RouteCalculator";
import {FigurePainter} from "./FigurePainter";


export const MapPage = () => {
    console.log('render TestMapPage')
    const [coordinates, setCoordinates] = useState<Array<number>>([55.684758, 37.738521])
    const [destination1, setDestination1] = useState<string>('Moscow, Russia')
    const [destination2, setDestination2] = useState<string>('Minsk, Belarus')
    const [destinations, setDestinations] = useState<Array<string>>(['Moscow, Russia', 'Minsk, Belarus'])
    const [drawingMode, setDrawingMode] = useState<boolean>(false)
    const onDistanceCheckClick = () => {
        setDestinations([destination1, destination2])
    }

    return (
        <div>
            <YMaps query={{
                apikey: config.MY_API_KEY,
            }}>
                <div className={style.mapPage}>
                    <div>Please turn the Drawing mode on, press and hold an Alt key to draw a Polygon.</div>
                    <Map height={370} width={370}
                         state={{center: [55.75, 37.57], zoom: 9}}
                         onClick={(e: any) => setCoordinates([...e.get('coords')])}
                    >
                        <Placemark geometry={[coordinates[0], coordinates[1]]} modules={['geoObject.addon.hint']}
                                   properties={{
                                       hintContent: `${coordinates[0]}, ${coordinates[1]}`,
                                   }}
                        />
                        <ZoomControl options={{ float: 'right' }} />
                        <GeolocationControl options={{ float: 'left' }} />
                        <FullscreenControl />
                        <SearchControl options={{ float: 'right' }} />
                        <Button
                            options={{maxWidth: 128}}
                            data={{content: `Drawing mode ${drawingMode ? 'on' : 'off'}`}}
                            state={{selected: drawingMode, enabled: drawingMode}}
                            onClick={() => setDrawingMode(!drawingMode)}
                        />
                        {drawingMode && <FigurePainter/>}
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