import React from "react";
import {YMaps, Map, Placemark} from 'react-yandex-maps';

export const MapPage = () => {
    console.log('render TestMapPage');
    return (
        <div>
            TestMapPage

            <YMaps>
                <div>
                    map div

                    <Map
                        defaultState={{center: [55.75, 37.57], zoom: 9}}

                        // долго искал эту хрень)
                        // https://tech.yandex.com/maps/jsapi/doc/2.1/ref/reference/Map-docpage/#field_detail__events
                        onClick={(e: any) => console.log(e.get('coords'))}
                    >

                        {/*https://react-yandex-maps.now.sh/geo-objects/placemark*/}
                        <Placemark geometry={[55.684758, 37.738521]} />
                    </Map>
                </div>

                {/*не обязательно в дивке*/}
                <Map defaultState={{center: [55.75, 37.57], zoom: 9}}/>
            </YMaps>
        </div>
    )
}