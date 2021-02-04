import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div className="text-center my-5 mx-2">
                <h1>Sorry!</h1>
                <img className="img-fluid" src="/img/notFound.gif" alt=""></img>
                <h3 className="my-2">404 - The page cannot be found</h3>
                <p>Unfortunately, we could not find the page you were looking for :( <br/><br/>
                It might have been removed, had its name changed, or is temporarily unavailable.<br/><br/>
                Please check that the Web site address is spelled correctly or go our home page, and use the menus to navigate to a specific section.</p>
            </div>
        )
    }
}
