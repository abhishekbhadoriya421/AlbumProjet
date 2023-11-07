# Albums list React app
> This Application Perform Various Task 
- Fetch Albums from the Server
- Add new album 
- update album
- delete album

> [!IMPORTANT]
> These All Request Are Fake and not manipulating the Server

### Logic Code
> App.js File contains all the logic code
> 
### Design
> component folder contains the Design of the application and some design manipulation logic

### Used Tool
- React
- HTML
- CSS
- JavaScript

### Get request Code 
```js
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch(err=>console.log(err))
  }
  useEffect(() => {
    getData();
  }, []);
```

> This code let us fetch data from API

### Post request code
```js
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
```
> This code is used to add new album on the server

```js
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
```
>Deleting Album from the server

```js
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
```

>Updating specific desired Album


> [!IMPORTANT]
> Please Note that these requests are fake and only used for learning purposes they have no effect on the server

