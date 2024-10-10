import React from 'react'
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;

  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    //logic
    if(likedCourses.includes(course.id)) {
        //pehle se like hua pada tha
        setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
        toast.warning("Like Removed");
    }
    else {
        //pehle se like nahi hai ye course
        //insert karna h ye course liked courses me 
        if(likedCourses.length === 0 ) {
            setLikedCourses([course.id]);
        }
        else {
            //non-empty pehle se
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
    }
  }

  return (
    <div className='cardone'>
      <div>
        <img src={course.image.url} className='images'></img>
      </div>
      <div className='likebutton'>
        <button onClick={clickHandler}
          className={likedCourses.includes(course.id) ? 'liked' : ''}
        >
          {likedCourses.includes(course.id) ? 'Liked' : 'Like'}
        </button>
      </div>
      <div>
        <p className='para1'>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
   
  )
}

export default Card