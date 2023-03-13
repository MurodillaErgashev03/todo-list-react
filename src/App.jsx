import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { toastError, toastSuccess } from "./utils/toast";


export default function App() {

  const [title, setTitle] = useState("");



  const [posts, setPosts] = useState([
   
  ]);

  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      return toastError("Please fill all the fields");
    }

    const newPost = {
      id: Date.now(),
      title,
    };

    setPosts([...posts, newPost]);
    toastSuccess("Post added succesfully");
  };

  const handleDelete = (id, title) => {
    setPosts(posts.filter((post) => post.id !== id));
    toastSuccess(`${title} deleted`);
  };




  return (





    <div  className="container">
    <div>
    <h2 className='title'>
          Sizning rejalaringiz:
         </h2>
       <form  onSubmit={hanldeSubmit} className='form'>
        <input   onChange={(e) => setTitle(e.target.value)} className='input' type="text" placeholder='Title' />
       <button className='btn btn-info submit'>Submit</button>
       </form>
          <ul   className='list-group'>
          {posts.map((post)=>{
            return (
              <li key={post.id}  className='list-group-item'>
              <h3 className='card-title'>{post.title}</h3>
              <div className='btn-block'>
                <button className='btn edit btn-info'>Edit</button>
                <button    onClick={() => handleDelete(post.id, post.title)} className='btn btn-danger'>Delete</button>
              </div>
           </li>
            )
          })}
           
        </ul>
    </div>
 
    </div>
  );
}

