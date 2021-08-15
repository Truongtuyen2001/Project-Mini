import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import CategoryApi from '../../api/categoryAPI';
import { useHistory } from 'react-router-dom';

const EditCategory = (props) => {
    let history = useHistory();
    let { id } = useParams();
    const [category, setCategory] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        const callAPI = async () => {
            try {
                const { data: category } = await CategoryApi.get(id);
                setCategory(category);
            } catch (error) {
                console.log(error);
            }
        }
        callAPI();
    }, [])
    const onSubmit = (data) => {
        props.onEditCate(data, id); 
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.name ? 'border border-danger ' : ''}`}
                            id="category-name"
                            defaultValue={category ? category.name : ''}
                            placeholder="Tên danh mục"
                            {...register('name', { required: true })}
                        />
                        <label htmlFor="category-name"> Tên danh mục
                        </label>
                        {errors.name && <span className="text-danger">Yêu cầu nhập vào</span>}

                    </div>


                    <div className="form-floating mb-3">
                        <input type="file"
                            className={`form-control ${errors.price ? 'border border-danger ' : ''}`}
                            id="category-image"
                            // defaultValue={ category ? category.image : ''}
                            placeholder="Ảnh danh mục"
                            {...register('image', { required: false })}
                        />

                    </div>

                    <button className="btn btn-danger">Submit</button>


                </div>
            </form>
        </div>
    )
}

export default EditCategory
