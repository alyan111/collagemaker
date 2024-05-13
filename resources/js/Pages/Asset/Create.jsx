import React from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ActionBar from '@/Components/ActionBar';
import CustomButtonGroup from '@/Components/CustomButtonGroup';

import { Paper, Stack, Typography, selectClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';
import CustomSelectCategoryBox from '@/Components/CustomSelectCategoryBox';
import GitHubLabel from '@/Components/GithubCustomBox';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Create({ auth, type, title, categories, headerOptions }) {

  const [open, setOpen] = React.useState({
    status: false,
    message: "",
    severity: "",
  });
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [assetType, setAssetType] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState({ name: "", id: "" });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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

  const handleFileUpload = async () => {
    if (!selectedFile) {
      openSnackbar("No file selected", 'warning');
      return;
    }
    if (assetType == 0) {
      openSnackbar("Select the asset type first", 'warning');
      return;
    }
    if (selectedCategory.name === "") {
      openSnackbar("Select a category first", 'warning');
      return;
    }

    const formData = new FormData();
    formData.append('type', options[assetType]);
    formData.append('image', selectedFile);
    formData.append('category_id', selectedCategory.id);
    formData.append('category_name', selectedCategory.name);
    formData.append('user_id', auth.user.id);

    axios.post(route('save.single.asset'), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      openSnackbar(response.data.message, "success");
    })
      .catch(error => {
        console.error('Error : ', error);
      });
  };

  const actions = {
    "Create": function () {
      handleFileUpload();
    }
  }

  const options = ['Select Type', 'Pattern', 'Sticker', 'Background', 'Solid Color', 'Gradient'];

  const changeCategory = (e, i) => {
    i ? setSelectedCategory({ name: i.name, id: i.id }) : "";
  }

  const changeAssetType = (i) => {
    setAssetType(i);
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{assetType != 0 && "Upload " + options[assetType]}{assetType == 0 && "Upload Assets"}</h2>}
      actionBar={<ActionBar actions={actions} headerOptions={headerOptions}>
        <CustomSelectCategoryBox categories={categories} changeCategory={changeCategory} />
        <CustomButtonGroup changeAssetType={changeAssetType} options={options} />
      </ActionBar>}
    >
      <Head title="Dashboard" />

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
      <div className="square-pattern-bg ">
        <div className="py-12" >
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ position: "relative" }}>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-5">
              <Stack padding={20}>
                <Typography variant="h1" component="h1">
                  Select asset file
                </Typography>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  style={{
                    padding: "20px 10px"
                  }}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" onChange={handleFileChange} />

                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </ AuthenticatedLayout >
  );
}
