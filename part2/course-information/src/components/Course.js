import React from 'react'
import Header from "./Header"
import Content from "./Content"

const Course = (props) => {
    return (
        <div>
            {props.course.map(course =>
                <div key={course.id}>
                    <Header name={course.name}/>
                    <Content parts={course.parts}/>
                </div>
            )}
        </div>
    )
}

export default Course
