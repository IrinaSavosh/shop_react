import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../productsData';
import Breadcrumbs from '../Components/Breadcrumbs';
import ProductMain from '../Components/ProductMain';
import ProductDetails from '../Components/ProductDetails';
import Header from '../Components/Header';
import TopHead from '../Components/TopHead';
import Advantages from '../Components/Advantages';
import Footer from '../Components/Footer';
import '../styles/style-prod.scss'

const ProductPage = () => {
  const { id } = useParams();
  const product = productsData.find((prod) => prod.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <Header/>
      <TopHead/>
      <Breadcrumbs />
      <ProductMain product={product} />
      <ProductDetails product={product} />
      <Advantages/>
      <Footer/>
    </div>
  );
};

export default ProductPage;
