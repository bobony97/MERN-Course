import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPages, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path='marvel' element={ <MarvelPage /> } />
                <Route path='dc' element={ <DcPages /> } />
                <Route path='/' element={ <Navigate to={"/marvel"} /> } />
                <Route path='search' element={ <SearchPage /> } />
                <Route path='hero' element={ <HeroPage /> } />
            </Routes>
        </div>
    </>
  )
}
