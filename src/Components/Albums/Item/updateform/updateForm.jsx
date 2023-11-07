import { useState } from "react";
import style from "./style.module.css";
export default function UpdateFromComponent({
  handleShowUpdateForm,
  handleUpdateAlbum,
  title,
  userId,
  id,
}) {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedUserId, setUpdatedUserId] = useState("");

  function handleUpdateForm(e) {
    e.preventDefault()
    let newTitle;
    let newUserId;
    // checking what user want to update
    if (updatedTitle !== "") {
      newTitle = updatedTitle;
    } else {
      newTitle = title;
    }
    if (newUserId !== "") {
      newUserId = updatedUserId;
    } else {
      newUserId = userId;
    }
    handleUpdateAlbum(id,newUserId,newTitle);
    handleShowUpdateForm();
  }
  return (
    <>
      <div className={style.close} onClick={handleShowUpdateForm} title="close">
        X
      </div>
      <form className={style.Form} onSubmit={handleUpdateForm}>
        <input
          type="text"
          placeholder="title"
          className={style.input}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          value={updatedTitle}
        />
        <input
          type="number"
          placeholder="UserId"
          className={style.input}
          onChange={(e) => setUpdatedUserId(e.target.value)}
          value={updatedUserId}
        />
        <button className={style.submit}>UpDate</button>
      </form>
    </>
  );
}
