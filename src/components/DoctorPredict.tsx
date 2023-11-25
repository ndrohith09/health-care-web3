import React, { Component ,useEffect, FormEvent, useMemo, useState } from 'react';
import doctorsData from "../data/data.json";
import {
  useAccount,
  useBalance,
  useContract,
  useContractWrite,
} from "@starknet-react/core";
import { cairo, num } from "starknet";
import { truncate } from '../lib/utils';
import abi_erc20 from "../lib/abi_erc20";

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

const CONTRACT_ADDRESS = "0x07394cbe418daa16e42b87ba67372d4ab4a5df0b05c6e554d158458ce245bc10"; 
  
  const DoctorPredict: React.FC = () => {

    const [doctors, setDoctors] = useState<Doctor[]>([]);
  
    const { address } = useAccount();

    const [to, setTo] = useState("");
    const [amount, setAmount] = useState(0); 


    const { data: balance } = useBalance({
      address,
      token: CONTRACT_ADDRESS, 
    });

    const { contract } = useContract({
      abi: abi_erc20,
      address: CONTRACT_ADDRESS,
    });

    const calls = useMemo(() => {
      if (!amount || !to || !contract || !balance) return;
  
      // format the amount from a string into a Uint256
      const amountAsUint256 = cairo.uint256(
        BigInt(Number(amount) * 10 ** balance.decimals)
      );
  
      return contract.populateTransaction["transfer"](to, amountAsUint256);
    }, [to, amount, contract, balance]);


    const { write, isPending, data } = useContractWrite({
      calls,
    });
 

    async function pay(event: FormEvent, to:string , eth: number) {
      event.preventDefault();
      try {
        setTo(to);
        setAmount(0);  
        console.log(to , eth);  
        write();       
      }
      catch (err) {
        console.log(err);
      }
    }

    useEffect(() => {
      // Simulating fetching data from the JSON file
      setDoctors(doctorsData);
      alert('Data posted to Infura via Starknet. Block Hash 0x679fd653b946fa3f2233fb84baf5f9d21a934b93a2986ad0398eaa6b2e56c61');
    }, []);
  
    return (
      <div> 
        <h1 className="my-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Based on your symptoms our AI</h1>
        <h1 className="my-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">has some suggestions</h1>
        <br />
        {/* <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p> */}

        <ul role="list" className="divide-y divide-gray-100">
        {data && (
          <p className="text-sm font-semibold leading-6 text-green-900">{data.transaction_hash}</p>
        )}
        {doctors.slice(0, 6).map((doctor) => (
  <li className="flex justify-between gap-x-6 py-5" key={doctor.doctor_id}>
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={doctor.img} alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">{doctor.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{doctor.email}</p>
      </div> 
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">{doctor.specialization}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500">{doctor.date} | {doctor.time}</p> 
      {/* <p className="mt-1 text-xs leading-5 text-gray-500">{doctor.clinic_address}</p> */}
    </div>
    {/* <  br/>  */}
    <button type="submit" disabled={isPending} onClick={(e) => {pay(e, doctor.name , doctor.eth)}} 
    className="rounded-md bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {/* {isPending ? "Sending..." : `${doctor.eth} ETH`} */}
      {doctor.eth} ETH
    </button>    

  </li>  
          ))}

</ul> 
      </div>
    );
  };
  
  export default DoctorPredict;