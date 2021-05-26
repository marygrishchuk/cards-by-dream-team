import React from "react";
import style from "./Files.module.css";
import {
    CaretRightOutlined,
    DashboardOutlined,
    FullscreenOutlined,
    PlaySquareOutlined,
    SoundOutlined
} from '@ant-design/icons';
import {Popover, Radio, Slider, Space} from "antd";

type VideoPropsType = {
    fileURL: string
}
export const Video: React.FC<VideoPropsType> = React.memo(({fileURL}) => {
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

    return <div className={style.video}>
        <video src={fileURL} controls/>
        <div className={style.videoControls}>
            <div className={style.playBtn}>
                <PlaySquareOutlined style={{color: '#1890ff', fontSize: '60px'}}/>
            </div>
            <div className={style.controlBtns}>
                <div className={style.timing}>
                    <CaretRightOutlined style={{color: '#1890ff', fontSize: '25px'}}/>
                    {/*<PauseOutlined style={{color: '#1890ff', fontSize: '25px'}}/>*/}
                    <span>00:00/00:00</span>
                </div>
                <Slider style={{width: '500px'}} tooltipVisible={false}
                    // value={} min={minRangeLimit} max={maxRangeLimit}
                    //     onChange={onSliderValuesChange}
                    //     onAfterChange={onMouseUpHandler}
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