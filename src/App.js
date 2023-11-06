import AddAlbumForm from "./Components/AddAlbumForm/AddAlbumFormComponent";
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
        <div className={style.addAlbumFormContainer}>
          {showAddAlbum ? (
            <AddAlbumForm />
          ) : (
            <button
              className={style.showAddAlbumBtn}
              onClick={handleShowAddAlbum}
            >
              Add New Album
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
