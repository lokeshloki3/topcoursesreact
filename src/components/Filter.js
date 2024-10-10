import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    // console.log(filterData);

    // Right now have initial value All of filterData
    let category=props.category;
    let setCategory=props.setCategory;

    function filterHandler(title){
      // updated All as clicked on filterData so category is clicked title now  to be checked in Cards
      setCategory(title);
    }
  return (
    // <div className='filterr'>
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {
        filterData.map( (data) => (
        <button
          className={`text-lg px-2 py-1 rounded-md font-medium 
          text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
          ${category === data.title ? 
          "bg-opacity-60 border-white" :
          "bg-opacity-40 border-transparent"}
          `}
          key={data.id}
          onClick ={() => filterHandler(data.title)}
          >
          {data.title}
        </button>
        ))
      }
    </div>
  )
}

export default Filter
  

{/* <button key={data.id} className={`filterritem ${category === data.title ? 'selected' : ''}`}
onClick={()=>filterHandler(data.title)}
>
{data.title}
</button> */}
  
  
  // const [filter,setFilter] =useState([]);

  // function filtData(){
  //   setFilter(filterData);
  // }
//   {filterData.map(obj => <p key={obj.id}> {obj.title}</p>)}