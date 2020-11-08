import React from 'react';
import GenericTemplate from '../templates/GenericTemplate';
import Babies from '../organisms/Babies'
import PostForm from '../molecules/PostForm';

function BabiesPage() {
  return (
    <GenericTemplate title="Babies Info">
      <Babies />
    </GenericTemplate>
  )
};

export default BabiesPage;