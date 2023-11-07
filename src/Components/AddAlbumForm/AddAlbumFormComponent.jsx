import { useState } from "react";
import style from "./style.module.css";
export default function AddAlbumForm({ handleShowAddAlbum, handleAddAlbum }) {
  // Making Post Request
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  function handleOnSubmitForm(e) {
    e.preventDefault();
    handleAddAlbum(title,userId);
    setUserId("");
    setTitle("");
  }
  
  return (
    <>
      <div className={style.addAlbumFormContainer}>
        <p
          className={style.closeAddAlbum}
          onClick={handleShowAddAlbum}
          title="close"
        >
          X
        </p>
        <h2 className={style.heading}> Add Album </h2>
        <form onSubmit={handleOnSubmitForm} className={style.form}>
          <div>
            <label htmlFor="userId">user ID:</label>
            <input
              type="number"
              name="userId"
              required
              onChange={(e) => setUserId(e.target.value)}
              value={userId}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <button type="submit">Add Album</button>
        </form>
      </div>
    </>
  );
}
