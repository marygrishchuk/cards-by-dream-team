import React, {useEffect, useRef, useState} from "react";
import style from "./Files.module.css";
import {
    CaretRightOutlined,
    DashboardOutlined,
    FullscreenOutlined,
    PauseOutlined,
    PlaySquareOutlined,
    SoundOutlined
} from '@ant-design/icons';
import {Button, Popover, Radio, Slider, Space} from "antd";

const formatTime = (seconds: number | undefined) => {
    if (seconds) {
        let minutes = Math.floor(seconds / 60);
        let minutesString = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        let secondsString = (seconds >= 10) ? seconds : "0" + seconds;
        return minutesString + ":" + secondsString;
    }
}

type VideoPropsType = {
    fileURL: string
}
export const Video: React.FC<VideoPropsType> = React.memo(({fileURL}) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [duration, setDuration] = useState<number | undefined>()
    const [currentTime, setCurrentTime] = useState<number | undefined>()
    const [isPaused, setIsPaused] = useState<boolean>(true)
    const formattedDuration = formatTime(duration)
    const formattedCurrentTime = formatTime(currentTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            videoRef.current && setDuration(videoRef.current && videoRef.current.duration)
            if (videoRef.current && videoRef.current.currentTime === videoRef.current.duration) {
                videoRef.current.currentTime = 0
                videoRef.current.play()
            }
            videoRef.current && setCurrentTime(videoRef.current && videoRef.current.currentTime)
        }, 300)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const volume = (
        <Slider style={{height: '60px', margin: '0', padding: '0'}} vertical
            // value={} min={minRangeLimit} max={maxRangeLimit}
            //     onChange={onSliderValuesChange}
            //     onAfterChange={onMouseUpHandler}
        />
    )
    const rate = (
        <Radio.Group defaultValue="Normal" size="small">
            <Space direction="vertical">
                <Radio.Button style={{padding: '0', margin: '0'}} value="0.25x">0.25x</Radio.Button>
                <Radio.Button style={{padding: '0', margin: '0'}} value="0.5x">0.5x</Radio.Button>
                <Radio.Button style={{padding: '0', margin: '0'}} value="0.75x">0.75x</Radio.Button>
                <Radio.Button style={{padding: '0', margin: '0'}} value="Normal">Normal</Radio.Button>
                <Radio.Button style={{padding: '0', margin: '0'}} value="1.25x">1.25x</Radio.Button>
                <Radio.Button style={{padding: '0', margin: '0'}} value="1.5x">1.5x</Radio.Button>
                <Radio.Button style={{padding: '0', margin: '0'}} value="1.75x">1.75x</Radio.Button>
                <Radio.Button style={{padding: '0', margin: '0'}} value="2x">2x</Radio.Button>
            </Space>
        </Radio.Group>
    )

    const play = () => videoRef.current && videoRef.current.play()
    const pause = () => videoRef.current && videoRef.current.pause()
    const onSliderValueChange = (value: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = value
        }
    }

    return <div className={style.video}>
        <video src={fileURL} controls ref={videoRef}/>
        <div className={style.videoControls}>
            <div className={style.playBtn} onClick={() => {
                isPaused ? play() : pause()
                setIsPaused(!isPaused)
            }}>
                {isPaused
                    ? <PlaySquareOutlined style={{color: '#1890ff', fontSize: '60px'}}/>
                    : null}
            </div>
            <div className={style.controlBtns}>
                <div className={style.playAndTime}>
                    {isPaused
                        ? <Button onClick={() => {
                            play()
                            setIsPaused(false)
                        }} icon={<CaretRightOutlined style={{color: '#1890ff', fontSize: '25px'}}/>}
                                  type={'link'} ghost/>
                        : <Button onClick={() => {
                            pause()
                            setIsPaused(true)
                        }} icon={<PauseOutlined style={{color: '#1890ff', fontSize: '25px'}}/>}
                                  type={'link'} ghost/>}
                    <span>{formattedCurrentTime}/{formattedDuration}</span>
                </div>
                <Slider style={{width: '500px'}} tooltipVisible={false}
                        value={currentTime} min={0} max={duration}
                        onChange={onSliderValueChange}
                />
                <div className={style.settings}>
                    <Popover content={volume} overlayStyle={{width: '35px'}} overlayInnerStyle={{opacity: '0.9'}}>
                        <SoundOutlined style={{color: '#1890ff', fontSize: '20px'}}/>
                    </Popover>
                    <Popover content={rate} overlayStyle={{width: '64px'}} overlayInnerStyle={{opacity: '0.9'}}
                             trigger="click">
                        {/*visible, onVisibleChange*/}
                        <DashboardOutlined style={{color: '#1890ff', fontSize: '20px'}}/>
                    </Popover>
                    <FullscreenOutlined style={{color: '#1890ff', fontSize: '20px'}}/>
                </div>
            </div>

        </div>
    </div>
})