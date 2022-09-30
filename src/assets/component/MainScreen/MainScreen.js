import Trash from "../../component/img/trash-icon.svg";
import Change from "../../component/img/change-icon.svg";
import React, { useState, useEffect } from "react";
import './mainScreen.css';



const MainScreen = ({openModal, setIsOpen }) => {

        const [tittle, setTittle] = useState('');
        const [post, setNewPost] = useState([]);
        const [content, setContent] = useState('');
        const [isButtonDisabled, setIsButtonDisabled] = useState(true);
        

        const  handleEditPost = (id) => {
          let editPost = window.confirm("Are you sure you want to edit this item?");
  
           if(editPost){
            post.map((pst) => pst.id === id);
           }
        }
        
    
const handlePostSubmit = (e) => {
     e.preventDefault();
      setNewPost([...post, {
        id: Math.random()*700,
        tittle,
        content}]);
      }

useEffect(() => {
   if (tittle.length <= 3 || content.length <= 3) {
       setIsButtonDisabled(true);
   }
   else {
       setIsButtonDisabled(false);
   }
}, [tittle, content]);

        
const deletePost = (id) => {
  let deleteConfirm = window.confirm("Are you sure you want to delete this item?");

  if(deleteConfirm){
      setNewPost(post.filter((pst) => pst.id !== id));
  }

}
    return (
      
      <div className="container">
      <div className="container-main-tittle"><h3>CodeLeap Network</h3></div>
        <div className="form-control">
          <h3 className="form-control-h3">What's on your mind</h3>


          <form onSubmit={handlePostSubmit} >
          <label>Tittle</label>
            <input
              type="text"
              className="form-control-tittle"
              placeholder="Tittle"
              onChange={(e) => setTittle(e.target.value)}
            />
            <label>Content</label>
            <textarea
              type="text"
              className="form-control-content"
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
           
            />
           
            <button className="form-control-btn" type="submit" disabled={isButtonDisabled}
             onClick={() => handlePostSubmit(tittle, content)}>POST IT!</button>
            
            </form>
            
          </div>

          <div className="post">
          <div className="post-tittle">
          {post?.map((item) => (<header>
            <h3>{item.tittle}</h3>
            <div className="icons">
            { <>
            <img src={Trash} onClick={() => deletePost(item.id)}  alt="trash-icon" id="trash-icon" />
            <img src={Change}  onClick={() => openModal} alt="change-icon" id="change-icon"/>
            </>}
            </div>
        
            </header>))}
          
            </div>
        
          
            <div className="post-content">
            {post?.map((item) =>
            <p>{item.content}</p>
            )}
            </div>

            <div className="edit-post">
            <form onSubmit={handleEditPost}>
            <label>Tittle</label>
            <input
              type="text"
              className="form-control-edit-tittle"
              placeholder="Tittle"
              onChange={(e) => setTittle(e.target.value)} />

            </form>
            </div>
            </div>
            </div>
        
       
      


);
};;
  
export default MainScreen;