import React, {useCallback, useEffect, useState} from "react";
import {AnyObject, Placemark, Polygon, withYMaps, YMapsApi} from 'react-yandex-maps';
import {addAreaCalculationModule} from "../../utils/addAreaCalculationModule";

type PropsType = {
    ymaps?: YMapsApi
    stopDrawing: boolean
}

const Painter: React.FC<PropsType> = React.memo(({ymaps, stopDrawing}) => {
        const [coordinates, setCoordinates] = useState<number[][]>([])
        const [area, setArea] = useState<string>('')
        const [polygonCenter, setPolygonCenter] = useState<number[]>([])

        useEffect(() => {
            ymaps && addAreaCalculationModule(ymaps)
        }, [])

        const calculatePolygonCenterAndArea = useCallback((ref: AnyObject) => {
            ymaps && ymaps.ready(['util.calculateArea']).then(() => {
                let newArea = Math.round(ymaps.util.calculateArea(ref))
                if (newArea <= 1e6) setArea(`${newArea} m²`)
                else setArea(`${(newArea / 1e6).toFixed(3)} km²`)
            }).catch((error: string) => console.log(error))
            ymaps && setPolygonCenter(ymaps.util.bounds.getCenter(ref.geometry.getBounds()))
        }, [ymaps])

        const onVertexChange = useCallback((ref: AnyObject) => {
            let coords = ref.geometry.getCoordinates()[0]
            setCoordinates(coords.slice(0, -1))
            calculatePolygonCenterAndArea(ref)
        }, [calculatePolygonCenterAndArea])

        const draw = useCallback((ref: AnyObject) => {
            ref.editor.startDrawing()
            ref.editor.events.add("vertexadd", () => {
                onVertexChange(ref)
            })
            ref.editor.events.add("vertexdragend", () => {
                onVertexChange(ref)
            })
            stopDrawing && ref.editor.stopDrawing()
        }, [onVertexChange, stopDrawing])

        return <div>
            <Polygon
                modules={["geoObject.addon.editor", "geoObject.addon.hint"]}
                instanceRef={(ref: AnyObject) => ref && draw(ref)}
                geometry={[coordinates]}
                options={{
                    editorDrawingCursor: "crosshair",
                    fillColor: '#ff0000',
                    strokeColor: '#ff0000',
                    strokeOpacity: 0.6,
                    strokeWidth: 6,
                    fillOpacity: 0.3,
                }}
                properties={{
                    hintContent: `${area}`,
                }}
            />
            <Placemark geometry={polygonCenter}
                       properties={{
                           iconCaption: `${area}`,
                       }}
                       options={{
                           preset: 'islands#greenDotIconWithCaption'
                       }}
            />
        </div>
    }
)

//оборачиваем LengthCalculator в HOC withYMaps:
export const FigurePainter = withYMaps(Painter, true, ['meta', 'util.bounds'])