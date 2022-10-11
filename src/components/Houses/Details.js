import { Box, Button } from "@mui/material";
import React, { lazy, useState } from "react";
import classes from "./Details.module.css";
const ModalCard = lazy(() => import("./Detail/ModalCard"));

// import Modal from "../../UI/Modal";
// import ModalHouse from "./Detail/ModalCard";

const Details = (props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  let house = props.house;

  let transactionType = house.transactionType === 1 ? "A Louer" : "A Vendre";
  let description = `${house.level}' etage - ${house.rooms} pieces - ${house.bedrooms} chambre(s) - Living ${house.livingArea} ${house.livingAreaUnit}`;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={classes.container}>
      <Box className={classes.type}>{transactionType}</Box>
      <Box className={classes.price}>{house.price} €</Box>
      <Box className={classes.title}>{house.title}</Box>
      <Box className={classes.description}>{description}</Box>
      <Box className={classes.location}>{house.city}</Box>
      <Box>
        <Button onClick={handleOpen}>...</Button>
        <ModalCard open={open} onClose={handleClose} house={house} />
      </Box>
    </Box>
  );
};

export default Details;
