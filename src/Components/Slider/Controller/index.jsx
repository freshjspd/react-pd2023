import React, {useState} from 'react'
import Icon from '@mdi/react';
import { mdiFullscreen, mdiFullscreenExit, mdiPlay, mdiSkipNext, mdiSkipPrevious, mdiStop } from '@mdi/js';
import styles from './Controller.module.css';

export default function Controller(props) {
  const {imgsCount, currentImageId, setCurrentImageId , setWidth, setHeigth} = props;
  const [isRun, setIsRun] = useState(false);
  const [idShow, setIdShow] = useState(null);
  const [delay, setDelay] = useState(1000);
  const [isFullScreen, setFullScreen] = useState(false);

  const setMode  = () => {
    if(!isFullScreen){
      setFullScreen(true);
      setWidth('90%');
      setHeigth('90vw');
    } else{
      setFullScreen(false);
      setWidth('50%');
      setHeigth('50%')
    }

  }

  const setPrevSlide = () => {
    currentImageId == 0 ? setCurrentImageId(imgsCount) : setCurrentImageId(currentImageId - 1);
  }

  const setNextSlide = () => {
    currentImageId == imgsCount ? setCurrentImageId(0) : setCurrentImageId(currentImageId + 1);
  }

  const handlerDelay = (event) => {setDelay(event.target.value);}
  const start = () => {
    if(!isRun){
      setIsRun(true);
      setIdShow(setInterval(setNextSlide, delay));
    }
  }
  const stop = () => {
    if(isRun){
      setIsRun(false);
      clearInterval(idShow);
    }
  }
  
  return (
    <div className={styles.contrDisp}>
      <div className={styles.playDisp}>
        <Icon className={styles.iconStyle} onClick={setPrevSlide} path={mdiSkipPrevious} />
        <Icon className={styles.iconStyle} onClick={setNextSlide} path={mdiSkipNext}/>
      </div>
      <div className={styles.showDisp}>
        <span>Slideshow</span>
        <Icon className={styles.iconStyle} onClick={start} path={mdiPlay}/>
        <Icon className={styles.iconStyle} onClick={stop} path={mdiStop}/>
        <span>delay {delay}</span>
        <input value={delay} type="range" min={1000} max={5000} step={100} onChange={handlerDelay}/>
      </div>
      <Icon className={styles.iconStyle} onClick={setMode} path={isFullScreen? mdiFullscreen : mdiFullscreenExit} />
    </div>
  )
}
