import React, { useState, useEffect } from "react";
import './Home.css';
import phongbi from '../../assets/images/phongbi.png';
import bamvaoday from '../../assets/images/bamvaoday.png';
import letterOpen from '../../assets/images/letterOpen.png';
import letter from '../../assets/images/letter.png';
import hinhgiadinhembe from '../../assets/images/hinhgiadinhembe.png';


const Home = () => {
    const [show, setShow] = useState(false);
    const [openLetter, setOpenLetter] = useState(false);
    const [showLetter, setShowLetter] = useState(false);

    const handleOpenLetter = () => {
        setOpenLetter(true);
    }

    useEffect(() => {
        if (openLetter) {
            setShowLetter(true);
        }
    }, [openLetter])
    return (
        <>
            {
                !show &&
                <div className="wrapper">
                    <div class="container">
                        <button onClick={() => setShow(true)} class="btn">
                            <span>Bấm vào đây</span>
                        </button>
                    </div>
                </div>
            }
            {
                show &&
                <div className="wrapper2">
                    <img className="smallImg img1" src={hinhgiadinhembe} alt=""></img>
                    <div class="phongbi" onClick={() => handleOpenLetter()}>
                        {
                            !openLetter ?
                                <img src={phongbi}></img> :
                                <div className="letterOpen">  

                                    <img className="" src={letterOpen}>
                                    </img>
                                        <img src={letter} class="letter img-animation"></img>
                                </div>
                        }
                        {!openLetter && <img class="bamvaoday" src={bamvaoday}></img>}
                    </div>
                </div>
            }
        </>
    );
}

export default Home