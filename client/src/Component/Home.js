import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../Styles/Home.css';

export default function Home() {
  return (

      <div class="headerbg">
        <div class="container">
            <div class="information">
                <h1>See you again</h1>
                <p>It's been along day... without you my friend.</p>
                <br></br>
                <a href="https://youtu.be/RgKAFK5djSk">Listen to this music</a>
            </div>
            <div class="video">
              <iframe
                  src="https://www.youtube.com/embed/RgKAFK5djSk"
                  frameborder="0"
                  allow=""
                  allowfullscreen>
              </iframe>   
            </div>              
        </div> 
      </div>    
  );
}