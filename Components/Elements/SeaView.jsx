import React from "react";
import {BsArrowRight} from 'react-icons/bs'
const SeaView = () => {
  return (
    <>
      <div className="container sea-view">
        <div className="grid lg:grid-cols-3 gap-5">
            <div className="flex items-center justify-center">
                <img src="assets/ZIMO ZIG W.png" alt=""/>
            </div>
            <div></div>
            <div>
                <h2>PERSONALISED FOR YOU</h2>
                <p>Delivering Thousands of personalised alerts Everday our users can be first in line when that oppurtunity of a lifetime is here</p>
                <p className="text-end pt-5">Create user id </p> 
            </div>
        </div>
      </div>
    </>
  );
};

export default SeaView;
