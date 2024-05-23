import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import ActionBar from '@/Components/ActionBar';
import { Stack } from '@mui/material';
import AssetImage from '@/Components/AssetImage';
import Card from '@mui/material/Card';
export default function Create({ auth, type, templates, title, headerOptions, apiToken }) {

    React.useEffect(() => {
        localStorage.setItem('apiToken', apiToken);
    }, [])

    const actions = {
        "Create": function () {
            handleSubmit();
        },
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
            actionBar={<ActionBar actions={actions} headerOptions={headerOptions} />}
        >
            <Head title={title} />
            <div className="square-pattern-bg">
                <div className="py-12" style={{ width: "100%" }}>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ position: "relative", width: "100%" }}>
                        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                            {templates.map((template, index) => (
                                <AssetImage src={template['thumbnail']} key={index} title={template['title']} />
                            ))}
                        </Stack>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
