import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { signOut, isAuthenticated } from '../api/auth'
import { useLocation } from 'react-router-dom'
import CategoryApi from '../api/categoryAPI'
const Header = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    const { user } = isAuthenticated();
    const [category, setCategory] = useState([]);
    useEffect(() => {
        isAuthenticated() && setIsLogged(true)

        const list = async () => {
            try {

                const cate = await CategoryApi.getAll();
                setCategory(cate.data);

            } catch (error) {
                console.log(error);
            }
        }

        list();
    }, [pathname, isLogged])

    return (

        <div className="container-fluid ">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-6 border-bottom px-5">

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0  ">
                    <li><Link to="/" className="nav-link px-2 link-dark ">Trang chủ</Link></li>
                    <li><Link to="/list" className="nav-link px-2 link-dark  ">Sản phẩm</Link></li>
           {user && user.role == 1 ? <li><Link to="/admin/Dashboard" className="nav-link px-2 link-dark">Quản trị</Link></li> : ''}
                   
                        <a className="nav-link px-2 link-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Danh mục
                        </a>
                        <ul className="dropdown-menu ">
                            {category.map((item, index) => {
                                return (
                                    <li key={index}><Link className="text-decoration-none px-4 " to={`/website/categoryPage/${item._id}`}>{item.name}</Link></li>
                                 )
                            })}

                        </ul>
                   
                    <li><Link to="/website/contact" className="nav-link px-2 link-dark">Liên hệ</Link></li>
                </ul>
                <div className="text-center">
                    <img src={process.env.PUBLIC_URL + "image/logo_watchstore.jpeg"} width="200px" height="38px" />
                </div>


                <div className="col-md-3 text-end">
                    {!isLogged && (
                        <>
                            <Link to="/website/signup" className="me-2 "><button className="btn btn-outline-dark ">Đăng kí</button></Link>
                            <Link to="/website/signin" className="me-3"><button className="btn btn-outline-danger">Đăng nhập</button></Link>
                        </>
                    )}

                    {isLogged && (
                        <a className="col-md-2 text-end">

                            <button
                                className="btn btn-warning text-white fw-bold "
                                style={{ cursor: 'pointer' }}
                                onClick={() => signOut(() => {
                                    setIsLogged(false)
                                    history.push('/')
                                })}
                            >Đăng xuất</button>
                            <Link to={user?.role == 1 ? "/admin1/dashboard" : "/user/dashboard"} className="nav-link px-2 link-dark">
                                <button className="btn btn-info text-white fw-bold mx-6">Thông tin</button>
                            </Link>
                        </a>
                    )}

                </div>
            </header>
        </div>
    )
}

export default Header

