import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import ActionBar from '@/Components/ActionBar';
import { Stack } from '@mui/material';
import AssetImage from '@/Components/AssetImage';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';
import axios from 'axios';
export default function Create({ auth, templates, title, headerOptions, token }) {

    const [open, setOpen] = React.useState({
        status: false,
        message: "",
        severity: "",
    });

    const openSnackbar = (message, severity) => {
        setOpen({
            status: true,
            message, severity
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    };

    const actions = {
        "Create": function () {
            handleSubmit();
        },
    };

    const handleRemoveFileInput = (uni) => {
        axios.delete(route("delete.template", { uni }), {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                openSnackbar("Template and its assets have been deleted", "success");
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
            actionBar={<ActionBar actions={actions} headerOptions={headerOptions} />}
        >
            <Head title={title} />
            {
                open.status && <Snackbar
                    open={open.status}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    TransitionComponent={Grow}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert
                        onClose={handleClose}
                        severity={open.severity}
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {open.message}
                    </Alert>
                </Snackbar>
            }
            <div className="square-pattern-bg">
                <div className="py-12" style={{ width: "100%" }}>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ position: "relative", width: "100%" }}>
                        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                            {templates.map((template, index) => (
                                <AssetImage src={template['thumbnail']} key={index} uni={template['uni']} title={template['title']} handleRemoveFileInput={handleRemoveFileInput} />
                            ))}
                        </Stack>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
