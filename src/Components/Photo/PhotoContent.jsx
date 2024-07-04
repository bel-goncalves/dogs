import React from "react";
import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);

  //data = object com photo, comments
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          )}
          <span className={styles.visualizacoes}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          {photo.idade !== 1 ? (
            <li>{photo.idade} anos</li>
          ) : (
            <li>{photo.idade} ano</li>
          )}
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
