import { useState } from "react";
import style from "./itemStyle.module.css";
import UpdateFromComponent from "./updateform/updateForm";
export default function ItemComponent({
  title,
  userId,
  Id,
  handleDeleteAlbum,
  handleUpdateAlbum,
}) {
  const [modify, setModify] = useState(false);
  const [updateAlbumForm, setUpdateAlbumForm] = useState(false);
  // Show modification
  function handleModify() {
    setModify(!modify);
  }

  // show Update Form
  function handleShowUpdateForm() {
    if(modify)setModify(!modify);
    setUpdateAlbumForm(!updateAlbumForm);
  }

  // function to pass id to handleDeleteAlbum Function and setting modify to false
  function deleteAlbum() {
    setModify(!modify); // it will keep track that the modify icon does not visible even after deletion
    handleDeleteAlbum(Id);
  }

  return (
    <>
      <div className={style.item}>
        <div className={style.moreOption}>
          <img
            className={style.image}
            onClick={handleModify}
            src="https://t3.ftcdn.net/jpg/04/04/25/36/240_F_404253660_9PHYb2HcUzeFAXDAQ6z6sWBktUGrxBox.jpg"
            alt="loading..."
          />

          {/* Modification*/}
          {modify ? (
            <div className={style.modification}>
              {/* Update */}
              <p
                style={{
                  borderBottom: "1px",
                  borderBottomColor: "black",
                  borderBottomStyle: "solid",
                }}
                className={style.update}
                onClick={handleShowUpdateForm}
              >
                Update
              </p>
              {/* Delete */}
              <p onClick={deleteAlbum} className={style.delete}>
                Delete
              </p>
            </div>
          ) : (
            false
          )}
        </div>
        <p className={style.Title}>{title}</p>
        <hr />
        <div className={style.ids}>
          <p>userId: {userId}</p>
          <p>Id: {Id}</p>
        </div>
      </div>

      {/* UpdateForm */}
      {updateAlbumForm && (
        <UpdateFromComponent 
        handleShowUpdateForm={handleShowUpdateForm}
        handleUpdateAlbum={handleUpdateAlbum}
        title={title}
        userId={userId}
        id={Id}
         />
      )}
    </>
  );
}
