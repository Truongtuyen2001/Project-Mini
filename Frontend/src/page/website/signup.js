import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { API } from '../../config';
import { Link } from 'react-router-dom';
import auth from '../../api/auth';
const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {
    auth.signup(data).then(() => { // gọi signup trong api
      e.target.reset()
      setError("");
      setSuccess(true)
    }).catch(error => setError(error.response.data.error));

  }

  const showError = () => {
    return <div className="alert alert-danger" style={{ display: error ? "block" : " none" }}>
      {error}
    </div>
  }
  const showSucces = () => {
    return <div className="alert alert-info" style={{ display: success ? "block" : "none" }}>
      Tạo tài khoản thành công <Link to="/website/signin">Đăng nhập</Link>
    </div>
  }
  const signUpForm = () => {
    return (
      <>
        {showError()}
        {showSucces()}

        <div className="pt-5">
          <div className="card container pt-3" style={{ width: 800, }}>
            <div className="text-center fs-4">Đăng kí tài khoản</div>
            <div className="card-body " >
              <form onSubmit={handleSubmit(onSubmit)} id="form-singup" action method="post">

                <div className="input-group w-200 ">
                  <span className="input-group-text " id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                  </span>
                  <input type="text"
                    htmlFor="name"
                    className="form-control"
                    {...register('name', { required: true })}
                    placeholder="Please enter your username"
                    aria-label="Input group example"
                    aria-describedby="basic-addon1" />
                </div>


                <div className="input-group w-200 mt-4">
                  <span className="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                    </svg>
                  </span>
                  <input type="email"
                    htmlFor="email"
                    className="form-control"
                    {...register('email', { required: true })}
                    placeholder="Please enter your email"
                    aria-label="Input group example"
                    aria-describedby="basic-addon1" />
                </div>


                <div className="input-group w-200 mt-4">
                  <span className="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    </svg>
                  </span>
                  <input type="password"
                    htmlFor="password"
                    className="form-control"
                    {...register('password', { required: true })}
                    placeholder="Please enter your password"
                    aria-label="Input group example"
                    aria-describedby="basic-addon1" />
                </div>
                <div className="text-center pt-3 py-3">
                  <button className="btn btn-sm btn-primary " type="submit"> Đăng kí</button>

                </div>
              </form>
            </div>

          </div>
        </div>

      </>
    )
  }

  return (
    <div>
      {signUpForm()}

    </div>

  )
}

export default Signup
