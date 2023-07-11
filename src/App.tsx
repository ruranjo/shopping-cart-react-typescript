import {useEffect, useState} from 'react'
import { useQuery } from 'react-query'
import './App.css'
import { Drawer, LinearProgress, Grid, Badge } from '@mui/material'
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import { Wrapper } from './App.styles';

export type CartItemType = {
  id: number;
  title:string;
  price:number;
  category:string;
  description:string;
  image:string;
  amount:number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json()
}



const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  console.log(data)

  const getTotalItems = () => null;
  const handleAddToCard = () => null;
  const handleRemoveFromCart = () => null;

  console.log(isLoading)
  if(isLoading) return <LinearProgress />
  if(error) return <div>something went wrong... </div>

  return (
    <>
      <p>holallala</p>
      
      <Drawer> </Drawer>
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>
    </>
  )
}

export default App
