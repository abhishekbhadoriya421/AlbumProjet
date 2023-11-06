import AddAlbumForm from "./Components/AddAlbumForm/AddAlbumFormComponent";
import AlbumComponent from "./Components/Albums/AlbumsComponent";
import style from "./AppStyle.module.css";
import { useState } from "react";
function App() {
  const [showAddAlbum, setShowAddAlbum] = useState(false);

  function handleShowAddAlbum() {
    setShowAddAlbum(!showAddAlbum);
  }
  return (
    <div className="App">
      <div className="mainContainer">
        {/* Add new Album container */}
        <div className={style.addAlbumFormContainer}>
          {showAddAlbum ? (
            <AddAlbumForm handleShowAddAlbum={handleShowAddAlbum}/>
          ) : (
            <button
              className={style.showAddAlbumBtn}
              onClick={handleShowAddAlbum}
            >
              Add New Album
            </button>
          )}
        </div>

        {/* Album List */}

        <div className={style.albumsContainer}>
            <h2 className={style.heading}>
              Album List
            </h2>

          <AlbumComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
