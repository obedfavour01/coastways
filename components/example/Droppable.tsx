import { DragEvent } from "react"

type Droppable = {
    children?: React.ReactNode,
    className?: string,
    onDrop?: (e: DragEvent<HTMLElement>) => void,
    onDragOver?: (e: DragEvent<HTMLElement>) => void
}


const Droppable = (props: Droppable) => {

    const onDragOver = (e:DragEvent<HTMLElement>) => {
        e.preventDefault();
        if(props.onDragOver){
            props.onDragOver(e)
        }
    }

    const onDrop = (e:DragEvent<HTMLElement>) => {
        e.preventDefault();
        if(props.onDrop){
            props.onDrop(e)
        }
    }
    return (
        <div className={props.className} onDragOver={onDragOver} onDrop={onDrop}>
            {props.children}
        </div>
    )
}

export default Droppable 