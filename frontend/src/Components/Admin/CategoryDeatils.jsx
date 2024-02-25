import React from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Make sure to set the root element for modal in your index.js or App.js
Modal.setAppElement('#root');

const customStyles = {
    content: {
        width: '50%',
        height: '90%',
        margin: 'auto',
        overflow: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }
};

const CustomerDetails = ({ isOpen, handleClose, details }) => {
    console.log(details);
    const { products, user } = details;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Product Details"
            style={customStyles}
        >
            

            <div>
                {products && (
                    products.map((item, key) => (
                        <Card key={key} className="w-full max-w-md mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex">
                                
                                <div className="w-1/3">
                                    <img src={item?.images[1]} alt="Card" className="object-cover w-full h-full" />
                                </div>
                                <div className="w-2/3 px-4 py-2">
                                    <Card.Body>
                                        <Card.Title className="text-gray-700 "><strong>item id:-</strong>{item?._id}</Card.Title>
                                        <Card.Title className="text-gray-700"><strong>item name:-</strong>{item?.name}</Card.Title>
                                        <Card.Text className="text-gray-700"> <strong>item Description:-</strong>  {item?.description}</Card.Text>
                                        <Card.Text className="text-gray-700"><strong>Price:- </strong> {item?.price}</Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button
                      style={{
                        backgroundColor:  '#000 ',
                        color: 'white',
                        fontSize: '16px',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginRight: '10px',
                    
                        transition: 'background-color 0.3s ease',
                      }}
                      onClick={() => handleClose()}
                    
                    >
                      Close
                    </button>
            </div>
        </Modal>
    );
};

export default CustomerDetails;
