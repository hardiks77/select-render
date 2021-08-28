import React from "react";
import "./RightColumn.css";
import { Context } from "../Context/Context";

function RightColumn() {

    let [data, setData] = React.useContext(Context);

    const RightData = () => {

        let dataNum = data.portugal.length + data.nicaragua.length + data.marshall.length;

        function handleClick(countryData, nameData) {

            if (countryData === "Portugal") {
                let newData = data.portugal.filter(value => value != nameData);
                setData({ ...data, portugal: newData });
                console.log("after set")
            }
            else if (countryData === "Nicaragua") {
                let newData = data.nicaragua.filter(value => value != nameData);
                setData({ ...data, nicaragua: newData });
                console.log("after set")
            }
            else {
                let newData = data.marshall.filter(value => value != nameData);
                setData({ ...data, marshall: newData });
                console.log("after set")
            }
        }

        return (
            <div>
                {
                    dataNum === 0 ? <h1 className="no-values">No Value Selected</h1> :
                        <div>
                            {
                                data.portugal.length === 0 ? null :
                                    <div className="country-data-div">
                                        <h1>Portugal</h1>
                                        {
                                            data.portugal.map(value => <div className="values-div"><div>{value}</div><button id={value} onClick={() => handleClick("Portugal", value)}>x</button></div>)
                                        }
                                    </div>
                            }
                            {
                                data.nicaragua.length === 0 ? null :
                                    <div className="country-data-div">
                                        <h1>Nicaragua</h1>
                                        {
                                            data.nicaragua.map(value => <div className="values-div"><div>{value}</div><button id={value} onClick={() => handleClick("Nicaragua", value)}>x</button></div>)
                                        }
                                    </div>
                            }
                            {
                                data.marshall.length === 0 ? null :
                                    <div className="country-data-div">
                                        <h1>Marshall Islands</h1>
                                        {
                                            data.marshall.map(value => <div className="values-div"><div>{value}</div><button id={value} onClick={() => handleClick("Marshall", value)}>x</button></div>)
                                        }
                                    </div>
                            }
                        </div>
                }
            </div>
        )
    }

    return (
        <div className="right-col">
            <RightData />

        </div>
    )
}

export default RightColumn;