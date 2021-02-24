

import React, { Component } from 'react'
import {NavLink } from 'react-router-dom';

import './OrderConfirmation.css'


export default class OrderConfirmation extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="myContainerConfirm">
               
               <table border="0" cellPadding="0" cellSpacing="0" width="100%" >
                    <tr>
                        <td align="center" >
                            <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"800px",marginTop:"50px"}}>
                                <tr>
                                    <td align="center" valign="top" style={{fontSize:"0", padding: "35px"}} bgcolor="#9B1750">
                                        <div style={{display:"inline-block", maxWidth:"50%",minWidth: "100px", verticalAlign:"top", width:"100%"}}>
                                            <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"300px"}}>
                                                <tr>
                                                    <td align="left" valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "36px", fontWeight: "800", lineHeight: "48px"}} className="mobile-center">
                                                        <h1 style={{fontSize: "30px", fontWeight: "800", margin: "0", color: "#ffffff"}}>shirley akerman</h1>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div style={{display:"inline-block", maxWidth:"50%", minWidth:"100px", verticalAlign:"top", width:"100%"}} className="mobile-hide">
                                            <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"300px",float:"right"}}>
                                                <tr>
                                                    <td align="right" valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "48px", fontWeight: "400", lineHeight: "48px"}}>
                                                        <table cellSpacing="0" cellPadding="0" border="0" align="right">
                                                            <tr >
                                                            <td style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize:" 18px", fontWeight: "400", lineHeight: "24px"}}> <NavLink to="/Catalog" href="#" target="_blank" style={{color: "#ffffff", textDecoration: "none"}}><img src="https://img.icons8.com/color/48/000000/small-business.png" width="40" height="33" style={{display: "block", border: "0px",marginRight:"20px"}} /></NavLink> </td>
                                                                <td style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "18px", fontWeight: "400"}}>
                                                                    <p style={{fontSize: "24px", fontWeight: "600", margin: "0", color: "#ffffff"}}><NavLink to="/Catalog" href="#" target="_blank" style={{color: "#ffffff", textDecoration: "none"}}>לחנות &nbsp;</NavLink></p>
                                                                </td>
                                                                
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style={{padding: "35px 35px 20px 35px", backgroundColor: "#ffffff"}} bgcolor="#ffffff">
                                        <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"600px"}}>
                                            <tr>
                                                <td align="center" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", paddingTop: "25px"}}> <img src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png" width="125" height="120" style={{display: "block", border: "0px"}} /><br/>
                                                    <h2 style={{fontSize: "30px", fontWeight: "800", lineHeight: "36px", color: "#333333", margin: "0"}}> ההזמנה בוצעה בהצלחה! </h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", paddingTop: "10px"}}>
                                                    <p style={{fontSize: "19px", fontWeight: "400", lineHeight: "24px", color: "#777777"}}> ההזמנה הגיע אלינו בהצלחה,ואלו הם פרטיה. תודה לך על הקניה </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style={{paddingTop: "20px"}}>
                                                    <table cellSpacing="0" cellPadding="0" border="0" width="100%" style={{direction:"rtl"}}>
                                                        <tr>
                                                            <td width="75%" align="right" bgcolor="#eeeeee" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "22px", fontWeight: "800", lineHeight: "24px", padding: "10px"}}> מספר הזמנה  </td>
                                                            <td width="25%" align="right" bgcolor="#eeeeee" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "20px", fontWeight: "800", lineHeight: "24px", padding: "10px"}}> 2345678 </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="75%" align="right" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding:"15px 10px 5px 10px"}}>מספר פריטים ({this.props.numberItem}) </td>
                                                            <td width="25%" align="right" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "15px 10px 5px 10px"}}> {this.props.sumItem}₪ </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="75%" align="right" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "5px 10px"}}> משלוח </td>
                                                            <td width="25%" align="right" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "5px 10px"}}> {this.props.shipping}₪ </td>
                                                        </tr>
                                                        {(this.props.discountBool)&& 
                                                        <tr>
                                                            <td width="75%" align="right" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "5px 10px"}}>  הנחה: </td>
                                                            <td width="25%" align="right" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "5px 10px",color:"green"}}> {this.props.discount}₪- </td>
                                                        </tr>}
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style={{paddingTop: "20px"}}>
                                                    <table cellSpacing="0" cellPadding="0" border="0" width="100%" style={{direction:"rtl"}}>
                                                        <tr>
                                                            <td width="75%" align="right" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "800", lineHeight: "24px", padding: "10px", borderTop: "3px solid #eeeeee", borderBottom: "3px solid #eeeeee"}}> סה"כ </td>
                                                            <td width="25%" align="right" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "800", lineHeight: "24px", padding: "10px", borderTop: "3px solid #eeeeee", borderBottom: "3px solid #eeeeee"}}> {this.props.total}₪ </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" height="100%" valign="top" width="100%" style={{padding:" 0 35px 35px 35px", backgroundColor: "#ffffff"}} bgcolor="#ffffff">
                                        <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"660px",direction:"rtl"}}>
                                            <tr>
                                                <td align="center" valign="top" style={{fontSize:"0"}}>
                                                    <div style={{display:"inline-block", maxWidth:"50%", minWidth:"240px", verticalAlign:"top", width:"100%"}}>
                                                        <table align="right" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"300px"}}>
                                                            <tr>
                                                                <td align="right" valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "24px"}}>
                                                                    <p style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "22px", fontWeight: "800", lineHeight: "3px", padding: "10px 0px"}}>פרטי משלוח:</p>
                                                                    <p>{this.props.userDetail.city} , {this.props.userDetail.address} <br/>{this.props.userDetail.houseType}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div style={{display:"inline-block", maxWidth:"50%", minWidth:"240px", verticalAlign:"top", width:"100%"}}>
                                                        <table align="right" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"300px"}}>
                                                            <tr>
                                                                <td align="right" valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "24px"}}>
                                                                    <p style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "22px", fontWeight: "800", lineHeight: "3px", padding: "10px 0px"}}>פרטי המזמין:</p>
                                                                    <p>{this.props.userDetail.fname} {this.props.userDetail.lname} <br/> מספר פלאפון: {this.props.userDetail.phone} <br/> דוא"ל: {this.props.userDetail.email} </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style={{padding: "35px", backgroundColor: "#9B1750"}} bgcolor="#9B1750">
                                        <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"600px"}}>
                                            <tr>
                                                <td align="center" style={{padding: "25px 0 15px 0"}}>
                                                    <table border="0" cellSpacing="0" cellPadding="0">
                                                        <tr>
                                                            <td align="center" style={{borderRadius: "5px"}} bgcolor="#66b3b7"> <NavLink to="/Catalog" href="#" target="_blank" style={{fontSize: "18px", fontFamily: "Open Sans, Helvetica, Arial, sans-serif", color: "#ffffff", textDecoration: "none", borderRadius: "5px", backgroundColor: "#5D001D", padding: "15px 30px", border: "1px solid #F44336", display: "block"}}>Shop Again</NavLink> </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}
