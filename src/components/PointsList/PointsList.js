import React from 'react';
import {Droppable, Draggable, DragDropContext} from 'react-beautiful-dnd';
import RoutePoint from '../RoutePoint';

const PointsList = (props) => {

  const {points, onPointDelete, onDragEnd} = props;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="pointsDroppable">
        { (provided) => (
          <ul className='list-group'
              ref={provided.innerRef}>
            { points.map((point, i) => {
              const {id, ...itemProps} = point;
              return (
                <Draggable key={id} draggableId={'draggable-' + id} index={i}>
                {provided => (
                  <li className='list-group-item'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                  >
                    <RoutePoint onPointDelete={() => onPointDelete(id)} {...itemProps}/>
                  </li>
                )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PointsList;
