import React, { FC } from "react";
import PostForm from "../molecules/PostForm";
import GenericTemplate from "../templates/GenericTemplate";

const HomePage: FC = () => {
  return (
    <GenericTemplate title="Welcome Baby">
      <>
        <PostForm/>
      </>
    </GenericTemplate>
  )
};

export default HomePage;