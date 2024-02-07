function Budgeting(){
    return (
        <>
         <div className="bg-white shadow p-4 py-8 border border-purple-300 rounded-lg" x-data="{ images: [] }">
          <div className="flex items-center justify-between m-5">
          <h1 className="font-bold text-2xl text-black bg-white border-none outline-none ">Budgeting</h1>
          <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4" >
              New expense
            </button>
            
            </div>
            <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-grey-300 p-4 shadow-lg max-w-2xl">
            <div className="flex justify-between" >
            <h1 className="text-3xl font-bold">Expense:5000$</h1>
            <h1 className=" font-bold">Budget:20000$</h1>
            </div>
            <br/>
              <div className="flex space-x-4" >
            <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2 text-sm" >
              Edit Budget
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4 text-sm" >
              Debt Summary
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4 text-sm" >
              View Breakdown
            </button>
            </div>
              </div>
          </div>
        </>
    )
}
export default Budgeting