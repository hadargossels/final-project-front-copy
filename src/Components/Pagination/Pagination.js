import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component{
   render(){
      return(
        <div class="py-auto">
        <nav class="block">
          <ul class="flex pl-0 rounded list-none flex-wrap">
            <li>
              <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-600 text-gray-200 bg-gray-600">
                1
              </a>
            </li>
            <li>
              <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-600 bg-gray-200 text-gray-600">
                2
              </a>
            </li>
            <li>
              <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-600 bg-gray-200 text-gray-600">
                3
              </a>
            </li>
            <li>
              <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-600 bg-gray-200 text-gray-600">
                4
              </a>
            </li>
            <li>
              <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-600 bg-gray-200 text-gray-600">
                5
              </a>
            </li>
          </ul>
        </nav>
      </div>
      );
   }
}

export default Pagination;