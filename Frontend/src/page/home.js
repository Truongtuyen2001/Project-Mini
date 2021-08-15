import React from 'react'
import { API } from '../config'
import Footer from '../conponents/Footer'


const HomePage = () => {
  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-6 border-bottom ">
        <div id="carouselExampleControls" className="carousel slide container-fluid py-4" data-bs-ride="carousel">
          <div className="carousel-inner" />
          <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + "image/background1.jpg"} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + "image/background2j.jpg"} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + "image/background3.jpg"} className="d-block w-100" alt="..." />
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" />
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" />
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </div>
      </div>
   
       
       <div className=" yellow-300 fs-3 text-center gap-4">Danh Mục</div>
      <div className="container bg-dark px-3">
        <div className="row row-cols-4 mx-4 my-5 px-3 py-5">
          <div className="col ">
            <img src="image/danh5.jpg" width="200px" height="200px"></img>
          </div>
          <div className="col">
            <img src="image/apple1.jpg" width="200px" height="200px"></img>
          </div>
          <div className="col">
            <img src="image/danh2.jpg" width="200px" height="200px"></img>
          </div>
          <div className="col">
            <img src="image/danh4.png" width="200px" height="200px"></img>
          </div>
        </div>
      </div>
     {/* <div className="container">
  <div className="row g-2">
    <div className="col-6">
      <div className="p-3 border bg-light">
         <img src="image/danh5.jpg" width="200px" height="200px"></img>
      </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light text-centet">
         <img src="image/apple1.jpg" width="200px" height="200px"></img>
      </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
          <img src="image/danh2.jpg" width="200px" height="200px"></img>
      </div>
    </div>
    <div className="col-6">
      <div className="p-3 border bg-light">
          <img src="image/danh4.png" width="200px" height="200px"></img> 
      </div>
    </div>
  </div>
</div> */}



      <div className="wrapper">
        <div className="container ">
          <div className="row w-auto gap-5">
            <h1 className="fs-5 text text-center gap-5  pt-4 text-uppercase">Đồng hồ nam</h1>
            <div className="col text-center ">
              <img src="image/end1.jpg" alt width="300px" height="400px"/>
            </div>
            <div className="col text-center">
              <img src="image/image7.jpg" alt width="100px" className="w-75" />
              <div className>
                san pham noi bat
        </div>
              <div className>
                23000000D
        </div>
        <div className="pt-3">
             <button className = "btn btn-info text-white fw-bold "> Mua ngay </button>
        </div>
            </div>
            <div className="col text-center">
              <img src="image/image7.jpg" alt width="100px" className="w-75" />
              <div className>
                san pham noi bat
        </div>
              <div className>
                23000000D
        </div>
        <div className="pt-3">
             <button className = "btn btn-info text-white fw-bold "> Mua ngay </button>
        </div>
            </div>
            <div className="col  text-center">
              <img src="image/image7.jpg" alt width="100px" className="w-75" />
              <div className>
                san pham noi bat
        </div>
              <div className>
                23000000D
        </div>
        <div className="pt-3">
             <button className = "btn btn-info text-white fw-bold "> Mua ngay </button>
        </div>
            </div>

          </div>


          <div className="row w-auto gap-5">
            <h1 className="fs-5 text text-center gap-5 text-uppercase pt-4 text-start">Đồng hồ nữ</h1>
            <div className="col text-center">
              <img src="image/nu1.jpg" alt width="100px" className="w-75" />
              <div className>
                san pham noi bat
          </div>
              <div className>
                23000000D
           </div>
           <div className="pt-3">
             <button className = "btn btn-info text-white fw-bold "> Mua ngay </button>
        </div>
            </div>
            <div className="col text-center">
              <img src="image/nu1.jpg" alt width="100px" className="w-75" />
              <div className>
                san pham noi bat
        </div>
              <div className>
                23000000D
        </div>
        <div className="pt-3">
             <button className = "btn btn-info text-white fw-bold "> Mua ngay </button>
        </div>
            </div>
            <div className="col  text-center">
              <img src="image/nu1.jpg" alt width="100px" className="w-75" />
              <div className>
                san pham noi bat
        </div>
              <div className>
                23000000D
        </div>
        <div className="pt-3">
             <button className = "btn btn-info text-white fw-bold "> Mua ngay </button>
        </div>
            </div>
            <div className="col text-center ">
              <img src="image/end2.jpg" alt width="300px" height="400px"/>
            </div>

          </div>

         
        </div>
      </div>
    </>

  )



}


export default HomePage
