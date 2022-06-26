import React from 'react'

function PageTwo() {
 
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <form class="row g-3 mt-3 mx-3 mb-3" >
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    <b>UserName</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    <b>Address</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                   
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputAddress"
                    placeholder="email"
                   
                  />
                </div>

                <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">
                    State
                  </label>
                  <select
                    id="inputState"
                    class="form-select"
                    
                  >
                    <option selected>Men</option>
                    <option>Women</option>
                  </select>
                </div>
               
                <div class="col-12"></div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary ">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default PageTwo