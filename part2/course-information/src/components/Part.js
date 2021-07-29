import React from 'react'
import Total from "./Total"

const Display = (props) => {
    return (
        <div>
            {props.parts.map(part => 
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
            )} 
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <Display parts={props.parts}/>
            <Total parts={props.parts}/>
        </div>
    )

}

export default Part