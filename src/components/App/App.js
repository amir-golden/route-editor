import React, { Component } from 'react';
import './App.css';
import PointsManager from "../PointsManager";
import MyMap from "../MyMap";

export default class App extends Component {

  lastId = 0;
  defaultState = {center: [55.796289, 49.108795], zoom: 15};

  state = {
    routePoints: [],
    ref: null
  };

  createPoint(name) {
    if (this.state.ref.getCenter() === undefined){
      return false;
    }
    return {
      name,
      coordinates: this.state.ref.getCenter(),
      id: this.lastId++
    }
  }

  addPoint = (text) => {
    const newItem = this.createPoint(text);
    if (newItem){
      this.setState(({ routePoints }) => {
        const newArray = [
          ...routePoints,
          newItem
        ];

        return {
          routePoints: newArray
        };
      });
    }
  };

  deletePoint = (id) => {
    this.setState(({ routePoints }) => {
      const idx = routePoints.findIndex((el) => el.id === id);

      const newArray = [
        ...routePoints.slice(0, idx),
        ...routePoints.slice(idx + 1)
      ];

      return {
        routePoints: newArray
      };
    });
  };
  
  getInstanceRef = (ref) => {
    this.setState(() => {
      return{
        ref: ref
      }
    });
  };
  
  changePointCoordinates = (arr, id, newCoordinates) => {
    const idx = arr.findIndex((point) => point.id === id);
    const item = { ...arr[idx], coordinates: newCoordinates } ;
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };
  
  onPlacemarkDrag = (event, id) => {
    const newCoordinates = event.get( 'target' ).geometry.getCoordinates();
    this.setState((state) => {
      const routePoints = this.changePointCoordinates(state.routePoints, id, newCoordinates);
      return { routePoints };
    });
  };

  onDragEnd = (e) => {
    if (e.destination) {
      const routePoints = [ ...this.state.routePoints ];
      const [deletedPoint] = routePoints.splice( e.source.index, 1 );
      routePoints.splice( e.destination.index, 0, deletedPoint );
      
      this.setState({ routePoints });
    }
  };
 
  render() {

    const { routePoints } = this.state;

    return (
      <div className="app">
        <PointsManager 
          points={routePoints} 
          onNameAdded={this.addPoint}
          onPointDelete={this.deletePoint}
          onDragEnd={this.onDragEnd}/>
        <MyMap 
          points={routePoints} 
          onInstanceUpdate={this.getInstanceRef}
          defaultState={this.defaultState}
          onPlacemarkDrag={this.onPlacemarkDrag}/>
      </div>
    );
  }
};
