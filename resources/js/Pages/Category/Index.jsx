import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';

import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ActionBar from '@/Components/ActionBar';
import CategoryItem from '@/Components/CategoryItem';
import List from '@mui/material/List';
import ModelComponent from '@/Components/ModelComponent';
import { Stack } from '@mui/material';
import UploadFileButton from '@/Components/UploadFileButton';
import GrayButton from '@/Components/GrayButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CategoriesInputMultiselectBox from '@/Components/CategoriesInputMultiselectBox';

export default function Index({ auth, data, type, categories, title, headerOptions }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categoryAddedSnackbarStatus, setCategoryAddedSnackbarStatus] = React.useState({ status: false, message: "", color: "" });
  const [modalState, setModalState] = useState({});
  const [selectedValues, setSelectedValues] = React.useState("");

  const handleCategoryChangeInModal = (event, value) => {
    console.log(value.join(', '));
    setSelectedValues(value.join(', '));
  };

  React.useEffect(() => {
    let data = headerOptions[0];
    setModalState({
      title: data['title'],
      isOpen: false,
      href: data['href']
    })
  }, [])


  const resetSnackbarStatus = () => {
    setCategoryAddedSnackbarStatus({ status: false, message: "", color: "" });
  }

  const inputRef = useRef(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  const handleModalBtnClick = (e, isClosing = false) => {
    isClosing = !modalState.isOpen;
    if (isClosing) {
      setModalState({
        ...modalState, isOpen: true
      });
    } else {
      setModalState({
        ...modalState, isOpen: false
      });
    }
  };

  const actionButtonClick = (id, name, actionType) => {
    const formData = new FormData();
    formData.append("uni", id);
    if (actionType == "delete") {
      formData.append("actionType", "delete");
      axios.post(route('manage.category'), formData).then(response => {
        router.reload({
          only: ['data']
        });
        setCategoryAddedSnackbarStatus({ status: true, message: response.data.message, color: "error" });
        setTimeout(() => { resetSnackbarStatus() }, 3500);
      })
        .catch(error => {
          console.error('Error uploading file: ', error);
        });
    } else if (actionType === "edit") {

    }
  };

  const addCategory = () => {
    const formData = new FormData();
    // formData.append('thumbnail', selectedFile);
    formData.append('name', inputRef.current.value);
    formData.append('type', selectedValues);
    formData.append('actionType', "store");
    axios.post(route('manage.category'), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        router.reload({
          only: ['data']
        });
        setCategoryAddedSnackbarStatus({ status: true, message: "New category added", color: "success" });
        setTimeout(() => { resetSnackbarStatus() }, 3500);
      })
      .catch(error => {
        console.error('Error uploading file: ', error);
      });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-bold text-xl text-gray-800 leading-tight">{title}</h2>}
      actionBar={<ActionBar type={type} headerOptions={headerOptions} handleChange={handleModalBtnClick} />}
    >
      <Head title={"Categories"} />
      <div className="square-pattern-bg ">

        {
          categoryAddedSnackbarStatus['status'] && <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={categoryAddedSnackbarStatus['status']} autoHideDuration={3500}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={categoryAddedSnackbarStatus['color']}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {categoryAddedSnackbarStatus['message']}
            </Alert>
          </Snackbar>
        }

        <ModelComponent href={modalState['href']} isOpen={modalState['isOpen']} closed={(e) => handleModalBtnClick(e, true)} >
          <Stack sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "200px",
          }}>
            <input
              // value={categoryName}
              ref={inputRef}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder="Category name"
              // onChange={handleInputChange}
              required
            />

            <CategoriesInputMultiselectBox handleCategoryChangeInModal={handleCategoryChangeInModal} categories={categories} />

            <Stack sx={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between"
            }}>
              <UploadFileButton width={"48%"} onFileSelect={handleFileSelect} />
              <GrayButton sx={{ width: "48%" }} onClick={addCategory} >Create</GrayButton>
            </Stack>
          </Stack>
        </ModelComponent>

        <List
          className='categoriey-items'
          sx={{ width: '100%', padding: '30px' }}
        >
          {
            data.map((_, index) => <CategoryItem key={_['id']} data={_} actionButtonClick={actionButtonClick} />)
          }
        </List>

      </div>
    </AuthenticatedLayout >
  );
}
