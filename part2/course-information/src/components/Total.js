import React from 'react'

const Total = (props) => {

    const totalEx = props.parts.reduce((total, part) => total + part.exercises, 0)

    return (
        <div>
            total of {totalEx} exercises
        </div>
    )
}

export default Total
