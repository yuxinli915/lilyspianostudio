import React, { Component } from 'react';

export default function Footer() {
   return (
      <footer>
         <div className="row">
            <div className="twelve columns">
               <ul className="copyright">
                  <li>&copy; Copyright 2021 Lily's Piano Studio</li>
               </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#"><i className="fas fa-chevron-up"></i></a></div>
         </div>
      </footer>
   )
}
