import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Services (){
    
    const currentPage = useSelector((state: RootState) => state.page.currentPage)

    return (
    <div className={"services page "+(currentPage=="SERVICES" ? "active" : "")}>
       Services
    </div>)

}