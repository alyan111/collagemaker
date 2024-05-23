import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Stage, Layer, Star, Text } from 'react-konva';
import React, { useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useCallback, useState } from 'react'
import { TargetBox } from './TargetBox'
import KonvaCustomImage from '@/Components/KonvaCustomImage';
import ActionBar from '@/Components/ActionBar';
import axios from 'axios';
import Sidebar from '@/Components/Sidebar';
import DimensionBar from '@/Components/DimensionBar';

const style = {
    border: '3px dashed #7B849C',
    borderRadius: "15px",
    height: '10rem',
    width: '100%',
    padding: '2rem',
    textAlign: 'center',
    margin: "30px 0px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#E6EBFA",
    color: "#7B849C",
    fontWeight: "900",
    fontSize: "1.5rem"
}

export default function Create({ auth, type, title, headerOptions }) {

    const handleDragStart = (e) => {
        const id = e.target.id();
        setDroppedFiles(
            droppedFiles.map((img) => {
                return { ...img, isDragging: img.id === id };
            })
        );
    };

    const handleDragEnd = (e) => {
        const id = e.target.id();
        setDroppedFiles(
            droppedFiles.map((img) => {
                let x = img.x, y = img.y;
                var newImgObj = { ...img, x, y, isDragging: false };
                if (id === img.id) {
                    newImgObj['x'] = e.target.x();
                    newImgObj['y'] = e.target.y();
                };
                return newImgObj;
            })
        );
    };

    const [droppedFiles, setDroppedFiles] = useState([])
    const handleFileDrop = useCallback((item) => {
        if (item) {
            const files = item.files;
            let images = [];
            var i = droppedFiles.length !== 0 ? droppedFiles.length : 0;
            files.map(img => {
                const id = String(Math.random()).slice(-5) + new Date().getTime() + "";
                i = i + 1;
                images.push({
                    index: i,
                    order: i,
                    id,
                    src: URL.createObjectURL(img),
                    image: img,
                    x: Math.random() * 1216,
                    y: Math.random() * 500,
                    rotation: 0,
                    isDragging: false,
                });
            });
            setDroppedFiles(prevFiles => [...images, ...prevFiles]);
        }
    }, [droppedFiles]);

    // console.log("outside : " + droppedFiles.length);

    const updateOrder = (dragIndex, hoverIndex, id) => {
        const draggedItem = droppedFiles[dragIndex];
        const newItems = [...droppedFiles];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, draggedItem);
        // console.log(newItems);
        setDroppedFiles(newItems)
    };

    const handleSubmit = useCallback(() => {
        const formData = new FormData();
        droppedFiles.forEach((item, index) => {
            formData.append(`items[${index}][id]`, item.id);
            formData.append(`items[${index}][src]`, item.src);
            formData.append(`items[${index}][x]`, item.x);
            formData.append(`items[${index}][y]`, item.y);
            formData.append(`items[${index}][rotation]`, item.rotation);
            formData.append(`items[${index}][image]`, item.image);

            formData.append('user_id', auth.user.id); // // //=
        });

        axios.post(route('save.template'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            // console.log(response.data);
        })
            .catch(error => {
                console.error('Error : ', error);
            });

    }, [droppedFiles]);

    const actions = {
        "Create": function () {
            handleSubmit();
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Template</h2>}
            actionBar={<ActionBar actions={actions} headerOptions={headerOptions} />}
        >
            <Head title="Dashboard" />
            <div className="square-pattern-bg">
                <div className="py-12" >
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ position: "relative" }}>
                        <DimensionBar />
                        <DndProvider backend={HTML5Backend}>
                            <TargetBox onDrop={handleFileDrop} style={style} />
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <Stage width={1216} height={500} style={{ boxShadow: "rgba(149, 157, 165, 0.1) 0px 8px 24px" }}>
                                    <Layer>
                                        {
                                            droppedFiles
                                                .map((image, i) => (
                                                    <KonvaCustomImage id={image.index} key={i} image={image} onDragStart={handleDragStart}
                                                        onDragEnd={handleDragEnd} />
                                                ))
                                        }
                                    </Layer>
                                </Stage>
                            </div>
                        </DndProvider>
                        <Sidebar images={droppedFiles} reorder={updateOrder} />
                    </div>
                </div>
            </div>
        </ AuthenticatedLayout >
    );
}
