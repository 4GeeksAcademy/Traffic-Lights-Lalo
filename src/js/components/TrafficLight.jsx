import React, {useState} from "react";

const TrafficLight = () => {
    const [select, setSelect] = useState ("red")

    
    return(
        <div className="d-flex justify-content-center">
			<div className="suport"></div>
			<div className="fullBox">
				<div 
                    className= {`red ${select == "red" ? "switchOn" : ""}`}
                    onClick={()=> setSelect("red")}
                ></div>
				<div 
                    className= {`yellow ${select == "yellow" ? "switchOn" : ""}`}
                    onClick={()=> setSelect("yellow")}
                    ></div>
				<div 
                    className= {`green ${select == "green" ? "switchOn" : ""}`}
                    onClick={()=> setSelect("green")}
                    ></div>				
			</div>
		</div>
    );
};

export default TrafficLight