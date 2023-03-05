import React from 'react'
import { Navigate, Routes as Switch, Route } from "react-router-dom";
import DoctorList from './views/DoctorList/DoctorList'
import DoctorDetail from './views/DoctorDetail/DoctorDetail'
import BookDoctor from './views/BookDoctor/BookDoctor'

import MainLayout from "./layouts/MainLayout";

const Routes = () => {
  let routes = (
    <Switch>
       <Route
           path="/"
           exact
           element={
           <MainLayout>
               <DoctorList />
           </MainLayout>
           }
       />
       <Route
           path="/doctor-detail/:id"
           exact
           element={
           <MainLayout>
               <DoctorDetail />
           </MainLayout>
           }
       />
       <Route
           path="/book-doctor/:id"
           exact
           element={
           <MainLayout>
               <BookDoctor />
           </MainLayout>
           }
       />
    </Switch>
  )
  return routes;
}

export default Routes