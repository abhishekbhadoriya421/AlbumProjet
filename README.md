# Albums list React app
> This Application Perform Various Task 
- Fetch Albums from Server
- Add new album 
- update album
- delete album

> [!IMPORTANT]
> These All Request Are Fake and not actually manipulating Server

### Logic Code
> App.js File contains all the logic code
> component folder contain's Design of application and some design manipulation logics

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

> this code let as fetch data from api

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
> This code is used to add new album on server

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
>Deleting Album from server

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
> Please Note that these request are fake and only used for learning purpose they are having no effect on server

