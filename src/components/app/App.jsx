import "./App.module.css";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

import Profile from "../profile/Profile.jsx";
import FriendList from "../friend-list/FriendList.jsx";
import TransactionHistory from "../transaction-history/TransactionHistory.jsx";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
