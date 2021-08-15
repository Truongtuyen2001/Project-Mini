import React from 'react'

const Contact = () => {
    return (
        <div className="px-3">
  <div className="text-center fs-3  ">Liên hệ tới WatchStore</div>
  <div className="container">
    <div id="main" className="col-lg-12 col-md-12 col-sm-12">
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-12">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="mb-3">Shop đồng hồ uy tín WatchStore</h5>
              <p>Với sự đa dạng về mẫu mã và phong cách, chất lượng luôn đặt lên hàng đầu, 
                cùng với đó là giá cả phải chăng, thương hiệu Giày 
                Cao Smartmen ngày càng được nhiều quý khách hàng ưu tiên sử dụng.
                Điểm nhấn ấn tượng mà các sản phẩm giày của Smartmen được khách hàng đánh giá cao đó chính là sử dụng công nghệ đế kép, 
                giúp tăng 5cm chiều cao mà không lộ dáng hay đau chân khi di chuyển</p>
              <p>Địa chỉ: Lê Đức Thọ, Nam Từ Liêm, Hà Nội</p>
              <p>Điện thoại: 0973 321 745</p>
              <p>Email:tuyentdph11808@gmail.com</p>
              <hr />
              <h5 className="mb-3 mt-4">Shop đồng hồ uy tín WatchStore</h5>
              <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.2726235383593!2d105.76526454353443!3d21.032291570343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455986c2f2263%3A0x600178f26a953e20!2sKtx!5e0!3m2!1svi!2s!4v1599876934315!5m2!1svi!2s" width="100%" height="230px" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="mt-2 mb-2">Ý kiến góp ý của quý vị</h5>
              <p>Mọi ý kiến đóng góp, liên hệ, khiếu nại khác vui lòng điền đầy đủ thông tin và gửi đến chúng tôi. Bộ phận hỗ trợ khách hàng sẽ phản hồi sớm nhất khi nhận được thông tin.</p>
              <form id="contact" method="post" action="gui-gop-y.php" style={{border: '1px solid #ccc', borderRadius: 4, padding: '14px 30px'}}>
                <div className="form-group">
                  <label htmlFor="my-input">Họ và tên: </label>
                  <input id="full_name" className="form-control" type="text" name="full_name" />
                  <span className="form-message" />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="my-input">Địa chỉ: </label>
                  <input id="address" className="form-control" type="text" name="address" />
                  <span className="form-message" />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="my-input">Số điện thoại: </label>
                  <input id="phone" className="form-control" type="text" name="phone" />
                  <span className="form-message" />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="my-input">Email: </label>
                  <input id="email" className="form-control" type="text" name="email" />
                  <span className="form-message" />
                </div> 
                <br />
                <div className="form-group">
                  <label htmlFor="my-textarea">Nội dung: </label>
                  <textarea id="content" className="form-control" name="content" rows={8} defaultValue={""} />
                  <span className="form-message" />
                </div>
                <br />
                <button id="btn" className="btn btn-primary bg-green-399">Gửi tới Smartmen</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Contact
