import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const DestinationCard = () => {
    const[recipes,setRecipes]=useState([]);
   async function getData(){
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes)

    }

    useEffect(
        ()=>{
            getData()
        },[]
    )

  return (
    <div className="container">
        <div className="row">
            {
                recipes.map(
                    (data,index)=>{
                        // console.log(data)
                        return(
                            <div key={index} className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100 border-0">
                              <img
                                src={data.image}
                                className="card-img-top"
                                alt={data.cuisine}
                                style={{ height: '200px', objectFit: 'cover' }}
                              />
                              <div className="card-body">
                                <h5 className="card-title d-flex align-items-center gap-2 text-primary">
                                  <FaMapMarkerAlt /> {data.prepTimeMinutes}
                                </h5>
                                <p className="card-text text-muted small">{data.name}</p>
                              </div>
                              <div className="card-footer bg-white border-top-0 d-flex justify-content-between align-items-center">
                                <span className="fw-bold text-success">₹ 5000</span>
                                <a href="#book" className="btn btn-sm btn-outline-primary">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                    }
                )
            }

        </div>
    </div>
   
  );
};

export default DestinationCard;
