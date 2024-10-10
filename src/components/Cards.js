import React from 'react'
import Card from "./Card"
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;

    // Get category selected from filterData
    let category = props.category;
    // for like button
    const [likedCourses, setLikedCourses] = useState([]);

    // matching category of filterData to upiUrl

    function getCourses() {
      if(category === 'All'){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        console.log(allCourses);
        return allCourses;
      }
      else{
        //only category ka array return  
        return courses[category];      
    }
  }


// flatMap
// Object.values(courses).forEach(array => {
//     array.forEach(courseData => {
//       <Card key={courseData.id} />
//     })
// })

// getcourses return allCourses so map is applied on allCourses

  return (
    // <div className='cardie'>
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards