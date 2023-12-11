import { Routes } from '@angular/router';
import { AdduserComponent } from '../Pages/User/adduser/adduser.component';
import { GetallUsersComponent } from '../Pages/User/getallusers/getallusers.component';
import { UserbyidComponent } from '../Pages/User/userbyid/userbyid.component';
import { GetallsellersComponent } from '../Pages/seller/getallsellers/getallsellers.component';
import { SellerbyidComponent } from '../Pages/seller/sellerbyid/sellerbyid.component';
import { AddsellerComponent } from '../Pages/seller/addseller/addseller.component';
import { AddproductComponent } from '../Pages/product/addproduct/addproduct.component';
import { GetallproductsComponent } from '../Pages/product/getallproducts/getallproducts.component';
import { ProductbyidComponent } from '../Pages/product/productbyid/productbyid.component';
import { AddbrandComponent } from '../Pages/brand/addbrand/addbrand.component';
import { GetallbrandsComponent } from '../Pages/brand/getallbrands/getallbrands.component';
import { BrandbyidComponent } from '../Pages/brand/brandbyid/brandbyid.component';
// import { GetallavailabilitiesComponent } from '../Pages/availability/getallavailabilities/getallavailabilities.component';
import { Availability } from '../Models/availability';
// import { AvailabilitybyidComponent } from '../Pages/availability/availabilitybyid/availabilitybyid.component';
import { GetorderbyidComponent } from '../Pages/order/getorderbyid/getorderbyid.component';
import { GetordersComponent } from '../Pages/order/getorders/getorders.component';
import { LoginComponent } from '../Pages/login/login/login.component';
import { AdminDashboardComponent } from '../Pages/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from '../Pages/customer-dashboard/customerdashboard/customerdashboard.component';
import { PlaceorderComponent } from '../Pages/order/placeorder/placeorder.component';
import { SellerDashboardComponent } from '../Pages/seller-dashboard/seller-dashboard.component';
// import { RegisterComponent } from '../Pages/User/register/register.component';
import { UserRatingComponent } from '../Pages/user-rating/userrating.component';
import { ProductbynameComponent } from '../Pages/product/productbyname/productbyname.component';
import { GetorderbyuseridComponent } from '../Pages/order/getorderbyuserid/getorderbyuserid.component';
import { SellerloginComponent } from '../Pages/sellerlogin/sellerlogin.component';
import { uploadComponent } from './upload/upload.component';
 


export const routes: Routes = [
    {path:'adduser',component:AdduserComponent},
    {path:'getallusers',component:GetallUsersComponent},
    {path:'userbyid',component:UserbyidComponent},
    {path:'addseller',component:AddsellerComponent},
    {path:'orderbyuserid',component:GetorderbyuseridComponent},
    {path:'getallsellers',component:GetallsellersComponent},
    {path:'sellerbyid',component:SellerbyidComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'getallproducts',component:GetallproductsComponent},
    {path:'userrating',component:UserRatingComponent},
    {path:'productbyid',component:ProductbyidComponent},
    {path:'addbrand',component:AddbrandComponent},
    {path:'searchproduct',component:ProductbynameComponent},
    {path:'sellerlogin',component:SellerloginComponent},
    // {path:'register',component:RegisterComponent},
    {path:'getallbrands',component:GetallbrandsComponent},
    {path:'brandbyid',component:BrandbyidComponent},
    // {path:'getallavailabilities',component:GetallavailabilitiesComponent},
    // {path:'availabilitybyid',component:AvailabilitybyidComponent},
    {path:'getorderbyid',component:GetorderbyidComponent},
    {path:'getorders',component:GetordersComponent},
    {path:'Login',component:LoginComponent},
    {path:'placeorder',component:PlaceorderComponent},
    {path:'admindashboard',component:AdminDashboardComponent,
    children:[
        {path:'getorders',component:GetordersComponent},
          {path:'getorderbyid',component:GetorderbyidComponent},
          {path:'getallsellers',component:GetallsellersComponent},
          {path:'sellerbyid',component:SellerbyidComponent},
          {path:'getallusers',component:GetallUsersComponent},
          {path:'login',component:LoginComponent},
        ],},
    {path:'customerdashboard',component:CustomerDashboardComponent,
children:[
    {path:'getallproducts',component:GetallproductsComponent},
    {path:'productbyid',component:ProductbyidComponent},
    {path:'getorderbyid',component:GetorderbyidComponent},
    {path:'login',component:LoginComponent},
]},
    {path:'sellerdashboard',component:SellerDashboardComponent,
    children:[
        {path: 'Edit',component:SellerbyidComponent},
        {path:'addbrand',component:AddbrandComponent},
        {path:'allbrands',component:GetallbrandsComponent},
        {path:'addproduct',component:AddproductComponent},
        {path:'getallproducts',component:GetallproductsComponent},
        {path: 'login',component:LoginComponent},
        
    ],},
     {path:'upload',component:uploadComponent},
];
