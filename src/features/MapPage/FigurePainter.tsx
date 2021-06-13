import React, {useEffect, useState} from "react";
import {Polygon} from 'react-yandex-maps';

type PropsType = {
    event: any
}

export const FigurePainter: React.FC<PropsType> = React.memo(({event}) => {
        console.log('FigurePainter')

        const [coordinates, setCoordinates] = useState<number[][]>([])

        useEffect(() => {
            if (event && event.get('type') === 'click' && event.get('altKey')) {
                setCoordinates(coordinates => {
                    return [...coordinates, event.get('coords')]
                })
            }

        }, [event])

        return <div>
            <Polygon
                geometry={[coordinates]}
                options={{
                    fillColor: '#ff0000',
                    strokeColor: '#ff0000',
                    strokeOpacity: 0.6,
                    strokeWidth: 6,
                    fillOpacity: 0.3,
                }}
            />
        </div>
    }
)