import { Button } from "@mui/material";
import React, { lazy, useState } from "react";
import classes from "./Details.module.css";
const ModalCard = lazy(() => import("./Detail/material/ModalCard"));

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
    <div className={classes.container}>
      <div className={classes.type}>{transactionType}</div>
      <div className={classes.price}>{house.price} €</div>
      <div className={classes.title}>{house.title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.location}>{house.city}</div>
      <div>
        <Button onClick={handleOpen}>...</Button>
        <ModalCard open={open} onClose={handleClose} house={house} />
      </div>
    </div>
  );
};

export default Details;
