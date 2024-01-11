import React, { useState } from "react";

import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import New from "./New";
import { News } from "@/typing";

type Props = {
  news: News[];
};

export default function NewsComp({ news }: Props) {
  const styles = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",

    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <h2 style={styles}>moldal</h2>
      </Modal> */}
      <New news={news} />
    </div>
  );
}
