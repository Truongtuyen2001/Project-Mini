import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const List = (props) => {
    // console.log('props', props)
    const onHandleClick = (id) => {
        props.onRemove(id)
    }
    return (
        <>
            <Link className="btn btn-warning" to="/admin/add">Thêm sản phẩm</Link>
            {props.todos && (
                <table className="container-fluid table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Cate</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.todos.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className="">{item.name}</td>
                                    <td className="">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</td>
                                    <td className=""><img src={`http://localhost:4000/api/product/readPhoto/${item._id}`} width="100px" /></td>
                                    {/* <td className="">{item.description}</td> */}
                                    <td className="">
                                        {props.cate.map((element, index) => {
                                            if (element._id === item.category) {
                                                return element.name
                                            }
                                        })}
                                    </td>

                                    <td>
                                        <button className="btn btn-danger mx-2 " onClick={() => onHandleClick(item._id)} >Xoá</button>
                                        <Link to={`/admin/edit/${item._id}`}><button className="btn btn-success my-2">Sửa</button></Link>
                                    </td>
                                </tr>)
                        }
                        )}
                    </tbody>
                </table>
            )}

        </>

    )
}

export default List
