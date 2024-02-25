import { useEffect, useState } from "react";
import { addProductDetails } from "../../../services/functions/product";
import Loader from "../../Loader";
import { useRecoilState } from "recoil";
import { productCategoriesAtom } from "../../../store/productCategory";
import { fetchCategories } from "../../../services/apiService";

function ProductInformationForm(){
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    ownerCount: "",
    whyToSale: "",
    categoryId: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useRecoilState(productCategoriesAtom);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
          const response = await fetchCategories();
          setCategories(response);
      } catch (error) {
          console.error('Error fetching categories:', error);
      }
    };
    fetchCategoriesData();
  }, [])

  const changeHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const imageChangeHandler = (e) => {
    // Convert FileList to Array
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
    });
    images.forEach((image) => {
        data.append('file', image); // Ensure that the field name matches what Multer expects
    });

    try {
        await addProductDetails(data);
        setLoading(false);
    } catch (error) {
        console.error('Error uploading product details:', error);
        setLoading(false);
    }
};

  return (
    <div className="flex flex-col justify-center items-center m-20">
      <div className="text-3xl mb-6 text-center font-bold">Add Product</div>
      <div className="bg-white rounded-lg shadow-md p-8 bg-gray">
        <form onSubmit={submitHandler} >
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 justify-center items-center bg-white">
            <div className="mb-4 flex flex-col items-start">
              <label className="mb-1 capitalize text-gray-600">Name</label>
              <div className="relative w-full">
                <input 
                  type='text'
                  name='name' 
                  placeholder='Enter product name' 
                  onChange={changeHandler}
                  className="w-full px-3 py-2 text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-lg" 
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start">
              <label className="mb-1 capitalize text-gray-600">Brand</label>
              <div className="relative w-full">
                <input 
                  type='text'
                  name='brand' 
                  placeholder='Enter product brand' 
                  onChange={changeHandler}
                  className="w-full px-3 py-2 text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-lg" 
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start">
              <label className="mb-1 capitalize text-gray-600">Price</label>
              <div className="relative w-full">
                <input 
                  type='number'
                  name='price' 
                  placeholder='Enter product price' 
                  onChange={changeHandler}
                  className="w-full px-3 py-2 text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-lg" 
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start">
              <label className="mb-1 capitalize text-gray-600">Description</label>
              <div className="relative w-full">
                <textarea 
                  name='description' 
                  placeholder='Enter product description' 
                  onChange={changeHandler}
                  className="w-full px-3 py-2 text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-lg" 
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start">
              <label className="mb-1 capitalize text-gray-600">Owner Count</label>
              <div className="relative w-full">
                <input 
                  type='number'
                  name='ownerCount' 
                  placeholder='Enter owner count' 
                  onChange={changeHandler}
                  className="w-full px-3 py-2 text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-lg" 
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start">
              <label className="mb-1 capitalize text-gray-600">Why to Sale</label>
              <div className="relative w-full">
                <textarea 
                  name='whyToSale' 
                  placeholder='Enter reason to sale' 
                  onChange={changeHandler}
                  className="w-full px-3 py-2 text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-lg" 
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start">
              <label className="mb-1 capitalize text-gray-600">Category</label>
              <div className="relative w-full">
                <select 
                  name="categoryId" 
                  onChange={changeHandler}
                  className="w-full px-3 py-2 text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start">
              <label className="mb-1 capitalize text-gray-600">Images</label>
              <div className="relative w-full">
                <input 
                  type='file'
                  name='images'
                  onChange={imageChangeHandler}
                  multiple
                  className="w-full px-3 py-2 text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-lg" 
                />
              </div>
            </div>
          </div>
          <button 
            type="submit"
            className="w-full py-2 px-3 text-white rounded-lg bg-blue-500 shadow-lg hover:bg-blue-600 focus:outline-none mt-4"
          >
            Add Product
          </button>
          <div className="mt-5">
            <Loader color="#00BFFF" loading={loading} size={10}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductInformationForm;
