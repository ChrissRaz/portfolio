import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Contact (){

    const currentPage = useSelector((state: RootState) => state.page.currentPage)

    return (
    <div className={ "contact page "+ (currentPage=="CONTACTS" ? "active" : "") }>
       Contacts
    </div>)

}