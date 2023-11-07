import style from "./AlbumsStyle.module.css";
import ItemComponent from "./Item/ItemComponent";
export default function AlbumComponent({
  albums,
  handleDeleteAlbum,
  handleUpdateAlbum,
}) {
  return (
    <>
      <div className={style.albums}>
        {albums.map((album, index) => {
          return (
            <ItemComponent
              title={album.title}
              userId={album.userId}
              Id={album.id}
              key={index}
              handleDeleteAlbum={handleDeleteAlbum}
              handleUpdateAlbum={handleUpdateAlbum}
            />
          );
        })}
      </div>
    </>
  );
}
