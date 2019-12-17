import React from "react";
import "./PointsManager.css";
import PointAddForm from "../PointAddForm";
import PointsList from "../PointsList";

const PointsManager = (props) => {
  
  const {points, onNameAdded, onPointDelete, onDragEnd} = props;
  
  return (
    <div className='points-manager'>
      <PointAddForm onNameAdded={onNameAdded}/>
      <PointsList points={points} onPointDelete={onPointDelete} onDragEnd={onDragEnd}/>
    </div>
  );
};

export default PointsManager;