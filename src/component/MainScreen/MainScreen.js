import Trash from "../../assets/trash-icon.svg";
import Change from "../../assets/change-icon.svg";
import React, { useState } from "react";
import "./mainScreen.css";
import ReactModal from "react-modal";
import CustomStyles from "./CustomStyles.css";

const MainScreen = () => {
  const [selectedEditId, setSelectedEditedId] = useState("");
  const [post, setNewPost] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const openModal = () => {
    window.confirm("Are you sure you want to edit this post?");
    setIsOpen(true);
  };

  const handleEditPost = (e) => {
    e.preventDefault();
    setNewPost((prev) =>
      prev?.map((item) =>
        item.id === selectedEditId
          ? {
              ...item,
              content: editContent,
              title: editTitle,
            }
          : item
      )
    );
    
    setIsOpen(false);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setNewPost([
      ...post,
      {
        id: Math.random() * 700,
        title,
        content,
      },
    ]);
  };

  const deletePost = (id) => {
    let deleteConfirm = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (deleteConfirm) {
      setNewPost(post.filter((pst) => pst.id !== id));
    }
  };



  return (
    <>
      <div className="container">
        <div className="container-main-tittle">
          <h3>To make a post!</h3>
        </div>
        <div className="form-control">
          <h3 className="form-control-h3">What's on your mind</h3>
          <form onSubmit={handlePostSubmit}>
            <label>Title</label>
            <input
              type="text"
              className="form-control-tittle"
              placeholder="Tittle"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>
              <p>Content</p>
            </label>
            <textarea
              type="text"
              className="form-control-content"
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              className="form-control-btn"
              type="submit"
              disabled={title.length > 15 || content.length < 3}
            >
              CREATE
            </button>
          </form>
        </div>
        <div className="post">
          <div className="post-tittle">
            {post?.map((item) => (
              <>
                <header>
                  <h3>{item.title}</h3>
                  <p>{post.content}</p>
                  <div className="icons">
            { <>
            <img src={Trash} onClick={() => deletePost(item.id)}  alt="trash-icon" id="trash-icon" />
            <img src={Change} onClick={openModal} alt="change-icon" id="change-icon"/>
            </>}
            </div>
                </header>
                <div className="post-content">
                  <p>{item.content}</p>
                </div>
              </>
            ))}
          </div>
         
        </div>
      </div>
      <ReactModal
        openModal={openModal}
        isOpen={modalIsOpen}
        style={CustomStyles}
        contentLabel="Example Modal"
      >
        <div className="modal">
          <form onClick={(id) => handleEditPost}>
            <h3 className="modal-title">Edit item</h3>
            <label className="modal-title">Title</label>
            <input
              className="modal-input-title"
              type="text"
              placeholder="Nome"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label className="modal-content">Content</label>
            <textarea
              className="modal-input-content"
              placeholder="Conteúdo"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
            <button
              disabled={editTitle.length < 3 || editContent.length < 3}
              className="modal-edit-button"
              type="submit"
            >
              <p>SAVE</p>
            </button>
          </form>
        </div>
      </ReactModal>
    </>
  );
};

export default MainScreen;
