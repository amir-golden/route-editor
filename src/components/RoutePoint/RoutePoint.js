import React from 'react';
import './RoutePoint.css';

const RoutePoint = (props) => {
  const { name, onPointDelete } = props;
  
  return (
    <span className="route-point">
      <span className="route-name">
        {name}
      </span>

      <button 
        type="button" 
        className="btn btn-outline-success btn-sm"
        onClick={onPointDelete}
      >
      <i className="fa fa-times-circle" aria-hidden="true"/>
      </button>
    </span>
  );
};

export default RoutePoint;
