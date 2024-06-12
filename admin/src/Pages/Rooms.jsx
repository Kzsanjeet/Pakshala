import React, { useState } from 'react';
import "../css/menu.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, Box, TextField, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const RoomList = ({ roomData, setRoomData }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleEdit = (id) => {
    console.log(`Edit room with id: ${id}`);
  };

  const handleDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    const userConfirmed = confirm("Are you sure you want to delete this room?");
    if (userConfirmed) {
      setRoomData(roomData.filter(item => item.id !== id));
    }
  };

  const filteredRooms = roomData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='menu-table'>
        <div className="menu-search">
          <input type="text" value={search} onChange={handleSearchChange} className='menu-search' placeholder='Search' />
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead className='table-head'>
              <TableRow>
                <TableCell style={{ fontSize: "1.2rem", letterSpacing: "1px", fontWeight: "500" }}>SN</TableCell>
                <TableCell style={{ fontSize: "1.2rem", letterSpacing: "1px", fontWeight: "500" }}>Image</TableCell>
                <TableCell style={{ fontSize: "1.2rem", letterSpacing: "1px", fontWeight: "500" }}>Name</TableCell>
                <TableCell style={{ fontSize: "1.2rem", letterSpacing: "1px", fontWeight: "500" }}>Category</TableCell>
                <TableCell style={{ fontSize: "1.2rem", letterSpacing: "1px", fontWeight: "500" }}>Price</TableCell>
                <TableCell style={{ fontSize: "1.2rem", letterSpacing: "1px", fontWeight: "500" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRooms.map((item, index) => (
                <TableRow key={item.id} className='table-row'>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className='table-row'>
                    {item.img ? <img src={item.img} alt={item.title} className="menu-img" /> : 'No Image'}
                  </TableCell>
                  <TableCell className='table-row'>{item.title}</TableCell>
                  <TableCell className='table-row'>{item.category}</TableCell>
                  <TableCell className='table-row'>Rs. {item.price}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(item.id)}>
                      <Edit className='menu-edit' />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item.id)}>
                      <Delete className='menu-delete' />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

const Rooms = () => {
  const [roomData, setRoomData] = useState([
    {
      id: 1,
      category: 'premium',
      title: 'Single Room',
      price: 3000,
      bed: 'single',
      guests: 1,
      img: 'https://images.pexels.com/photos/20390786/pexels-photo-20390786/free-photo-of-interior-design-of-room-in-house.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: "4.0",
      description: 'The rooms have on-call service, housekeeping service, 24/7 stable and fast Wi-Fi, assistance, airport transfers and lodging if previously informed, and air-conditioned rooms with comfortable beds, comfortable and best hospitality. Only lunch and dinner are served to the room. Laundry service is available for additional costs.',
      smallImg1: 'https://images.pexels.com/photos/20390786/pexels-photo-20390786/free-photo-of-interior-design-of-room-in-house.jpeg?auto=compress&cs=tinysrgb&w=400',
      smallImg2: 'https://images.pexels.com/photos/1139784/pexels-photo-1139784.jpeg?auto=compress&cs=tinysrgb&w=400',
      smallImg3: 'https://images.pexels.com/photos/5816562/pexels-photo-5816562.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      category: 'premium',
      title: 'Single Bed',
      price: 3000,
      bed: 'single',
      guests: 1,
      img: 'https://images.pexels.com/photos/1139784/pexels-photo-1139784.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: "3.9",
      description: 'The rooms have on-call service, housekeeping service, 24/7 stable and fast Wi-Fi, assistance, airport transfers and lodging if previously informed, and air-conditioned rooms with comfortable beds, comfortable and best hospitality. Breakfast, lunch, and dinner are served to the room, but premium rooms do not have breakfast. Laundry service is available for additional costs.',
      smallImg1: 'https://images.pexels.com/photos/1139784/pexels-photo-1139784.jpeg?auto=compress&cs=tinysrgb&w=400',
      smallImg2: 'https://images.pexels.com/photos/20390786/pexels-photo-20390786/free-photo-of-interior-design-of-room-in-house.jpeg?auto=compress&cs=tinysrgb&w=400',
      smallImg3: 'https://images.pexels.com/photos/5816562/pexels-photo-5816562.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      category: 'premium',
      title: 'Single Room (Premium)',
      price: 3000,
      bed: 'single',
      guests: 1,
      img: 'https://images.pexels.com/photos/5816562/pexels-photo-5816562.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: "4.2",
      description: 'The rooms have on-call service, housekeeping service, 24/7 stable and fast Wi-Fi, assistance, airport transfers and lodging if previously informed, and air-conditioned rooms with comfortable beds, comfortable and best hospitality. Breakfast, lunch, and dinner are served to the room, but premium rooms do not have breakfast. Laundry service is available for additional costs.',
      smallImg1: 'https://images.pexels.com/photos/5816562/pexels-photo-5816562.jpeg?auto=compress&cs=tinysrgb&w=400',
      smallImg2: 'https://images.pexels.com/photos/20390786/pexels-photo-20390786/free-photo-of-interior-design-of-room-in-house.jpeg?auto=compress&cs=tinysrgb&w=400',
      smallImg3: 'https://images.pexels.com/photos/1139784/pexels-photo-1139784.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ]);
  const [open, setOpen] = useState(false);
  const [newRoom, setNewRoom] = useState({ title: '', category: '', price: '', img: null, miniImg1: null, miniImg2: null, miniImg3: null });
  const [errors, setErrors] = useState({ title: false, category: false, price: false, img: false, miniImg1: false, miniImg2: false, miniImg3: false });
  const [imagePreview, setImagePreview] = useState(null);
  const [miniImagePreview, setMiniImagePreview] = useState({ miniImg1: null, miniImg2: null, miniImg3: null });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'img') {
      setNewRoom({ ...newRoom, img: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
      setErrors({ ...errors, img: false });
    } else if (name.startsWith('miniImg')) {
      setNewRoom({ ...newRoom, [name]: files[0] });
      setMiniImagePreview({ ...miniImagePreview, [name]: URL.createObjectURL(files[0]) });
      setErrors({ ...errors, [name]: false });
    } else {
      setNewRoom({ ...newRoom, [name]: value });
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = async () => {
    const newErrors = {
      title: newRoom.title.trim() === '',
      category: newRoom.category.trim() === '',
      price: newRoom.price.trim() === '',
      img: newRoom.img === null,
      miniImg1: newRoom.miniImg1 === null,
      miniImg2: newRoom.miniImg2 === null,
      miniImg3: newRoom.miniImg3 === null,
    };

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      return;
    }

    const newRoomData = {
      ...newRoom,
      id: roomData.length + 1,
      price: parseFloat(newRoom.price),
      img: imagePreview,
      miniImg1: miniImagePreview.miniImg1,
      miniImg2: miniImagePreview.miniImg2,
      miniImg3: miniImagePreview.miniImg3,
    };

    console.log(newRoomData)

    const formData = new FormData();
    formData.append('room_name', newRoom.title);
    formData.append('room_category', newRoom.category);
    formData.append('room_price', newRoom.price);
    formData.append('img1', newRoom.img);
    formData.append('img2', newRoom.miniImg1);
    formData.append('img3', newRoom.miniImg2);
    formData.append('img4', newRoom.miniImg3);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/add-room`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        console.log(data.message);

      }
      else {
        // console.log('Error adding room');
        setRoomData([...roomData, newRoomData]);
        setNewRoom({ title: '', category: '', price: '', img: null, miniImg1: null, miniImg2: null, miniImg3: null });
        setImagePreview(null);
        setMiniImagePreview({ miniImg1: null, miniImg2: null, miniImg3: null });
    
        handleClose();
      }
    } catch (error) {
      console.error(error);
    }



   
  };

  return (
    <>
      <div className="menu-content">
        <button onClick={handleOpen} className='add-item'>Add Room</button>
        <RoomList roomData={roomData} setRoomData={setRoomData} />
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
          <h2 style={{ textAlign: "center" }}>Add New Room</h2>
          <form>
            <TextField
              label="Name"
              name="title"
              value={newRoom.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={errors.title}
              helperText={errors.title ? "Name is required" : ""}
            />
            <TextField
              label="Category"
              name="category"
              value={newRoom.category}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={errors.category}
              helperText={errors.category ? "Category is required" : ""}
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={newRoom.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={errors.price}
              helperText={errors.price ? "Price is required" : ""}
            />
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="raised-button-file"
              type="file"
              name="img"
              onChange={handleChange}
            />
            <label htmlFor="raised-button-file">
              <Button variant="contained" component="span" className='upload-img' style={{ backgroundColor: "rgb(50, 213, 213)" }}>
                Upload Main Image
              </Button>
            </label>
            {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
            {errors.img && <p style={{ color: 'red' }}>Main image is required</p>}

            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="miniImg1"
              type="file"
              name="miniImg1"
              onChange={handleChange}
            />
            <label htmlFor="miniImg1">
              <Button variant="contained" component="span" className='upload-img' style={{ backgroundColor: "rgb(50, 213, 213)" }}>
                Upload Mini Image 1
              </Button>
            </label>
            {miniImagePreview.miniImg1 && <img src={miniImagePreview.miniImg1} alt="Preview" className="image-preview" />}
            {errors.miniImg1 && <p style={{ color: 'red' }}>Mini image 1 is required</p>}

            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="miniImg2"
              type="file"
              name="miniImg2"
              onChange={handleChange}
            />
            <label htmlFor="miniImg2">
              <Button variant="contained" component="span" className='upload-img' style={{ backgroundColor: "rgb(50, 213, 213)" }}>
                Upload Mini Image 2
              </Button>
            </label>
            {miniImagePreview.miniImg2 && <img src={miniImagePreview.miniImg2} alt="Preview" className="image-preview" />}
            {errors.miniImg2 && <p style={{ color: 'red' }}>Mini image 2 is required</p>}

            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="miniImg3"
              type="file"
              name="miniImg3"
              onChange={handleChange}
            />
            <label htmlFor="miniImg3">
              <Button variant="contained" component="span" className='upload-img' style={{ backgroundColor: "rgb(50, 213, 213)" }}>
                Upload Mini Image 3
              </Button>
            </label>
            {miniImagePreview.miniImg3 && <img src={miniImagePreview.miniImg3} alt="Preview" className="image-preview" />}
            {errors.miniImg3 && <p style={{ color: 'red' }}>Mini image 3 is required</p>}

            <Box display="flex" justifyContent="space-between" marginTop="16px">
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Add
              </Button>
              <Button variant="contained" color="secondary" onClick={handleClose} style={{ backgroundColor: 'red' }}>
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Rooms;
