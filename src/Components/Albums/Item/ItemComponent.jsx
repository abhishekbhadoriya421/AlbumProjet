import { useState } from "react";
import style from "./itemStyle.module.css";
export default function ItemComponent({ title, userId, Id }) {
  const [showUpdate, setShowUpdate] = useState(false);
  function handleShowUpdate() {
    setShowUpdate(!showUpdate);
  }
  return (
    <>
      <div className={style.item}>
        <div className={style.moreOption}>
          <img
            className={style.image}
            onClick={handleShowUpdate}
            src="https://t3.ftcdn.net/jpg/04/04/25/36/240_F_404253660_9PHYb2HcUzeFAXDAQ6z6sWBktUGrxBox.jpg"
            alt="loading..."
          />

          {/* updates*/}
          {showUpdate ? (
            <div className={style.updates}>
              <p
                style={{
                  borderBottom: "1px",
                  borderBottomColor: "black",
                  borderBottomStyle: "solid",
                }}
              >
                updateUserId
              </p>
              <p>updateId</p>
            </div>
          ) : (
            false
          )}
        </div>
        <p className={style.Title}>{title}</p>
        <hr />
        <div className={style.ids}>
          <p>userId: {userId}</p>
          <p>Id: {Id}</p>
        </div>
      </div>
    </>
  );
}
