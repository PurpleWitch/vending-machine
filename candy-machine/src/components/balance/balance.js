import "./balance.css"
import { Component } from 'react';

class Balance extends Component{
render() {
  return (
    <>
    <div className="balance">
        <ui>
            <li>
                <img className="1$" src="https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg"></img>
            </li>
            <li>
            <img className="50c$"></img>
            </li>
            <li>
            <img className="20c"></img>
            </li>
            <li>
            <img className="10c"></img>
            </li>

        </ui>
    </div>
    </>
  );
}}

export default Balance;
