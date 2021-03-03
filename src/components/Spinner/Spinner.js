import React from 'react'

export default function Spinner() {
    return (
        <div>
            <img
                src={"/img/loading.gif"}
                style={{width: '200px', margin: 'auto', display:'block'}}
                alt="Loading..."
            />
        </div>
    )
}
