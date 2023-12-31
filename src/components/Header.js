import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrap, Imgdiv, UIDdiv } from "../style/HeaderCss";

const Header = ({ nowUser }) => {
  const [userName, setUserName] = useState("");
  const [userPic, setUserPic] = useState("");
  const [userPK, setUserPK] = useState("");
  const [groupPK, setGroupPK] = useState("");
  useEffect(() => {
    if (!nowUser) {
      const timer = setTimeout(() => {
        window.location.href = "/intro";
      }, 0);

      return () => clearTimeout(timer);
    } else {
      setUserName(nowUser.nm);
      setUserPic(nowUser.pic);
      setUserPK(nowUser.iuser);
      setGroupPK(nowUser.igroup);
    }
  }, [nowUser]);

  return (
    <Wrap>
      <div>
        <Link to={`/about/${userPK}/${groupPK}`}>
          <UIDdiv>
            <Imgdiv>
              {userPic && <img src={`/img/${userPic}`} alt={userName} />}
            </Imgdiv>
            <span>{userName}</span>
          </UIDdiv>
        </Link>
      </div>
      <div>
        <Link to="/profile">Logout</Link>
      </div>
    </Wrap>
  );
};

export default Header;
