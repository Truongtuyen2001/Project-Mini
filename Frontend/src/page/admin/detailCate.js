import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const DetailCate = (props) => {
    const { id } = useParams();
    // console.log(id);
    // console.log(props.todos);
    const [list, setList] = useState([]);
    useEffect(() => {
        const DetailCate = async () => {
            const Detail = await props.todos.filter(item => item.category == id)
            setList(Detail);
        }
        DetailCate();
    }, [])
    console.log("o day ", list);
    return (
        <div>
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-4 ">
                    {list ? list.map((value, index) => {
                        return <div id="table" className="grid justify-items-center  col-3 py-3" style={{ padding: 5 }}>
                            <div className="card" style={{ textAlign: 'center', padding: 5, width: 280 }}>
                                <div className="text-center px-10">
                                    <img src={`http://localhost:4000/api/product/readPhoto/${value._id}`} width="200px" />
                                </div>
                                <div className="card-body" >
                                    <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: 16, margin: '30px 0' }}>{value.name}</h5>
                                    <p style={{ fontWeight: 'bold', color: '#eb1f27', fontSize: 18 }} className="card-text">{value.price}VNĐ</p>
                                    <Link to={`/products/${value._id}`}><button className="btn btn-info ">Xem thêm</button></Link>
                                </div>
                            </div>
                        </div>

                    }) : ''}

                </div>
            </div>
        </div>
    )
}

export default DetailCate
