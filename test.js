// let files = [
//   { id: 1, x: 11, y: 12 },
//   { id: 2, x: 21, y: 22 },
//   { id: 3, x: 31, y: 32 },
//   { id: 4, x: 41, y: 42 },
// ]
// let id = 2;
// files = files.map((img) => {
//   let x = img.x, y = img.y;
//   var newImgObj = {
//     ...img,
//     x, y
//   }
//   if (id === img.id) {
//     newImgObj[x] = 999;
//     newImgObj[y] = 999;
//   }
//   return newImgObj;
// })
// console.log(files);


let droppedFiles = [
  {
    "index": 1,
    "order": 1,
    "id": "226521713333599704",
    "x": 261.1388925174509,
  },
  {
    "index": 2,
    "order": 2,
    "id": "824411713333599709",
    "x": 305.38020443287303,
  },
  {
    "index": 3,
    "order": 3,
    "id": "448061713333599709",
    "x": 828.3612294511804,
  },
  {
    "index": 4,
    "order": 4,
    "id": "753961713333599711",
    "x": 692.2183869438106,
  },
  {
    "index": 5,
    "order": 5,
    "id": "796481713333599712",
    "x": 1145.5895880603384,
  },
  {
    "index": 6,
    "order": 6,
    "id": "846261713333599713",
    "x": 175.78036181273,
  }
];

droppedFiles.

const updateOrder = (dragIndex, hoverIndex, id) => {
  const draggedItem = droppedFiles[dragIndex];
  const newItems = [...droppedFiles];
  newItems.splice(dragIndex, 1);
  newItems.splice(hoverIndex, 0, draggedItem);
  console.log(newItems);
  return newItems
};

updateOrder(1, 0, 0)