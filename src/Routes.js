import React from 'react'
import { Navigate, Routes as Switch, Route } from "react-router-dom";
import DoctorList from './views/DoctorList/DoctorList'
import DoctorDetail from './views/DoctorDetail/DoctorDetail'
import BookingList from './views/BookingList/BookingList'
import BookingDetail from './views/BookingDetail/BookingDetail'

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
           path="/booking-list"
           exact
           element={
           <MainLayout>
               <BookingList />
           </MainLayout>
           }
       />
       <Route
           path="/booking-detail/:id"
           exact
           element={
           <MainLayout>
               <BookingDetail />
           </MainLayout>
           }
       />
    </Switch>
  )
  return routes;
}

export default Routes