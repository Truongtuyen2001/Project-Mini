import React from 'react';
import { Link } from 'react-router-dom';
// import {isAuthenticated} from '../../api/auth';
import { isAuthenticated } from '../../api/auth';

const UserDashboard = () => {
    const { user } = isAuthenticated();
        console.log(user);
    return (
        <div>

            <div className="container pt-5">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header"> Thanh toán</div>
                        <ul className="list-group">
                            <li className="list-group-item"> <Link to="/cart"> Giỏ hàng</Link></li>
                            <li className="list-group-item"> <Link to="/profile"> Thông tin </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-header"> Thông tin user</div>
                        <ul className="list-group">
                            <li className="list-group-item">Name : {user.name}</li>
                            <li className="list-group-item">Email : {user.email}</li>
                            <li className="list-group-item">{user.role == 1 ? 'Admin' : 'Resgister user'}</li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default UserDashboard
