import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Time= (props)=>{
    const starttimee=props.starttimee
    const endtimee=props.endtimee
    const difftime=["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"]
    const [starttime,setstarttime]=useState(starttimee)
    const [endtime,setendtime] =useState(endtimee)
    const [signal,setsignal]=useState(0)
    const {settimeinsearch}=props
   
    //console.log(starttime);
   // console.log(endtime);
   const signalcontrol = () => {
  const startMinutes = parseInt(starttime.slice(3),10);
  const endMinutes = parseInt(endtime.slice(3),10);

  if (starttime[1] < endtime[1] || (starttime[1] === endtime[1] && startMinutes < endMinutes)) {
    settimeinsearch(starttime, endtime);
    setsignal(0);
    console.log("Start time is before end time");
  } else {
    setsignal(1);
    console.log("End time is before or equal to start time");
  }
}
   //console.log(signal);
  return(
    <div className="rounded-lg bg-white mt-1">
    <div className="flex w-70">
    <Listbox value={starttime} onChange={(e)=>{setstarttime(e)}}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-purple-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm">
          <span className="block truncate">{starttime}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-50 overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {difftime.map((diffetime, indx) => (
              <Listbox.Option
                key={indx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-3 pr-4 ${
                    active ? 'bg-purple-100 text-purple-900' : 'text-gray-900'
                  }`
                }
                value={diffetime}
                onClick={()=>{setstarttime(diffetime)}}
              >
                {(starttime) => (
                  <>
                    <span>
                      {diffetime}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
    <Listbox value={endtime} onChange={(e)=>{setendtime(e) }}>
      <div className="relative ml-2 mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-purple-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm">
          <span className="block truncate">{endtime}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {difftime.map((diffetime, indx) => (
              <Listbox.Option
                key={indx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-3 pr-4 ${
                    active ? 'bg-purple-100 text-purple-900' : 'text-gray-900'
                  }`
                }
                value={diffetime}
                onClick={()=>{setendtime(diffetime)}}
              >
                {( endtime) => (
                  <>
                    <span>
                      {diffetime}
                    </span>
                  
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  </div>
  <div className='text-red-400'>
    {signal===1 ? (
       <span> endtime after the start time </span>
    ):( <div></div>)}
  </div>
  <button class="bg-purple-500 hover:bg-purple-600 text-white mt-2 ml-2 rounded-lg p-2" onClick={signalcontrol}>save</button>
  </div>
  )
}

export default Time