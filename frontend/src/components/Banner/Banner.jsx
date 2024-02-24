import React, { useEffect, useState } from "react";
import "./Banner.css";
import { fetchCategories } from "../../services/apiService";
import { Link } from "react-router-dom";

function Banner() {
  const [categories, setCategories] = useState(null);
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

  return (
    <div className="bannerParentDiv" style={{backgroundColor:"#FFF0F5"}}>
          <div  className="flex justify-center pt-5 pb-5" >
            <div className="otherQuickOptions flex" >
              {categories?.map(category => (
                  <div className="option">
                      <Link to={`/categories/${category._id}`} className="px-5">{category.name}</Link>
                  </div>
              ))}              
            </div>
          </div>
    </div>
       
  );
}

export default Banner;
