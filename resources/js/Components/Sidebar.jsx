import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  CARD: 'card',
};

const Sidebar = ({ images, reorder }) => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({});

  React.useEffect(() => { setItems(images) }, [images.length])

  const moveItem = (dragIndex, hoverIndex, id) => {
    const draggedItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);
    // hoverIndex , id
    setItems(newItems);
    // console.log("hoverIndex: " + hoverIndex + " | dragIndex: " + dragIndex);
    reorder(dragIndex, hoverIndex, id);
  };

  const Card = ({ id, text = "", index, src }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.CARD, // Specify the type for the drag source
      item: { id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: ItemTypes.CARD, // Specify the same type for the drop target
      hover(item) {
        if (item.id !== id) {
          const hoverIndex = index; // to
          const dragIndex = item.index; // from
          moveItem(dragIndex, hoverIndex, id);
          item.index = hoverIndex;
        }
      },
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
      <div ref={(node) => drag(drop(node))} style={{ opacity }} className='sidebar-image-div' >
        <img src={src} />
        {/* <h1>{index} | {id}</h1> */}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='sidebar-container'>
        {
          items
            .map((image, i) => (
              <Card id={image.id} key={i} index={i} src={image.src} />
            ))
        }
      </div>
    </DndProvider>
  );
};

export default Sidebar;
