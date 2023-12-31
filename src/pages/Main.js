import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import Schedule from "../components/Schedule";
import ShoppingList from "../components/ShoppingList";
import { getUserAll, getPlan, deletePlan } from "../api/fetch";

const Main = ({ appUsers }) => {
  const params = useParams();
  const userPK = parseInt(params.iuser);
  const userGroupPK = parseInt(params.igroup);
  const [userList, setUserList] = useState([]);
  const [plan, setPlan] = useState([]);
  const [planPK, setPlanPK] = useState(null);
  // 사용자의 상세한 정보를 userPK 를 통해서 파악한다.
  const [nowUser, setNowUser] = useState({});
  const [openShopList, setOpenShopList] = useState(false);
  const [openShopListDate, setOpenShopListDate] = useState("");
  const [shopList, setShopList] = useState([]);
  const planDelete = _iplan => {
    deletePlan(_iplan);
    const newPlan = plan.filter(item => item.iplan !== _iplan);
    setPlan(newPlan);
  };
  const parseUserInfo = () => {
    const nowUserFind = appUsers.find(
      item => item.iuser === userPK && item.igroup === userGroupPK,
    );
    setNowUser(nowUserFind);
  };
  useEffect(() => {
    const nowUserFind = appUsers.find(
      item => item.iuser === userPK && item.igroup === userGroupPK,
    );
    setNowUser(nowUserFind);
  }, [nowUser]);

  // 사용자 정보를 axios 로 가지고 옮
  const getAllParse = async () => {
    const data = await getUserAll();
    setUserList(data);
  };
  const fetchPlanData = async () => {
    const data = await getPlan(userGroupPK);
    setPlan(data);
  };

  useEffect(() => {
    // 서버에서 회원 전체 자료 가져오기
    getAllParse();
    // 사용자의 정보를 파악한다.
    parseUserInfo();
    fetchPlanData();
  }, []);
  // useEffect(() => {
  //   console.log("사용자 번호: ", userId);
  // }, []);
  // 목록 열기 내리기

  // useEffect(() => {
  //   fetchPlanData()
  // },[plan])
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Header nowUser={nowUser} />
      <div>
        <Schedule
          setOpenShopList={setOpenShopList}
          setOpenShopListDate={setOpenShopListDate}
          openShopList={openShopList}
          setPlan={setPlan}
          plan={plan}
          setPlanPK={setPlanPK}
          userGroupPK={userGroupPK}
          userPK={userPK}
          setShopList={setShopList}
        />
        <ShoppingList
          openShopListDate={openShopListDate}
          openShopList={openShopList}
          planPK={planPK}
          userGroupPK={userGroupPK}
          userPK={userPK}
          planDelete={planDelete}
          setOpenShopList={setOpenShopList}
          fetchPlanData={fetchPlanData}
          shopList={shopList}
          setShopList={setShopList}
        />
      </div>
    </div>
  );
};

export default Main;
