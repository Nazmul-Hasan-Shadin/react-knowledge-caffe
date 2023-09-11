import PropTypes from 'prop-types';
import { FaBeer,FaBookmark} from 'react-icons/fa';

const Blog = ({blog,handleAddToBookMark,handleMarkAsRead}) => {
  const {title,cover,id,reading_time,author_img,author,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4 '>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>

             <span>{reading_time} min read</span>
             <button onClick={()=>handleAddToBookMark(blog)} className='ml-2 text-red-600'><FaBookmark /></button>
                </div>
            </div>
             <h2 className='text-4xl'>{title} </h2>
             <p>
            {
               hashtags.map((hash,idx)=><span key={idx}>  <a href="">#{hash}</a> </span> ) 
            }

             </p>

             <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-600 font-bold underline' >Mark as Read</button>
        </div>
    );
};

Blog.propTypes= {
    blog:PropTypes.object.isRequired,
    handleAddToBookMark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;