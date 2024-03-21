import css from "./FriendListItem.module.css";

function checkIsOnline(isOnline) {
  if (isOnline) {
    return "Online";
  } else {
    return "Offline";
  }
}

const FriendListItem = ({ avatar, name, isOnline }) => {
  const getClass = isOnline ? "online" : "offline";

  return (
    <li className={css.friendListItem}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={css[getClass]}>{checkIsOnline(isOnline)}</p>
    </li>
  );
};

export default FriendListItem;
