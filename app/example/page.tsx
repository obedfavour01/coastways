"use client"

import Draggable from "@/components/example/Draggable"
import Droppable from "@/components/example/Droppable"
import { useState } from "react"

type itemProps = {
    name: string,
    numbers: number[]
}


const Page = () => {

    const [containers, setContainers] = useState<itemProps[]>([
        { name: 'odd', numbers: [] },
        { name: 'even', numbers: [] },
    ])

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [currentItem, setCurrentItem] = useState<number>(0);


    const onDrop = (index: number) => {
        if (containers[index].name == 'even') {
            if (currentItem % 2 == 0) {
                console.log('accept even number');
                setItems((items) => items.filter((item) => item != currentItem));
                containers[index].numbers.push(currentItem);
                setContainers((containers) => containers);
            } else {
                console.log('refuse odd number');
            }
        } else {
            if (currentItem % 2 != 0) {
                console.log('accept odd number');
                setItems((items) => items.filter((item) => item != currentItem));
                containers[index].numbers.push(currentItem);
                setContainers((containers) => containers);
            } else {
                console.log('refuse even number');
            }
        }
    };


    const onDragStart = (item: number) => {
        setCurrentItem(item);
    };

    return (
        <div className="p-5">
        <div className="flex gap-2">
          {containers.map((cont, index) => (
            <Droppable
              key={index}
              className="rounded-lg border border-green-600 p-3 flex flex-wrap gap-2 justify-center grow"
              onDrop={(e) => onDrop(index)}
            >
              {cont.numbers.length == 0 ? (
                <span>{cont.name}</span>
              ) : (
                cont.numbers.map((n) => (
                  <span className="border border-red-600 rounded-lg p-2" key={n}>
                    {n}
                  </span>
                ))
              )}
            </Droppable>
          ))}
        </div>
  
        <div className="flex flex-wrap justify-center gap-2 m-2 p-2">
          {items.map((item) => (
            <Draggable
              key={item}
              className="border border-red-600 rounded-lg p-2"
              onDragStart={(e) => onDragStart(item)}
            >
              {item}
            </Draggable>
          ))}
        </div>
  
        {
        typeof window != "undefined" &&
        (navigator.maxTouchPoints ||
          'ontouchstart' in document.documentElement) && (
          <script async src="/DragDropTouch.js" />
        )}
      </div>
    )
}

export default Page