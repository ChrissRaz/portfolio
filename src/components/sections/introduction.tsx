import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Introduction (){

    const currentPage = useSelector((state: RootState) => state.page.currentPage)

    return (
    <div className={"intro page "+ (currentPage == "INTRO" ? "active" : "")}>
        
        <div className="text-section">
            <div>HI !</div>
            <div>IT'S CHRISTIAN</div>
            <div>I'M FROM MADAGASCAR</div>
            <div>PASIONATED SOFWTWARE DEVELOPER</div>
        </div>
        <div className="image-section">

        </div>
    </div>)

}