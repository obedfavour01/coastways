import React, { DragEvent } from 'react'

type DraggableProps = {
    children: React.ReactNode,
    className : string,
    onDragStart : (e:DragEvent<HTMLElement>) => void
    
}

type DroppableProps = {
    children: React.ReactNode,
    className : string,
    onDragEnter : (e:DragEvent<HTMLElement>) => void
    
}

const DraggableMine = (props:DraggableProps) => {



        const handleDrag = (e:DragEvent<HTMLElement>) => {
                e.preventDefault();
                props.onDragStart(e);
        }

  return (
    <div onDrag={handleDrag} className={props.className} draggable>
        {props.children}
    </div>
  )
}


export function Droppable (props:DroppableProps){

    const handleDragEnter = (e:DragEvent<HTMLElement>) => {

        if(props.onDragEnter){
            e.preventDefault();
            props.onDragEnter(e);
        }
}


    return( 
        <div onDragEnter={handleDragEnter} className={props.className} >
        {props.children}
    </div>
)
}

export default DraggableMine