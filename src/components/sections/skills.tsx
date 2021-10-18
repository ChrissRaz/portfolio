import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Skills (){

    const currentPage = useSelector((state: RootState) => state.page.currentPage)

    return (
    <div className={"skills page "+(currentPage=='SKILLS' ? "active" : "")}>
       Compétences
    </div>)

}