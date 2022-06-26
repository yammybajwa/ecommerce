import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../config/firebase";

const PageOne = (props) => {
console.log(props)
  const navigate = ()=>{
    props.history?.push("/page-two")
  }
  const [documents, setDocuments] = useState([]);
  // const [isLoading, setIsLoading] = useState(true)
  const collectionName = "products";
  const docsCollectionRef = collection(firestore, collectionName);

  const readDocs = async () => {
    let array = [];

    const querySnapshot = await getDocs(docsCollectionRef);
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log("document id => ", doc.id)
      // console.log("document data => ", doc.data())

      array.push({ ...doc.data(), id: doc.id });
    });

    setDocuments(array);
    // setIsLoading(false)
    console.log(array);
  };

  useEffect(() => {
    readDocs();
  }, []);

  return (
    <>
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Featured Products</h1>
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-auto">
                {documents.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="card border-0 mb-5"
                      style={{ width: "18rem" }}
                    >
                      <img
                        src={item.image}
                        className="card-img-top img-fluid"
                        alt="image"
                      />
                      <div className="card-body">
                        <h5 className="crad-text">{item.title}</h5>
                        <p className="card-text">{item.categ}</p>
                        <p className="card-text">{item.disc}</p>
                        <p className="card-text">{item.price}</p>
                        <div className="d-grid">
                          <button className="btn btn-success" onClick={navigate}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(PageOne);
