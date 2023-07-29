import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { LandingPage } from './landing-page';
import { ROUTES } from '../shared/utils';

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.landing.path} element={<LandingPage />} />
    </Routes>
  )
}
