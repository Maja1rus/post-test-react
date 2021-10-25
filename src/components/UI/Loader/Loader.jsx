import React from 'react';
import style from './Loader.module.css'

const Loader = () => {
    return (
        <div className={style.loader__wrapper}>
        {/* <div className={style.loader}></div> */}
            <div className={style.lds__roller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader
