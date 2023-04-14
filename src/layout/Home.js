import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';
import {Image} from 'primereact/image';
function Home(){
 
  return(
    <div style={{ backgroundSize: '100%'}}>
      <Image src='https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' alt='shop'
        style={{ width: '100%',
        
      }}
      ></Image>
    </div>
  )
}

export default Home;