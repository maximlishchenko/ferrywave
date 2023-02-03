import React, { useState } from "react";
import DropdownList from "react-widgets/DropdownList";
import GetByDep from "./GetByDep";

const DepInput = () => {

    const [depPort, setDepPort] = useState("Please select start port");
    

    return (
    <div className="depinput">
    <DropdownList
    style = {{ width: 600, fontSize: 15 }}
    depPort={depPort}
    onChange={(depPort) => setDepPort(depPort) & console.log(depPort)}
    data={["Gills Bay", "St. Margaret's Hope Ferry Terminal"]}
    
    />
    <br/>
    <GetByDep params={depPort}/>
    </div>
    )
}

export default DepInput;