"use client";

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const StallBooking: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");

  const handleShow = (image: string) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container my-5">
      <div className="text-center">
        <h2 className="mb-4">Welcome in Purple Jallosh, Book your stall now !</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <Button
              variant="primary"
              className="mb-2"
              onClick={() => handleShow('/images/Hall A.jpg')}
            >
              View Stalls in Hall-A
            </Button>
            <p className="text-muted">Click to see Layout 1</p>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
            <Button
              variant="success"
              className="mb-2"
              onClick={() => handleShow('/images/Hall B.jpg')}
            >
              View Stall in Hall-B
            </Button>
            <p className="text-muted">Click to see Layout 2</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Stall Layout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={modalImage} alt="Stall Layout" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StallBooking;
