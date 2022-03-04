<template>
 <div class="container w-full m-auto">
   <center class="mt-4 mb-4">
      <h2>Vue 3 Flip Card Working Demo</h2>
   </center>
   <section class="section-tours">
      <div class="flex flex-row row">
         <div class="flex flex-wrap mx-5 mb-5 col-lg-4 mb-4">
            <div class="my-flip-container">
               <div class="my-flip-inner my-flip-right">
                  <div class="my-flip-inner-wrapper">
                     <div class="my-flip-side my-flip-front">
                        <div class="my-flip-image my-flip-image--1">
                           <img src="https://therichpost.com/wp-content/uploads/2021/04/flip-1.jpg">                                 
                        </div>
                        <div class="my-flip-details">
                           <h4 class="my-flip-heading">My Flip Title</h4>
                           <div class="my-flip-text">
                              <p>Lorem ipsum dolor sit amet adipisicing elit sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                           </div>
                        </div>
                     </div>
                     <div class="my-flip-side my-flip-back my-flip-back-1">
                        <div class="my-flip-back-inner">
                           <div class="my-flip-price">
                              <h3>$129</h3>
                           </div>
                           <div class="my-flip-back-text">
                              <ul>
                                 <li>All Widgets</li>
                                 <li>Unlimited Section</li>
                                 <li>300 Line Icon</li>
                                 <li>Support 24x7</li>
                                 <li>Updates for 1 year</li>
                              </ul>
                           </div>
                           <div class="my-flip-btn-box"><a href="#0" class="my-flip-btn">Book Now</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="flex flex-wrap mx-5 mb-5 col-lg-4 mb-4">
            <div class="my-flip-container">
               <div class="my-flip-inner my-flip-right">
                  <div class="my-flip-inner-wrapper">
                     <div class="my-flip-side my-flip-front">
                        <div class="my-flip-image my-flip-image--2">
                           <img src="https://therichpost.com/wp-content/uploads/2021/04/flip-2.jpg">                
                        </div>
                        <div class="my-flip-details">
                           <h4 class="my-flip-heading">My Flip Title</h4>
                           <div class="my-flip-text">
                              <p>Lorem ipsum dolor sit amet adipisicing elit sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                           </div>
                        </div>
                     </div>
                     <div class="my-flip-side my-flip-back my-flip-back-2">
                        <div class="my-flip-back-inner">
                           <div class="my-flip-price">
                              <h3>$149</h3>
                           </div>
                           <div class="my-flip-back-text">
                              <ul>
                                 <li>All Widgets</li>
                                 <li>Unlimited Section</li>
                                 <li>400 Line Icon</li>
                                 <li>Support 24x7</li>
                                 <li>Updates for 2 year</li>
                              </ul>
                           </div>
                           <div class="my-flip-btn-box"><a href="#0" class="my-flip-btn">Book Now</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="flex flex-wrap mx-5 mb-5 col-lg-4 mb-4">
            <div class="my-flip-container">
               <div class="my-flip-inner my-flip-right">
                  <div class="my-flip-inner-wrapper">
                     <div class="my-flip-side my-flip-front">
                        <div class="my-flip-image my-flip-image--3">
                           <img src="https://therichpost.com/wp-content/uploads/2021/04/flip-3.jpg">                               
                        </div>
                        <div class="my-flip-details">
                           <h4 class="my-flip-heading">My Flip Title</h4>
                           <div class="my-flip-text">
                              <p>Lorem ipsum dolor sit amet adipisicing elit sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                           </div>
                        </div>
                     </div>
                     <div class="my-flip-side my-flip-back my-flip-back-3">
                        <div class="my-flip-back-inner">
                           <div class="my-flip-price">
                              <h3>$169</h3>
                           </div>
                           <div class="my-flip-back-text">
                              <ul>
                                 <li>All Widgets</li>
                                 <li>Unlimited Section</li>
                                 <li>500+ Line Icon</li>
                                 <li>Support 24x7</li>
                                 <li>Lifetime Update</li>
                              </ul>
                           </div>
                           <div class="my-flip-btn-box"><a href="#0" class="my-flip-btn">Book Now</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
      </div>
   </section>
</div>
</template>

<script>
</script>

<style>
a:hover{
    text-decoration: none;
 }
 
 .my-flip-inner-wrapper {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;   
 }
 .my-flip-side {
     display: block;
     height: 500px;
     top: 0;
     right: 0;
     left: 0;
     box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);    
     transition: all .8s ease;    
     -webkit-backface-visibility: hidden;
     backface-visibility: hidden;   
 }
 
 .my-flip-back {
    transform: rotateY(180deg);
    color: #fff;
    position: absolute;
    z-index: -1;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    padding: 46px;   
 }
 
 .my-flip-back-1 {
    background: linear-gradient(to right bottom, #ffb900, #ff7730);
 }
 
 .my-flip-back-2 {
    background: linear-gradient(to right bottom, #000428, #004e92);
 }
 
 .my-flip-back-3 {
    background: linear-gradient(to right bottom, #2998ff, #5643fa);
 }
 
 .my-flip-inner-wrapper:hover .my-flip-front {
    transform: rotateY(-180deg);
 }
 
 .my-flip-inner-wrapper:hover .my-flip-back {
    transform: rotateY(0);
 }
 .my-flip-image {
    height: 15rem;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
 }
 .my-flip-image img{
    width: 100%;
    height: 100%;
    background-blend-mode: screen;
    object-fit: cover;   
 }
 .my-flip-heading {
     margin: 0 0 15px;
 }
 .my-flip-details {
    padding: 2rem;
 }
 .my-flip-details p {
    font-size: 15px;
    margin: 0;
    line-height: 2;
    color: #848484;
 }
 .my-flip-back-inner ul {
    list-style: none;  
    margin: 0 0 1.5rem;
    padding: 0;
 }
 .my-flip-back-text  ul li {
    text-align: center;
    color:#fff;
    font-size: 1rem;
    padding: 0.8rem 0;
 }
 .my-flip-back-inner ul li:not(:last-child) {
    border-bottom: 1px solid #ffffff;
 }
 .my-flip-price {
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
 }
 .my-flip-price h3 {
     font-size: 3rem;
     font-weight: 300;
 }
 .my-flip-btn-box {
     text-align: center;
 }
 .my-flip-btn{
    text-transform: uppercase;
    padding: 1rem 1.8rem;
    font-size: 1rem;
    background-color: #fff;
    color: #000;
    border-radius: 10rem;
    display: inline-block;
    transition: all .2s;
    color: initial;
    position: relative;
 }
 .my-flip-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    color: #000;
 }
 </style>