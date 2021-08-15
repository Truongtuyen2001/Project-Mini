import React from 'react'
import { Link } from 'react-router-dom';
const ProductPage = (props) => {
    const todoList = props.todos;
    const onHandleClick = (id) => {
        props.onRemove(id);

    }
    return (
        <div className="container">
        <div className="pt-3">
            <img src="image/background4.jpg" width = "100%"></img>
        </div>
 
                <div className="pt-3">
                    <div className="all-summary border p-3 mb-2 bg-light text-dark ">
                        <div className="summary_content_filter description">
                            <p>Cùng khám phá những mẫu đồng hồ nam đẹp nhất từ các thương hiệu đồng hồ nam giá rẻ như Orient, Seiko, Citizen, Ogival, OP, Bentley, Festina, Freelook, Bulova, Srwatch.. đến các hãng đồng hồ nam cao cấp Thụy Sĩ như Ogival, Elixa, Michael Kors... được <strong>Xwatch</strong> phân phối để lựa chọn tri kỷ thời gian và khẳng định phong cách thời trang của riêng mình.</p>
                            <p>Duy nhất khi mua đồng hồ nam tại shop đồng hồ Xwatch, bạn sẽ được hưởng chế độ bảo hiểm đồng hồ 5 năm <strong>CẢ LỖI NGƯỜI DÙNG</strong> cùng cam kết 100% <strong>ĐỒNG HỒ CHÍNH HÃNG</strong> - Đền gấp 10 lần nếu phát hiện <em>đồng hồ Fake</em>.</p>
                        </div>

                    </div>
                </div>

                <div className="row pt-4">
                    <div className="col-3 ">
                        <div className="row pt-3">
                            <div className="col">

                                <div className="pt-2">
                                    <div className="card">
                                        <div className="card-header">Thương hiệu</div>
                                        <div className="col-md-9 col-form-label">
                                            <div className="form-check checkbox py-2 mx-2">
                                                <input className="form-check-input" id="check1" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check1">OP Olym Pianus - Olympia Star</label>
                                            </div>
                                            <div className="form-check checkbox py-2 mx-2">
                                                <input className="form-check-input" id="check2" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check2">Orient</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check3" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check3">Bentley</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check4" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check4">Ogival</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check5" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check5">Citizen</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check6" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check6">Freelook</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check7" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check7">SRWATCH</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check8" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check8">Elixa</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check9" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check9">Festina</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check10" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check10">Seiko</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check11" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check11">Bulova</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="card">
                                        <div className="card-header">Mức giá</div>
                                        <div className="col-md-9 col-form-label">
                                            <div className="form-check checkbox py-2 mx-2">
                                                <input className="form-check-input" id="check12" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check12">Từ 2 triệu - 5 triệu</label>
                                            </div>
                                            <div className="form-check checkbox py-2 mx-2">
                                                <input className="form-check-input" id="check13" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check13">Dưới 2 triệu</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check14" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check14">Từ 5 triệu - 10 triệu</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check15" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check15">Từ 10 triệu - 20 triệu</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check16" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check16">Từ 20 triệu - 50 triệu</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check17" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check17">Từ 50 triệu - 100 triệu</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check18" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check18">Trên 100 triệu</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="card">
                                        <div className="card-header">Size mặt</div>
                                        <div className="col-md-9 col-form-label">
                                            <div className="form-check checkbox py-2 mx-2">
                                                <input className="form-check-input" id="check19" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check19">Dưới 30 mm</label>
                                            </div>
                                            <div className="form-check checkbox py-2 mx-2">
                                                <input className="form-check-input" id="check20" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check20">Từ 30mm - 34mm</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check21" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check21">Từ 35mm - 39mm</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check22" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check22">Từ 40mm - 43mm</label>
                                            </div>
                                            <div className="form-check checkbox  py-2 mx-2">
                                                <input className="form-check-input" id="check23" type="checkbox" defaultValue />
                                                <label className="form-check-label" htmlFor="check23">Trên 43mm</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row row-cols-2 row-cols-lg-4 ">
                            {todoList ? todoList.map((value, index) => {
                                return <div id="table" className="grid justify-items-center  col-3 py-3" style={{ padding: 5 }}>
                                    <div className="card" style={{ textAlign: 'center', padding: 5, width: 230 }}>
                                        <div className="text-center px-10">
                                            <img src={`http://localhost:4000/api/product/readPhoto/${value._id}`} width="200px" />
                                        </div>
                                        <div className="card-body" >
                                            <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: 16, margin: '30px 0' }}>{value.name}</h5>
                                            <p style={{ fontWeight: 'bold', color: '#eb1f27', fontSize: 18 }} className="card-text">{value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}VNĐ</p>
                                            <Link to={`/products/${value._id}`}><button className="btn btn-info ">Xem thêm</button></Link>
                                        </div>
                                    </div>
                                </div>

                            }) : ''}

                        </div>
                    </div>
                </div>

        </div>
            )
}

            export default ProductPage
