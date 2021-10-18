import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../features/pageginationSlice';
import { RootState } from '../../store/store';


export default function Menu (){
    
    const currentPage = useSelector((state: RootState) => state.page.currentPage)

    const dispatch = useDispatch()

    return (
    <div className="menu">
        <div className="container-mi">
            <div className={"menu-item "+(currentPage=="INTRO" ? "active" : null)} onClick={ () => dispatch(navigate("INTRO"))}>INTRO</div>
            <div className={"menu-item "+(currentPage=="SKILLS" ? "active" : null)}  onClick={ () => dispatch(navigate("SKILLS"))} >SKILLS</div>
            <div className={"menu-item "+(currentPage=="SERVICES" ? "active" : null)}  onClick={ () => dispatch(navigate('SERVICES'))} >SERVICES</div>
            <div className={"menu-item "+(currentPage=="WORKS" ? "active" : null)}  onClick={ () => dispatch(navigate('WORKS'))}>WORKS</div>
            <div className={"menu-item "+(currentPage=="CONTACTS" ? "active" : null)} onClick={ () => dispatch(navigate("CONTACTS"))}>CONTACTS</div>
        </div>
    </div>)

}
