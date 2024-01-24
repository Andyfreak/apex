import * as React from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import S from "./PanePanel.css";
import {useEffect, useState} from "react";


export const PanePanel = ({state, setState, element}) => {
    const windowInnerWidth = window.innerWidth - 50;





const extensionInnerPanelStyles = {
    title:{
    letterSpacing: '5px',
    textTransform: 'uppercase',
    fontFamily: 'Apexnewweb,sans-serif',
    width: '100%',
    marginBottom: '40px',
    padding: '10px 20px',
    border: '1px solid hsla(0,0%,100%,.5)',
    color: '#fff',
    fontSize: '30px',
    lineHeight: '34px',
    fontWeight: '300',
    textAlign: 'center',
    },
    subheader:{
    fontFamily: 'Apexnewweb book,sans-serif',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '400',
    marginTop: '10px',
    marginBottom: '10px',
    lineHeight: '24px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    },
    divider:{
        width: '60%',
        height: '1px',
        background: '#fff',
    },
    description:{
    marginTop: '20px',
    marginBottom: '30px',
    fontFamily: 'Nunito,sans-serif',
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '0',
    textTransform: 'none',
    color:'#fff',
    }
}
 return(
     <SlidingPane
         closeIcon=''
         isOpen={state.isPaneOpenLeft}
         from="left"
         width = {`${windowInnerWidth > 400 ? '400': windowInnerWidth}px`}
         onRequestClose={() => setState({ isPaneOpenLeft: false })}>
         <div>
             <h2 style={extensionInnerPanelStyles.title}>{element.title}</h2>
             <h4 style={extensionInnerPanelStyles.subheader}>OVERVIEW</h4>
             <div style={extensionInnerPanelStyles.divider}></div>
             <p style={extensionInnerPanelStyles.description}>{element.description}</p>
             <h4 style={extensionInnerPanelStyles.subheader}>PROJECT INFO</h4>
             <div style={extensionInnerPanelStyles.divider}></div>


             <p style={extensionInnerPanelStyles.description}>Location:  <strong>{element.locationCity ? `${element.locationCity}, ${element.locationState}` : 'Not indicated'}</strong></p>
             <p style={extensionInnerPanelStyles.description}>Address:  <strong>{element.address ? element.address : 'Not indicated'}</strong></p>
             <p style={extensionInnerPanelStyles.description}>Square:  <strong>{element.sf ? `${element.sf} sf` : 'Not indicated'}</strong></p>

             <p style={extensionInnerPanelStyles.description}>Owner:  <strong>{element.owner ? element.owner : 'Not indicated'}</strong></p>
             <p style={extensionInnerPanelStyles.description}>Architect:  <strong>{element.architect ? element.architect : 'Not indicated'}</strong></p>
             <p style={extensionInnerPanelStyles.description}>Delivery system:  <strong>{element.deliverySystem ? element.deliverySystem : 'Not indicated'}</strong></p>


         </div>
     </SlidingPane>
 )
}

