import React, { Component ,useEffect, useState } from 'react' 
import doctorsData from "../data/data.json";

interface Doctor {
    doctor_id: number;
    eth: number;
    name: string;
    img: string;
    specialization: string;
    contact_number: string;
    email: string;
    clinic_address: string;
    date: string;
    time: string;
}

  
  const Appointments: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
  
    useEffect(() => {
      // Simulating fetching data from the JSON file
      setDoctors(doctorsData);
    }, []);
  
    return (
      <div> 
        <h1 className="my-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Your Scheduleded Appointments </h1> 
        <br />
        {/* <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p> */}

        <ul role="list" className="divide-y divide-gray-100">
        {doctors.slice(0, 1).map((doctor) => (
  <li className="flex justify-between gap-x-6 py-5" key={doctor.doctor_id}>
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={doctor.img} alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">{doctor.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{doctor.contact_number}</p> 
      </div> 
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">{doctor.specialization}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500">{doctor.date} | {doctor.time}</p>  

    </div>
    {/* <  br/>  */}
    <a href="#" className="rounded-md bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{doctor.eth} ETH</a>    

  </li>  
          ))}

</ul> 
      </div>
    );
  };
  
  export default Appointments;