import React, { FC } from 'react';
import GenericTemplate from '../templates/GenericTemplate';
import Parents from '../organisms/Parents'

const ParentsPage: FC = () => {
  return (
    <GenericTemplate title="Parents Info">
      <Parents />
    </GenericTemplate>
  )
};

export default ParentsPage;