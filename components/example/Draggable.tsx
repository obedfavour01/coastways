"use client"
import React, { DragEvent } from 'react'

export type DraggableProps = {
    children?: React.ReactNode,
    className?: string,
    onDragStart?: (e: DragEvent<HTMLElement>) => void
}


const Draggable = ({ className, children, onDragStart }: DraggableProps) => {

    const onDrag = (e: DragEvent<HTMLElement>) => {
        if (onDragStart) {
            onDragStart(e);
        }
    }
    return (
        <div className={className} onDragStart={onDrag} draggable>
            {children}
        </div>
    )
}

export default Draggable