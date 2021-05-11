import React, {ChangeEvent, MouseEventHandler, useEffect, useState} from "react";
import style from "./DoubleRange.module.css";

type DoubleRangePropsType = {
    minRangeLimit?: string
    maxRangeLimit: string
    minValue: string | undefined
    maxValue: string | undefined
    onValuesChange: ([minValue, maxValue]: Array<string | undefined>) => void
}
export const DoubleRange = React.memo(({
                                           minRangeLimit = '0',
                                           maxRangeLimit,
                                           minValue,
                                           maxValue,
                                           onValuesChange
                                       }: DoubleRangePropsType) => {

    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue)

    useEffect(() => {
        if (min === max && max === maxRangeLimit) {
            setMin(state => state && (+state - 1).toString())
        } else if (minValue === maxValue) {
            setMax(state => state && (+state + 1).toString())
        }
    }, [min, max, maxRangeLimit])

    const onRangeValuesChange = () => {
        onValuesChange([min, max])
    }

    return <>
        <div className={style.rangeBlock}>
            {min}
            <span className={style.doubleRange} onMouseUp={onRangeValuesChange}>
                    <input type="range" min={minRangeLimit} value={min} onChange={e => setMin(e.currentTarget.value)}
                           max={maxRangeLimit}/>
                    <input type="range" min={minRangeLimit} value={max} onChange={e => setMax(e.currentTarget.value)}
                           max={maxRangeLimit}/>
                </span>
            {max}
        </div>
    </>
})