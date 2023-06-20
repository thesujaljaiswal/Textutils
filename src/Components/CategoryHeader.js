import React from 'react'
import './CategoryHeader.css'

export default function CategoryHeader(props) {
  return (
    <div>
        <div className="outer-category-header">

            {/* Div holding title and results count */}
            <div className="title_and_results">
                {/* The title of the category */}
                <div className="header-title"><h3>{props.category}</h3></div>

                {/* Number of results of category */}
                <div className="header-results"><h4>Showing 1-16 of 200 results</h4></div>
            </div>


            {/* Div holding the sort and filter button */}
            <div className="sort_and_filter">
                {/* Div holding sort text and button */}
                <div className="header-sort">
                    <div><h4>SORT BY</h4></div>
                    <div><img src="sort.png"></img></div>
                </div>


                {/* Div holding the filter text */}
                <div className="header-filter">
                    <div><h4>FILTER & SORT</h4></div>
                </div>
            </div>
            


        </div>
    </div>
  )
}
