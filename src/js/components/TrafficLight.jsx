import React, {useState} from "react";

const TrafficLight = () => {
    const [select, setSelect] = useState ("red")

    const changeLight = (color) =>{
        setSelect(color)
    }
    
    return(
        <div className="d-flex justify-content-center">
			<div className="suport"></div>
			<div className="fullBox">
				<div 
                    className= {`red ${select == "red" ? "switchOn" : ""}`}
                    onClick={()=> changeLight("red")}
                ></div>
				<div 
                    className= {`yellow ${select == "yellow" ? "switchOn" : ""}`}
                    onClick={()=> changeLight("yellow")}
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