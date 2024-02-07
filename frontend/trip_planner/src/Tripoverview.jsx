function Tripoverview(props){
  console.log(props)
  const place=props.place
  const startdate=props.startdate
  const enddate=props.enddate
  const description=props.description
  const username=props.username
  function dateconverter(gdate){
    const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const date=new Date(gdate)
  const month = monthNames[date.getMonth()]; 
const day = date.getDate(); 
const year = date.getFullYear(); 
const formattedDate = `${month},${day},${year}`;
return formattedDate;
  }
  const fstartdate=dateconverter(startdate);
const fenddate=  dateconverter(enddate);
    return (

        <div className="bg-purple-500 p-4">
      <h1 className="text-3xl font-semibold text-white">Trip to {place}</h1>
      <div className="mt-6 p-4">
        
          <div className="bg-white p-4 rounded-lg">
            <p className="text-lg font-semibold">Trip Details</p>
            <p className="text-gray-600">Date: {fstartdate} - {fenddate}</p>
            <p className="text-gray-600">Destination: {place}</p>
            <p className="text-gray-600">Description: {description}</p>
            <a href="#" className="text-purple-500 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </a>
          </div>
        
      </div>
    </div>

    )
}

export default Tripoverview