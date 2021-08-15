import './App.css';
import React, { useState, useEffect } from 'react';
import Routers from './Routers'
import ProductAPI from './api/productsAPI'
import CategoryApi from './api/categoryAPI';

function App() {

  // list product
  const [list, setList] = useState([])
  useEffect(() => {
    const listProd = async () => {
      const { data: products } = await ProductAPI.getAll()
      setList(products)
    }
    listProd();
  }, [])

  // add product
  const onHandleAdd = async (todo) => {
    try {
      let { name, price, description, image, category } = todo;
      let form = new FormData();
      form.append('name', name);
      form.append('price', price);
      form.append('photo', image[0]);
      form.append('description', description)
      form.append('category', category)

      const Respose = await ProductAPI.add(form)
      if (Respose) {
        const { data: products } = await ProductAPI.getAll()
        setList(products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // delete product
  const onHandleRemove = async (id) => {
    let confirmRemove = window.confirm('Bạn có muốn xoá không');
    if (confirmRemove) {
      try {
        const pro = await ProductAPI.remove(id)
        if (pro) {
          const { data: products } = await ProductAPI.getAll()
          // console.log(products);
          setList(products)
        }
      } catch (error) {
        console.log(error)
      }
    }

  }
  //edit product
  const editProduct = async (id, product) => {
    try {
      let { name, price, description, image, category } = product;
      let form = new FormData();
      form.append('name', name);
      form.append('price', price);
      if (image.length) {
        form.append('photo', image[0]);
      }
      form.append('description', description)
      // form.append('category',category)
      const Respose = await ProductAPI.update(id, form)
      if (Respose) {
        const { data: products } = await ProductAPI.getAll();
        setList(products)
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }
  // hết product

  // category
  //list
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const ListCategory = async () => {
      try {
        const { data: cate } = await CategoryApi.getAll();
        setCategories(cate);
      } catch (err) {
        console.log(err);
      }
    }
    ListCategory();
  }, [])

  //add
  const onAddCategory = async (item) => {
    try {
      let { name, image } = item
      const newCate = new FormData();
      newCate.append('name', name)
      newCate.append('photo', image[0])
      const response = await CategoryApi.add(newCate);
      if (response) {
        const { data: category } = await CategoryApi.getAll()
        setCategories(category)
      }
    } catch (error) {
      console.log(error);
    }
  }
  //edit
  const onEditCate = async (category, id) => {
    try {
      const { data } = await CategoryApi.update(id, category);
      // console.log("owr day", data)
      // const newCategory = categories.map(category => (category._id === data._id ? data : category));

    } catch (error) {
      console.log(error);
    }
  }
  //remove
  const onRemoveCate = async (id) => {
    console.log(id);
    try {
      await CategoryApi.remove(id);
      const newCate = categories.filter(value => value._id !== id);
      setCategories(newCate);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div >
      <Routers
        todos={list.data}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onEdit={editProduct}
        // gọi lại hàm
        cate={categories}
        onAddCategory={onAddCategory}
        onEditCate={onEditCate}
        onRemoveCate={onRemoveCate}
      />


    </div>
  )
}
export default App;
