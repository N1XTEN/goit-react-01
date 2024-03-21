import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.userInfoContainer}>
        <div className={css.thumb}>
          <img className={css.userImg} src={avatar} alt="User avatar" />
        </div>
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userStatistic}>
        <li className={css.userStatisticItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.userStatisticItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.userStatisticItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
