// console.log("hello");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>CSS Grid + Media Queries</title>
  </head>
  <style>
      .container {
          display: grid;
          grid-gap: 1rem;
          grid-template-areas:
              'navbar navbar navbar navbar'
              'section section section aside'
              'footer footer footer footer ';
      }
  
      @media only screen and (max-width:300px) {
          body {
              background-color: red;
          }
          .container {
              grid-template-areas:
                  'navbar navbar navbar navbar'
                  'section section section section'
                  'aside aside aside aside'
                  'footer footer footer footer ';
          }
          aside{
              display: none;
          }
          span{
              display: block;
              text-align: center;
          }
      }
  
      @media only screen and (min-width: 300px) and (max-width:500px) {
          body {
              background-color: blue;
          }
          .container {
              grid-template-areas:
                  'navbar navbar navbar navbar'
                  'section section section section'
                  'aside aside aside aside'
                  'footer footer footer footer ';
          }
          aside{
              display: none;
          }
          span{
              display: block;
              text-align: center;
          }
      }
  
      @media (min-width: 500px) and (max-width:800px) {
          body {
              background-color: yellow;
          }
  
          .container {
              grid-template-areas:
                  'navbar navbar navbar navbar'
                  'section section section section'
                  'aside aside aside aside'
                  'footer footer footer footer ';
          }
          span{
              display: block;
              text-align: center;
          }
      }
  
      @media (min-width: 800px) {
          body {
              background-color: green;
          }
      }
  
      .bdr {
          border: 2px solid black;
          padding: 10px 23px;
          background-color: wheat;
      }
  
      nav {
          grid-area: navbar;
      }
  
      section {
          grid-area: section;
      }
  
      aside {
          grid-area: aside;
      }
  
      footer {
          grid-area: footer;
          text-align: center;
      }
  </style>
  
  <body>
      <div class="container ">
          <nav class="bdr">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Contact</span> 
          </nav>
          <section class="bdr">
              <h2 text-align:center;>Earth</h2>
              <p>Earth is our mother planet which provides habitat to millions of species of plants and animals. Earth is the only planet that has atmosphere in the entire solar system. Earth???s atmosphere nourishes life and protects it from harmful UV rays and meteorites. Earth is our planet and we should take all the necessary steps to maintain the continuity of life. As a responsible person, we should participate in volunteering the activities that would make our earth a sustainable planet for future generations.<br>
                  1) Earth is one of the eight planets of our solar system that revolves around the sun.<br>
                  2) Earth is the only known planet supporting life in the entire solar system.<br>
                  3) Many scientists claim that earth is supposed to be 4.5 billion years old.<br>
                  4) Around 73% of the surface of the earth is covered with water.<br>
                  5) Earth has an atmosphere containing 21% oxygen which helps in the survival of living beings.<br>
                  6) The gases like nitrogen, CO2, and oxygen in earth???s atmosphere help plants to grow.<br>
                  7) Earth's rocky surface known as the crust is made up of silicon, aluminum, iron, calcium, sodium, potassium and magnesium.<br>
                  8) Earth is spheroid in shape and is larger than other planets like Mercury, Venus, and Mars.<br>
                  9) Earth completes its orbit around the sun in 365.256 days which creates leap year once in 4 years.<br>
                  10) The earth is a habitat for the millions of species of plants and animals.</p>
          </section>
          <aside class="bdr">
              
              <h1>More about our planet</h1>
          </aside>
      </div>
      <footer class="bdr">Celebrate EARTH day on Friday, 22 April 2022 </footer>
  
  </body>
  
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});