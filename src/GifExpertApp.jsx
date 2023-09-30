import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   const [categories, setCategories] = useState([]);
   
   const onAddCategory =(newCategory)=>{
        if (categories.includes(newCategory)) return;
        // console.log(newCategory);
        // console.log(newCategory);
        setCategories([newCategory,...categories])
   }
//    console.log(categories);
    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory={e=>onAddCategory(e)}
        //  setCategories={setCategories}
         />
 
            {
                categories.map(category=>(<GifGrid key={category} category={category}/>))
            }
    </>)
}
