'use client'
import React from 'react';
import './book_card.css'
import Image from 'next/image';

const Book_card = ( { host}) => {
    const img = host?.avatarUrl ? host.avatarUrl : 'https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-flat-people-icon-illustration-vector-png-image_12650659.png';
    // console.log(img);
    return (
        <div className="book-container group">
        <div className="book  ">
           <div className="flex items-center justify-center  ">
           <Image
            src={img}
            width={45}
            height={45}
            alt="book"
            className="  rounded-full border border-black "
          />
           </div>  
        </div>
      </div>
  
    );
};

export default Book_card;