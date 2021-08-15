import React from 'react'
// import TodoAdd from '../../conponents/TodoAdd'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const Add = (props) => {
 
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        props.onAdd(data);
        
        history.push('/admin/list');
    }

    return (
        <div>

            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.name ? 'border border-danger ' : ''}`}
                            id="product-name"
                            placeholder="Tên sản phẩm"
                            {...register('name', { required: true })}
                        />
                        <label htmlFor="product-name"> Tên sản phẩm</label>
                        {errors.name && <span className="text-danger">Yêu cầu nhập vào</span>}

                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.price ? 'border border-danger ' : ''}`}
                            id="product-price"
                            placeholder="Giá sản phẩm"
                            {...register('price', { required: true })}
                        />
                        <label htmlFor="product-price"> Giá sản phẩm</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.description ? 'border border-danger ' : ''}`}
                            id="product-description"
                            placeholder="Mô tả sản phẩm"
                            {...register('description', { required: true })}
                        />
                        <label htmlFor="product-description"> Mô tả</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="file"
                            className={`form-control ${errors.image ? 'border border-danger ' : ''}`}
                            id="product-image"
                            placeholder="Giá sản phẩm"
                            {...register('image', { required: true })}
                        />
                    </div>

                    <select {...register('category', { required: true })}>
                        {props.cate.map((item, index) =>
                            <option className="tW-font-bold" key={index} value={item._id}>{item.name.toUpperCase()}</option>
                        )}
                    </select>
                    <div className="text-center py-3">
                        <button className="btn btn-success px-4">Add Product</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Add
