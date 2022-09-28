import React from "react";
import "../mainScreen/mainScreen.css";
import Trash from "../../../component/img/trash-icon.svg";
import Change from "../../../component/img/change-icon.svg";

const EditScreen = () => {
  return (
    <>
      <div className="container-post">
        <div className="container-post-tittle">
          <h3>My first post at Codeleap Network</h3>
          <img src={Trash} alt="trash-icon" id="trash-icon" />
          <img src={Change} alt="change-icon" id="change-icon" />
        </div>
        <div className="form-content">
          <div className="post">
            <main>
             
            </main>
          </div>

          <div className="container-tittle">
            <h3>Another post here</h3>
          </div>
          <div className="form-content-another"></div>
        </div>
      </div>
    </>
  );
};

export default EditScreen;
