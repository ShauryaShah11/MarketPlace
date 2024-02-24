import React, { useState } from "react";
import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();

  return (
    <div className="bannerParentDiv" style={{backgroundColor:"#FFF0F5"}}>
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu" style={{marginLeft:"50px", borderRadius:"10px"}}>
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="null">ALL CATEGORIES</option>
              <option value="Cars">Cars</option>
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option>
            </select>
          </div>
          <div  className="flex justify-start" >
            <div className="otherQuickOptions flex" >
              <div className="option">
                <img src="https://etimg.etb2bimg.com/photo/101380711.cms" alt="Car"   style={{marginLeft:"20px",marginRight:"10px " ,width:"150px", borderRadius:"20px"}}/>
                <span onClick={() => setCategory("Cars")} style={{marginLeft:"70px"}}>Cars</span>
              </div>
              <div className="option">
                <img src="https://m.media-amazon.com/images/I/51UHoxzInpL._SY300_SX300_QL70_FMwebp_.jpg" alt="Camera"  style={{marginLeft:"30px",marginRight:"10px " ,width:"100px", borderRadius:"20px"}}/>
                <span onClick={() => setCategory("Cameras & Lenses")}>Cameras & Lenses</span>
              </div>
              <div className="option">
                <img src="https://m.media-amazon.com/images/I/61zAPJOwK8L._SX679_.jpg" alt="Computer" className="w-48" style={{marginLeft:"30px",marginRight:"10px" ,width:"100px" ,height:"80px", borderRadius:"20px"}} />
                <span onClick={() => setCategory("Computers & Laptops")} style={{marginLeft:"50px"}}> Laptops</span>
              </div>
              <div className="option">
                <img src="https://m.media-amazon.com/images/I/71nvkHnPpZL._SX679_.jpg" alt="Mobile Phone" className="w-48" style={{marginLeft:"30px",marginRight:"10px" ,width:"100px",height:"80px",borderRadius:"20px"}}/>
                <span onClick={() => setCategory("Mobile Phones")} style={{marginLeft:"10px"}}>Mobile Phones</span>
              </div>
              <div className="option">
                <img src="https://m.media-amazon.com/images/I/51ifriVUDKS._SY445_SX342_QL70_FMwebp_.jpg" alt="Mobile Phone" className="w-48" style={{marginLeft:"30px",marginRight:"10px" ,width:"100px",height:"80px",borderRadius:"20px"}}/>
                <span onClick={() => setCategory("Mobile Phones")} style={{marginLeft:"50px"}}>Tablets</span>
              </div>
              <div className="option">
                <img src="https://m.media-amazon.com/images/I/71eSMgH4MmL._SX522_.jpg" alt="Mobile Phone" className="w-48" style={{marginLeft:"30px",marginRight:"10px" ,width:"100px",height:"80px",borderRadius:"20px"}}/>
                <span onClick={() => setCategory("Mobile Phones")} style={{marginLeft:"30px"}}>MotorCycles</span>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      {/* { category!=null && <DynamicPosts category={category}/>  } */}
    </div>
  );
}

export default Banner;
