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
    <div className='filterr'>
        {
            filterData.map( (data) => (
                <button key={data.id} className={`filterritem ${category === data.title ? 'selected' : ''}`}
                  onClick={()=>filterHandler(data.title)}
                >
                {data.title}
                </button>
            ))
        }
    </div>
  )
}

export default Filter
  
  
  
  // const [filter,setFilter] =useState([]);

  // function filtData(){
  //   setFilter(filterData);
  // }
//   {filterData.map(obj => <p key={obj.id}> {obj.title}</p>)}