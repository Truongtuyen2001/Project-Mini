import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const ListCategory = ({ cate, onRemoveCate }) => {
    const remove = (id) => {
        onRemoveCate(id)
    }
    return (
        <div>
            <Link className="btn btn-warning" to="/admin/addCategory">Thêm danh mục</Link>
            <table className="container-fluid table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cate ? cate.map((value, index) => {

                        return (
                            <tr key={index}>
                                <td className="">{value.name}</td>
                                <td className=""><img src={`http://localhost:4000/api/category/photo/${value._id}`} width="100px" /></td>
                                <td>
                                    <Link to={`/admin/edit-cate/${value._id}`} className="btn btn-primary me-2">Sửa</Link>
                                    <button className="btn btn-danger my-2" onClick={() => remove(value._id)}>xoá</button>
                                    <Link to={`/admin/category/${value._id}`} className="btn btn-success me-2">Detail</Link>
                                </td>
                            </tr>)
                    }
                    ) : ''}


                </tbody>


            </table>
        </div>
    )
}

export default ListCategory
