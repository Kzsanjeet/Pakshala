import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from "react-icons/fa";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, CardContent, CardMedia, Typography } from '@mui/material';
import { ImSpinner2 } from "react-icons/im";
import { fadeIn } from "../motion/motion";

const TableFilter = () => {
    const [loading, setLoading] = useState(false);
    const [tableList, setTableList] = useState([]);
    const [filteredTables, setFilteredTables] = useState([]);
    const [btnClicked, setClicked] = useState("all tables");
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getAllTable = async () => {
        try {
            const response = await fetch("http://localhost:4000/admin/get-table-items");
            const data = await response.json();
            if (data.success) {
                setTableList(data.tableItems);
                setFilteredTables(data.tableItems);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllTable();
    }, []);

    const handleFilter = (e) => {
        setLoading(true);
        const choice = e.target.value.toLowerCase();
        setClicked(choice);

        setTimeout(() => {
            if (choice === "all tables") {
                setFilteredTables(tableList);
            } else {
                setFilteredTables(tableList.filter(table => table.table_category.toLowerCase() === choice));
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className='room-filter'>
            <h1>Reserve a table</h1>
            <div className="filter-choice">
                <button value="all tables" onClick={handleFilter} className={btnClicked === "all tables" ? "clicked" : ""}>
                    All tables
                </button>
                <button value="terrace" onClick={handleFilter} className={btnClicked === "terrace" ? "clicked" : ""}>
                    Terrace
                </button>
                <button value="bar" onClick={handleFilter} className={btnClicked === "bar" ? "clicked" : ""}>
                    Bar
                </button>
                <button value="lobby" onClick={handleFilter} className={btnClicked === "lobby" ? "clicked" : ""}>
                    Lobby
                </button>
                <button value="indoor" onClick={handleFilter} className={btnClicked === "indoor" ? "clicked" : ""}>
                    Cafe Indoor
                </button>
                <button value="dining" onClick={handleFilter} className={btnClicked === "dining" ? "clicked" : ""}>
                    Dining
                </button>
                <button value="rooftop" onClick={handleFilter} className={btnClicked === "rooftop" ? "clicked" : ""}>
                    Rooftop
                </button>
            </div>
            <div className="room-cards">
                {loading ? (
                    <div className='loading-spinner'>
                        <ImSpinner2 className='loading' />
                    </div>
                ) : (
                    filteredTables.map((table, index) => (
                        <motion.div key={table._id} className='singleroom-card'
                            style={{ backgroundColor: "#F3EEEA", position: "relative" }}
                            variants={fadeIn("up", "spring", index * .01, .1)}
                            viewport={{ once: "true" }}
                            initial="hidden"
                            whileInView="show">
                            <CardMedia
                                component="img"
                                alt={table.table_name}
                                image={table.table_image.url}
                                className='roomcard-img'
                            />
                            <CardContent>
                                <div className="nameandrating" style={{ display: "flex", alignItems: "center" }}>
                                    <Typography gutterBottom component="div" style={{ fontFamily: "Lato", fontSize: "1.1rem", letterSpacing: "2px" }}>
                                        {table.table_name}
                                    </Typography>
                                </div>
                                <Typography variant="body2" style={{ fontFamily: "Lato", fontSize: "1rem", letterSpacing: "1.4px", color: "black", lineHeight: "2rem" }}>
                                    <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: ".8rem" }}>
                                        <FaUser />
                                        <span>Up to {table.table_guests} guest/s</span>
                                    </div>
                                </Typography>
                            </CardContent>
                            <div className="overlay2" onClick={handleClickOpen}>
                                <h2>Reserve</h2>
                            </div>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Reserve {table.table_name}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Please fill in the form to reserve your table.
                                    </DialogContentText>
                                    <form>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Name"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                            autoComplete='off'
                                        />
                                        <TextField
                                            margin="dense"
                                            id="email"
                                            label="Email"
                                            type="email"
                                            fullWidth
                                            variant="standard"
                                            autoComplete='off'
                                        />
                                        <TextField
                                            margin="dense"
                                            id="contact"
                                            label="Contact Number"
                                            type="tel"
                                            fullWidth
                                            variant="standard"
                                            autoComplete='off'
                                        />
                                        <TextField
                                            margin="dense"
                                            id="date"
                                            label="Date"
                                            type="date"
                                            fullWidth
                                            autoComplete='off'
                                            variant="standard"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            margin="dense"
                                            id="time"
                                            label="Time"
                                            type="time"
                                            fullWidth
                                            variant="standard"
                                            autoComplete='off'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            margin="dense"
                                            id="guests"
                                            label="Guests"
                                            type="number"
                                            fullWidth
                                            autoComplete='off'
                                            variant="standard"
                                        />
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleClose}>Reserve</Button>
                                </DialogActions>
                            </Dialog>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TableFilter;
