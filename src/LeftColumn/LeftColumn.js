import React from "react";
import "./LeftColumn.css";
import { Context } from "../Context/Context";

function LeftColumn() {

    let [data, setData] = React.useContext(Context);


    function setDataInRight(e) {
        let countryData = e.target.id;
        let nameData = e.target.value;

        if (countryData === "Portugal") {
            let newData = data.portugal.filter(value => value != nameData);
            if (data.portugal.length - newData.length === 0) {
                newData.push(nameData);
                console.log(newData);
            }
            setData({ ...data, portugal: newData });
            console.log("after set")
        }
        else if (countryData === "Nicaragua") {
            let newData = data.nicaragua.filter(value => value != nameData);
            if (data.nicaragua.length - newData.length === 0) {
                newData.push(nameData);
                console.log(newData);
            }
            setData({ ...data, nicaragua: newData });
            console.log("after set")
        }
        else {
            let newData = data.marshall.filter(value => value != nameData);
            if (data.marshall.length - newData.length === 0) {
                newData.push(nameData);
                console.log(newData);
            }
            setData({ ...data, marshall: newData });
            console.log("after set")
        }


        console.log(data);
    }

    return (
        <div className="left-col">
            <div className="country-div">
                <h1>Portugal</h1>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Portugal" type="checkbox" value="Aasiya Jayavant" checked={data.portugal.some(person => person === "Aasiya Jayavant")} />
                    <label>Aasiya Jayavant</label>
                </div>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Portugal" type="checkbox" value="Luvleen Lawrence" checked={data.portugal.some(person => person === "Luvleen Lawrence")} />
                    <label>Luvleen Lawrence</label>
                </div>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Portugal" type="checkbox" value="Rey Milbourne" checked={data.portugal.some(person => person === "Rey Milbourne")} />
                    <label>Rey Milbourne</label>
                </div>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Portugal" type="checkbox" value="Cayla Brister" checked={data.portugal.some(person => person === "Cayla Brister")} />
                    <label>Cayla Brister</label>
                </div>
            </div>
            <div className="country-div">
                <h1>Nicaragua</h1>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Nicaragua" type="checkbox" value="Deveedaas Nandi" checked={data.nicaragua.some(person => person === "Deveedaas Nandi")} />
                    <label>Deveedaas Nandi</label>
                </div>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Nicaragua" type="checkbox" value="Obasey Chidy" checked={data.nicaragua.some(person => person === "Obasey Chidy")} />
                    <label>Obasey Chidy</label>
                </div>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Nicaragua" type="checkbox" value="Xenie Dolezelova" checked={data.nicaragua.some(person => person === "Xenie Dolezelova")} />
                    <label>Xenie Dolezelova</label>
                </div>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Nicaragua" type="checkbox" value="Ezequiel Dengra" checked={data.nicaragua.some(person => person === "Ezequiel Dengra")} />
                    <label>Ezequiel Dengra</label>
                </div>
            </div>
            <div className="country-div">
                <h1>Marshall Islands</h1>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Marshall" type="checkbox" value="Aaron Almaraz" checked={data.marshall.some(person => person === "Aaron Almaraz")} />
                    <label>Aaron Almaraz</label>
                </div>
                <div className="name-div">
                    <input onChange={setDataInRight} id="Marshall" type="checkbox" value="Jelena Denisova" checked={data.marshall.some(person => person === "Jelena Denisova")} />
                    <label>Jelena Denisova</label>
                </div>
            </div>
        </div>
    )
}

export default LeftColumn;