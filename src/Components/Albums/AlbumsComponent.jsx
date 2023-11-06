import style from "./AlbumsStyle.module.css";
import ItemComponent from "./Item/ItemComponent";
export default function AlbumComponent() {
  return (
    <>
      <div className={style.albums}>
        <ItemComponent 
        title={"Abhishek bhadoriya"}
        userId={1}
        Id={2}
        />
      </div>
    </>
  );
}
