import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import ProductAPI from '../../api/productsAPI';
import CategoryApi from '../../api/categoryAPI';


const Category = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [productByCategory, setProductByCategory] = useState([])
    // const [category, setCategory] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.getAll();
                setProduct(data.data)
                const { data: productsByCategory } = await ProductAPI.getProductByCateID(id)
                setProductByCategory(productsByCategory)
            } catch (err) {
                console.log(err)
            }
        }
        getProduct();
    }, [id])

    return (
        <>

            <div className="row row-cols-2 row-cols-lg-4 ms-4 pt-3 ">

                {productByCategory.map(item => {
                    return <div className="text-center card ms-4 mb-4" style={{ width: '21rem' }}>
                       <div className="text-center">
                          <img src={`http://localhost:4000/api/product/readPhoto/${item._id}`} width="200px" />
                       </div>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: 16, margin: '30px 0' }}>{item.name}</h5>
                            <p style={{ fontWeight: 'bold', color: '#eb1f27', fontSize: 18 }} className="card-text">{item.price}VNĐ</p>
                            <Link to={`/products/${item._id}`}><button className="btn btn-info ">Xem thêm</button></Link>
                        </div>
                    </div>
                })}
                {/* <div className="col d-flex">
                        {productByCategory.map(item => {
                            return <div id="table" className="grid justify-items-center  col-3 py-4" style={{ padding: 5 }}>
                                <div className="card" style={{ textAlign: 'center', padding: 5, width: 250 }}>
                                    <div className="text-center px-10">
                                        <img src={`http://localhost:4000/api/product/readPhoto/${item._id}`} width="200px" />
                                    </div>
                                    <div className="card-body" >
                                        <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: 16, margin: '30px 0' }}>{item.name}</h5>
                                        <p style={{ fontWeight: 'bold', color: '#eb1f27', fontSize: 18 }} className="card-text">{item.price}VNĐ</p>
                                        <Link to={`/products/${item._id}`}><button className="btn btn-info ">Xem thêm</button></Link>
                                    </div>
                                </div>
                            </div>

                        })}

                    </div> */}

            </div>
        </>

    )
}

export default Category
