import AddAlbumForm from "./Components/AddAlbumForm/AddAlbumFormComponent";
import AlbumComponent from "./Components/Albums/AlbumsComponent";
import style from "./AppStyle.module.css";
import { useState, useEffect } from "react";
function App() {
  const [showAddAlbum, setShowAddAlbum] = useState(false);
  const [albums, setAlbums] = useState([]);

  function handleShowAddAlbum() {
    setShowAddAlbum(!showAddAlbum);
  }

  // Fetching Album data and making get request
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch(err=>console.log(err))
  }
  useEffect(() => {
    getData();
  }, []);

  // Making Post Request
  function handleAddAlbum(title, userId) {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbums([data, ...albums]);
      })
      .catch(err=>console.log(err))
  }

  // Handling Delete Album making delete request
  const handleDeleteAlbum = (Id) => {
    // Successfully deleted from server (its a fake request )
    fetch(`https://jsonplaceholder.typicode.com/albums/${Id}`, {
      method: "DELETE",
    });

    // Now need to update list
    const newArray = albums.filter((ele) => {
      return Id !== ele.id;
    });

    setAlbums(newArray);
  };

  // Handling Update Album
  function handleUpdateAlbum(id, updatedUserId, updatedTitle) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: updatedTitle,
        userId: updatedUserId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // updating setAlbum
        for (let i = 0; i < albums.length; i++) {
          if (albums[i].id === id) {
            albums[i].userId = updatedUserId;
            albums[i].title = updatedTitle;
            break;
          }
        }
        setAlbums([...albums]);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <div className="mainContainer">
        {/* Add new Album container */}
        <div className={style.addAlbumFormContainer}>
          {showAddAlbum ? (
            <AddAlbumForm
              handleShowAddAlbum={handleShowAddAlbum}
              handleAddAlbum={handleAddAlbum}
            />
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
          <h2 className={style.heading}>Album List</h2>

          <AlbumComponent
            albums={albums}
            handleDeleteAlbum={handleDeleteAlbum}
            handleUpdateAlbum={handleUpdateAlbum}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
