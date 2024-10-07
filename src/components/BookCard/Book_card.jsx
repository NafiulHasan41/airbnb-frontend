'use client'
import React from 'react';
import './book_card.css'
import Image from 'next/image';

const Book_card = () => {
    return (
        <div className="book-container group">
        <div className="book  ">
           <div className="flex items-center justify-center  ">
           <Image
            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" 
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