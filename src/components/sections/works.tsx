import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Works (){

    const currentPage = useSelector((state: RootState) => state.page.currentPage)

    return (
    <div className={"works page "+(currentPage=='WORKS' ? "active" : "")}>
       Portfolio
    </div>)

}