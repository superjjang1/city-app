import React from 'react';


function Cities(props){
    
    // console.log(props);
    return (
       
            
                <div className="col s6 m5">
                    <div className="card-panel blue">
                        <span className="white-text">
                            Rank {props.data.Rank}. {props.data.Capital}<br/>
                            Country: {props.data.Country}<br/>
                            Population: {props.data.Population}<br/>
                            Percent of Pop: {props.data.percent}
                        </span>
                    </div>
                </div>
           
           
        
    ) 
}

export default Cities;