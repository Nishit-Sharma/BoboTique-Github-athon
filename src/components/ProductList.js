import React from 'react';
import S1Product1 from './Store1/S1Product1';
import S1Product2 from './Store1/S1Product2';
import S1Product3 from './Store1/S1Product3';
import S1Product4 from './Store1/S1Product4';
import S2Product1 from './Store2/S2Product1';
import S2Product2 from './Store2/S2Product2';
import S2Product3 from './Store2/S2Product3';
import S2Product4 from './Store2/S2Product4';
import S3Product1 from './Store3/S3Product1';
import S3Product2 from './Store3/S3Product2';
import S3Product3 from './Store3/S3Product3';
import S3Product4 from './Store3/S3Product4';
import S4Product1 from './Store4/S4Product1';
import S4Product2 from './Store4/S4Product2';
import S4Product3 from './Store4/S4Product3';
import S4Product4 from './Store4/S4Product4';

function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        <S1Product1 />
        <S1Product2 />
        <S1Product3 />
        <S1Product4 />
        <S2Product1 />
        <S2Product2 />
        <S2Product3 />
        <S2Product4 />
        <S3Product1 />
        <S3Product2 />
        <S3Product3 />
        <S3Product4 />
        <S4Product1 />
        <S4Product2 />
        <S4Product3 />
        <S4Product4 />
      </div>
    </div>
  );
}

export default ProductList;