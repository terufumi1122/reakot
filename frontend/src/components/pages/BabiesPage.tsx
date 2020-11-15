import React, { FC } from 'react';
import GenericTemplate from '../templates/GenericTemplate';
import Babies from '../organisms/Babies'

const BabiesPage: FC = () => {
  return (
    <GenericTemplate title="Babies Info">
      <Babies />
    </GenericTemplate>
  )
};

export default BabiesPage;