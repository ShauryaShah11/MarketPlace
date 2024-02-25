import React, { useState } from 'react';
import {handleadd} from './../../Services/Admin'
import Swal from 'sweetalert2';
const CategoryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        tax: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
           const dta ={
            name:formData.name,
            description:formData.description,
            tax:formData.tax
           }
         // Create data object with email field
        const order = await handleadd(dta);
            if(order){
                Swal.fire({
                    title: "added Successfully",
                    
                    icon: "success" 
                  }).then(()=>{
                    window.location.href="/admin/Category"
                  })
            }
          console.log(order)
            
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-3">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Category Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Category Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tax">
                    Tax
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="tax"
                    type="text"
                    placeholder="Category Tax"
                    name="tax"
                    value={formData.tax}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CategoryForm;
