import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const AddCategory = (props) => {
    
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const newCategory = { ...data }
        props.onAddCategory(newCategory);
        history.push('/admin/listCategory');
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.name ? 'border border-danger ' : ''}`}
                            id="category-name"
                            placeholder="Tên danh mục"
                            {...register('name', { required: true })}
                        />
                        <label htmlFor="product-name"> Tên danh mục</label>
                        {errors.name && <span className="text-danger">Yêu cầu nhập vào</span>}

                    </div>


                    <div className="form-floating mb-3">
                        <input type="file"
                            className={`form-control ${errors.image ? 'border border-danger ' : ''}`}
                            id="category-image"
                            placeholder="Ảnh danh mục"
                            {...register('image', { required: true })}
                        />
                    </div>

                    <div className="text-center py-3">
                        <button className="btn btn-success px-4">Add Category</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default AddCategory
