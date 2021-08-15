import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductAPI from '../../api/productsAPI';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await ProductAPI.get(id);
        setProduct(data)
      } catch (err) {
        console.log(err)
      }
    }
    getProduct();
  }, [])
  const { name, price, image, description } = product


  return (
    <div>
      <div className="container" style={{ marginBottom: '7rem' }}>
        <div className="mt-4 p-3" style={{ backgroundColor: 'white', borderRadius: 6 }}>
          <div className="row">
            {/* ảnh sản phẩm */}
            <div className="col-md-6">
              <div className="">
                <img  src={`http://localhost:4000/api/product/readPhoto/${product._id}`} width="500px"/>
              </div>
            </div>
            {/* end ảnh sản phẩm */}
            <div className="col-md-6">
              <h2 style={{ textTransform: 'capitalize' }}>{product.name}</h2>
              <div className="p-1">
                <div>
                  <span style={{ color: 'red', fontWeight: 500, fontSize: 'x-large' }}>Giá : {product.price} <span><sup><u>đ</u></sup></span></span>
                </div>
                <div className="border-top mt-3" style={{ backgroundColor: 'white', borderRadius: 6 }}>
                  <div className="mt-3">
                    <p className="fs-5">Hãng sản xuất : <span style={{ fontWeight: 500 }}>{product.trademark}</span></p>
                  </div>
                  <label htmlFor="" style={{ marginTop: 12, fontSize: 'larger' }}>Kích thước : </label>
                  <span className="fs-5 ms-2 text-dark btn btn-outline-warning">36</span>
                  <span className="fs-5 ms-3 text-dark btn btn-outline-warning">37</span>
                  <span className="fs-5 ms-3 text-dark btn btn-outline-warning">38</span>
                  <span className="fs-5 ms-3 text-dark btn btn-outline-warning">39</span>
                  <span className="fs-5 ms-3 text-dark btn btn-outline-warning">40</span>
                  {/*Số lượng sản phẩm*/}
                  <div className="border-top mt-3">
                    <div className="mt-3">
                      <p className="fs-5">Trạng thái : <span style={{ fontWeight: 500 }}>{product.status == "true" ? "Còn hàng" : "Hết hàng"}</span></p>
                    </div>
                    <span className="span-chitiet mt-3">
                      <p className="mt-1 fs-5">Số lượng : </p>
                      <div className="family" style={{ marginTop: 11 }}>
                        <div className="buttons_added">
                          <input className="minus is-form" type="button" defaultValue="-" />
                          <input aria-label="quantity" className="input-qty" max={100} min={1} type="number" defaultValue={1} />
                          <input className="plus is-form" type="button" defaultValue="+" />
                        </div>
                      </div>
                    </span>
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="btn btn-outline-danger btn-themgiohang" name="add_cart">Thêm giỏ hàng</button>
                    <button className="btn btn-danger ms-3" type="submit" name="buy_cart">Mua hàng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mô tả */}
        <div className="description mt-4 mb-4 ms-3 me-3" style={{ backgroundColor: 'white', borderRadius: 6 }}>
          <h2 className="text-capitalize mb-2 text-center">Mô Tả Sản Phẩm</h2>
          <p className="p-3 mb-3 fs-5 border">{product.description}</p>
        </div>
        {/* end mô tả */}
        {/*Bình luận*/}
        <div className="comment p-3 mt-3" style={{ backgroundColor: 'white', borderRadius: 6 }}>
          <h2 className="text-capitalize">Bình luận</h2>
          <form className="row" action method="GET">
            <div className="form-group col-md-12">
              <input type="text" name="noi_dung" className="form-control" />
            </div>
            <div className="col-md-2 mt-1">
              <button type="submit" className="btn btn-primary" name>Gửi</button>
            </div>
          </form>
        </div>
      </div>

    </div>


  )
}

export default ProductDetail

