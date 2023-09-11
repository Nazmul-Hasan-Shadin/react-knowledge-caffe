import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from "prop-types"

const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
    const [blogs,setBlogs]= useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h1 className="text-4xl">Blogs:{blogs.length} </h1>

            {
                blogs.map(blog=><Blog 
                    handleMarkAsRead={handleMarkAsRead}
                    handleAddToBookMark={handleAddToBookMark}
                    blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookMark:PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;