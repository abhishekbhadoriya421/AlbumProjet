import style from "./style.module.css";
export default function AddAlbumForm() {
  return (
    <>
      <div className={style.addAlbumFormContainer}>
        <h2 className={style.heading}> Add Album </h2>
        <form className={style.form}>
            <div>
                <label htmlFor="Id">ID:</label>
                <input type="number" name="Id"/>
            </div>
            <div>
                <label htmlFor="userId">user ID:</label>
                <input type="number" name="userId" />
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" />
            </div>
            <button type="submit">Add Album</button>
        </form>
      </div>
    </>
  );
}
