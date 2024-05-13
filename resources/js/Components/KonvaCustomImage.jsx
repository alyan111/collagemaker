import React from 'react';
import useImage from 'use-image';
import { Group, Image } from 'react-konva';

const KonvaCustomImage = ({ image, onDragStart, onDragEnd }) => {
  const [img] = useImage(image.src);
  // const [img] = useImage('https://konvajs.org/assets/lion.png');
  return (
    <Image draggable
      id={image.id}
      key={image.id}
      scaleX={image.isDragging ? 1 : 1}
      scaleY={image.isDragging ? 1 : 1}
      image={img}
      x={image.x}
      rotation={image.rotation}
      y={image.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default KonvaCustomImage