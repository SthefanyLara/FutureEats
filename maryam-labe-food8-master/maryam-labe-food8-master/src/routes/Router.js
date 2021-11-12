// import { Restaurant } from "@material-ui/icons";
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage"
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SearchRestaurantsPage from "../pages/SearchRestaurantsPage/SearchRestaurantsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import EditAddressPage from '../pages/EditAddressPage/EditAddressPage'
import EditInfoPage from '../pages/EditInfoPage/EditInfoPage'
import RegisterAddressPage from "../pages/SignUpPage/RegisterAddressPage";



const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/cart">
                    <CartPage/>
                </Route>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/signUp">
                    <SignUpPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path= "/editaddress">
                    <EditAddressPage/>
                </Route>

                <Route exact path= "/perfil">
                    <EditInfoPage/>
                </Route>

                <Route exact path= "/restaurant/:id">
                     <RestaurantPage/>
                </Route>

                <Route exact path= "/profile/">
                    <ProfilePage/>
                </Route>

                <Route exact path= "/restaurant/">
                    <RestaurantPage/>
                </Route>

                <Route exact path= "/search">
                    <SearchRestaurantsPage/>
                </Route>
                <Route exact path= "/address">
                    <RegisterAddressPage/>
                </Route>

                <Route exact default>
                    <div>Page não encontrada</div>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router