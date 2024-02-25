import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { handleAllCustomer } from '../../services/Admin';
import CategoryDeatils from './CategoryDeatils';
import CustomerDetails from './CustomerDetails';
const mainColors = [
  '#FADBD8', // Light Coral
  '#F5CBA7', // Light Salmon
  '#F9E79F', // Light Yellow
  '#ABEBC6', // Light Greenish Blue
  '#AED6F1', // Light Blue
  '#D5DBDB', // Light Grayish Blue
  '#F2D7D5', // Light Pink
  '#FDEDEC', // Light Rose
  '#F5EEF8', // Light Lavender
  '#FDEBD0', // Light Orange
];

const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * mainColors.length);
  return mainColors[randomIndex];
};

const Customer = () => {
  const randomBackgroundColor = generateRandomColor();
  const [isHovered1, setIsHovered1] = useState(false);
  const [cust, setcust] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
 };

 const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
 };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await handleAllCustomer();
        setcust(order);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleOpenDialog = (orderDetails) => {
    // console.log("hello")
    setSelectedOrder(orderDetails);
    setIsDialogOpen(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>

      <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="Admin/customer" className="flex items-center ps-2.5 mb-5">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Admin Dashboard</span>
          </a>
          <ul className="space-y-2 font-medium">

            <li>
              <a href="/Admin/Customer" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Customer</span>
              </a>
            </li>
            <li>
              <a href="/Admin/Category" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Category</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </a>
            </li>

            <li>
              <a href="/admin/logout" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>
      <div className='m-4'>
        {cust && (
          <div className="ml-64">
            {cust.map((item, key) => (
              <Card
                key={key}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50rem',
                  marginLeft: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '170px',
                  marginBottom: '20px',
                  marginTop: '10px',
                  background: '#fff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <Card.Header
                  style={{
                    position: 'relative',
                    backgroundColor: randomBackgroundColor,
                    color: '#000',
                    fontSize: '1.2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem 1rem',
                    height: '50px',
                  }}
                >
                  <span style={{ marginLeft: '350px' }}>Customer no. :- {item?.user?._id}</span>
                </Card.Header>
                <Card.Body style={{ display: 'flex', flexDirection: 'row', height: '120px', marginLeft: '10px' }}>
                  <div style={{ flex: 0.9, marginTop: '10px' }}>
                    <Card.Text style={{ color: '#000', fontSize: '1rem' }}>
                      <span style={{ fontStyle: 'italic', marginTop: '20px' }}>Customer name : {item?.user?.name} </span>
                    </Card.Text>
                    <Card.Text style={{ color: '#000', fontSize: '1rem' }}>
                      <span style={{ fontStyle: 'italic', marginTop: '10px' }}>Customer Email Address :{item?.user?.email}</span>
                    </Card.Text>
                    <Card.Text style={{ color: '#000', fontSize: '1rem' }}>
                      <span style={{ fontStyle: 'italic', marginTop: '10px' }}>Customer mobile : {item?.user?.mobileNo} </span>
                    </Card.Text>
                  </div>

                  <div style={{  }}>
                    <Card.Text>
                      <button
                        style={{
                          backgroundColor: isHovered1 ? '#000000' : '#FF1493',
                          color: 'white',
                          fontSize: '16px',
                          padding: '10px 20px',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          marginRight: '10px',
                          marginTop: '30px',
                          marginLeft: "200px",
                          transition: 'background-color 0.3s ease',
                        }}
                        onClick={() => handleOpenDialog(item)}

                      >
                        Product Details
                      </button>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            ))}
             

            {
              selectedOrder &&
              <CustomerDetails isOpen={isDialogOpen} handleClose={handleCloseDialog} details={selectedOrder} />
            }
          </div>
        )}
      </div>
    </>
  );
};

export default Customer;
