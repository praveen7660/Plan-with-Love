import "./Tours";
import {useState} from "react";


function Card({id,name,image,info,price, removeTour}){
    // useState for ReadMore
    const[readmore,setReadmore] = useState(false);

    // slice the description
    const description = readmore ? info :`${info.substring(0,200)}....`
                        

    // read more handler
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    // Not Interested Button Handler
    // present in App.js

    return(
        <div className="card">

            <img src={image} className="image"></img>
            
        <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">{description}
                <span onClick={readmoreHandler} className="read-more">
                    {readmore ? 'Show Less': `Read More`}
                </span>
            </div>
        </div>

        <button className="btn-red" onClick= {() => removeTour(id)}>
            Not Interested
        </button>
            
        </div>
    );
};
export default Card;