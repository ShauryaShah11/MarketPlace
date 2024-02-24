import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./Post.css";
// import { Firebase } from "../../firebase/config";
import BarLoading from "../../Loading/BarLoading";
// import PostCards from "../../Loading/";

// import { AllPostContext } from "../../contextStore/AllPostContext";

function Posts() {
  // const { setAllPost } = useContext(AllPostContext);
  let [posts, setPosts] = useState([]); //for showing all posts in Descending order of date
  let [posts2, setPosts2] = useState([]); //for showing all posts in Ascending order of date
  let [loading, setLoading] = useState(false);
  let [loading2, setLoading2] = useState(false)

  // quickMenuCards assign all cards of post item later it will be displayed
  //   let quickMenuCards = posts.map((product, index) => {
  //     return(<div className="quick-menu-cards" key={index}> <PostCards product={product} index={index} /> </div>);
  //   });

  //   let freshRecomendationCards = posts2.map((product, index) => { if(index<4) {
  //     return (<div className="fresh-recomendation-card" key={index}> <PostCards product={product} index={index} /> </div>);}
  //     return null 
  // });
  return (
    <div className="postParentDiv" style={{ backgroundColor: "#F5F5F5" }}>
      {posts && (
        <div className="moreView" style={{backgroundColor:"#F5F5F5"}}>
          <div className="heading" style={{backgroundColor:"#F5F5F5"}}>

            <span>Quick Menu</span>

            <Link to="./viewmore">
              {" "}

              <span>View more</span>{" "}
            </Link>

          </div>
          <div style={{ display: "flex" }}>
            <Card style={{ width: '10rem', marginLeft: "10px", marginRight: "10px" }}>
              <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem', marginLeft: "10px", marginRight: "10px" }}>
              <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem', marginLeft: "10px", marginRight: "10px" }}>
              <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem', marginLeft: "10px", marginRight: "10px" }}>
              <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem', marginLeft: "10px", marginRight: "10px" }}>
              <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem', marginLeft: "10px", marginRight: "10px" }}>
              <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '10rem', marginLeft: "10px", marginRight: "10px" }}>
              <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

          </div>
         
        </div>
      )}
      <div className="recommendations" style={{backgroundColor:"#F5F5F5"}}>
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="fresh-recomendation-cards cards">{loading2 ? <BarLoading /> : <></>}

          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>

              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>

              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>

              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src="https://etimg.etb2bimg.com/photo/101380711.cms" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>

              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Posts;
