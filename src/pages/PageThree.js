import React, { useState } from "react";
import { collection, addDoc, setDoc } from "firebase/firestore/lite";
import { firestore } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage,auth   } from "../config/firebase";


import {

  
  signOut
  
  
} from "firebase/auth";
import { withRouter } from "react-router-dom";



const PageThree = (props) => {
  const [title, setTitle] = useState("");
  const [disc, setDics] = useState("");
  const [price, setPrice] = useState(0);
  const [categ, setCateg] = useState("");
  const [image, setImage] = useState(null);

  //   const collectionName = "users";
  //   const docsCollectionRef = collection(firestore, collectionName);

  const uploadImg = (e) => {
    e.preventDefault();

    if (!image) return;
    const imagesRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(imagesRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          addProduct(downloadURL);
        });
      }
    );
  };

  const addProduct = async (downloadURL) => {
    let formData = { title, disc, price, categ, image: downloadURL };

    try {
      const docRef = await addDoc(collection(firestore, "products"), formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const logoutUser = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
       
        
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
      props.history.push("/page-cta")
  };
  
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <form className="row g-3 mt-3 mx-3 mb-3" onSubmit={uploadImg}>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    <b>Title</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    <b>Discription</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    onChange={(e) => {
                      setDics(e.target.value);
                    }}
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    <b>Price</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="$"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>

                {/* <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div> */}
                <div className="col-md-4">
                  <label for="inputState" className="form-label">
                    State
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    onChange={(e) => {
                      setCateg(e.target.value);
                    }}
                  >
                    <option selected>Men</option>
                    <option>Women</option>
                  </select>
                </div>
                <div className="col-md-2.5">
                  <label for="inputZip" className="form-label">
                    File Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputZip"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className="col-12"></div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary mx-5 "
                    onClick={() => props.history.push("page-two")}
                  >
                    Sign in
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary mx-5"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(PageThree);
