import React, {useState} from "react";
import {Polygon} from 'react-yandex-maps';

export const FigurePainter: React.FC = React.memo(() => {
        const [coordinates, setCoordinates] = useState<number[][]>([])

        const draw = (ref: any) => {
            ref.editor.startDrawing()
            ref.editor.events.add("vertexadd", () => {
                let coords = ref.geometry.getCoordinates()[0]
                setCoordinates(coords.slice(0, -1))
            });

        }

        return <div>
            <Polygon
                modules={["geoObject.addon.editor"]}
                instanceRef={(ref: any) => ref && draw(ref)}
                geometry={[coordinates]}
                options={{
                    editorDrawingCursor: "crosshair",
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