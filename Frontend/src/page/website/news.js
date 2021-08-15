import React from 'react'

const News = () => {
    return (
        <div>
            <h2 className="text-center text-3xl">Tin tức nổi bật</h2>
            <div className="container flex justify-around ">
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center flex justify-around ">
                    <div className="col-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body ">
                                <a href> <img src="https://giaycaosmartmen.com/wp-content/uploads/2021/01/nghe-si-chi-trung-ket-hop-smartmen-2-430x290.jpg" alt className="w-100" /> </a>
                                <h1 className="card-title pricing-card-title"> <p style={{ fontSize: 20, textDecoration: 'none', textAlign: 'justify' }}>Nhân dịp sắp nói lời tạm biệt năm Canh Tý (2020) để chào đón năm mới Tân Sửu (2021), Smartmen đã kết hợp cùng với nghệ sĩ Chí Trung và “tung’ ra clip “Táo giao thông và Bắc Đẩu bắn rap quá đẳng cấp”.</p>
                                </h1>
                                <button className="btn btn-warning">  <a style={{ color: 'blue', textDecoration: 'none' }} href="/#/news1/">Xem thêm</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <a href><img src="https://giaycaosmartmen.com/wp-content/uploads/2021/02/co-nen-tang-giay-cho-nguoi-yeu-430x290.jpg" alt className="w-100" /> </a>
                                <h1 className="card-title pricing-card-title"> <p style={{ fontSize: 20, textDecoration: 'none', textAlign: 'justify' }}>Xịt khử mùi giày là vật dụng đang được lựa chọn và sử dụng nhiều trong giới yêu giày. Bạn tự đặt ra câu hỏi liệu có nên dùng loại xịt này hay không</p>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <a href> <img src="https://giaycaosmartmen.com/wp-content/uploads/2021/02/dac-diem-giay-cong-so-smartmen-430x290.jpg" alt className="w-100" /> </a>
                                <h1 className="card-title pricing-card-title"> <p style={{ fontSize: 20, textDecoration: 'none', textAlign: 'justify' }}>Ý nghĩa của việc tặng giày? Có nên tặng giày cho người yêu hay không?"</p>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default News
