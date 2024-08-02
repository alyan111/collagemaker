import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useCallback, useState } from 'react';
import ActionBar from '@/Components/ActionBar';
import axios from 'axios';
import FileInputWithPreviewForEdit from '@/Components/FileInputWithPreviewForEdit';
import { Box, Stack, TextField, Typography } from '@mui/material';

export default function Create({ auth, type, title, template, headerOptions, categories = "", apiToken }) {

    React.useEffect(() => {
        localStorage.setItem('apiToken', apiToken);
    }, []);

    const urlUni = window.location.href.split('/templates/')[1];

    const [info, setInfo] = useState({
        'title': template['data']['title'],
        'tags': template['data']['tags'],
        'height': template['data']['height'],
        'width': template['data']['width'],
    });

    const imagesArray = [template['data']['thumbnail'], template['data']['whiteImage'], ...template['data']['images']]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
        >
            <Head title="Dashboard" />
            <div className="square-pattern-bg">
                <div className="py-12" style={{ width: "100%" }}>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ position: "relative", width: "100%" }}>
                        <Stack spacing={5} direction={'row'} justifyContent={"center"} sx={{
                            padding: "30px 0px",
                            backgroundColor: "white",
                            width: "100%"
                        }}>
                            <Stack spacing={1}>
                                <Typography variant="p" component="p">Enter title for template</Typography>
                                <TextField value={info['title']} sx={{ width: "200px" }} id="outlined-basic" label="Title" variant="outlined" />
                            </Stack>
                            <Stack spacing={1}>
                                <Typography variant="p" component="p">Enter tags for template</Typography>
                                <TextField value={info['tags']} sx={{ width: "200px" }} id="outlined-basic" label="Tags" variant="outlined" />
                            </Stack>
                            <Stack spacing={1}>
                                <Typography variant="p" component="p">Enter width for template</Typography>
                                <TextField value={info['width']} sx={{ width: "200px" }} id="outlined-basic" label="Width" variant="outlined" />
                            </Stack>
                            <Stack spacing={1}>
                                <Typography variant="p" component="p">Enter height for template</Typography>
                                <TextField value={info['height']} sx={{ width: "200px" }} id="outlined-basic" label="Height" variant="outlined" />
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                            {imagesArray.map((image, index) => (
                                < FileInputWithPreviewForEdit
                                    key={index}
                                    index={index}
                                    image={image}
                                    uni={image['uni'] || urlUni}
                                    type={index > 1 ? "image" : index == 0 ? "thumbnail" : "shade"}
                                />
                            ))}
                        </Stack>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
