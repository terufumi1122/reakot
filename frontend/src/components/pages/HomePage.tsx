import React from "react";
import SignUp from "../molecules/SignUp";
import GenericTemplate from "../templates/GenericTemplate";

const HomePage: React.FC = () => {
  return (
    <GenericTemplate title="トップページ">
      <>
        <SignUp />
      </>
    </GenericTemplate>
  )
};

export default HomePage;