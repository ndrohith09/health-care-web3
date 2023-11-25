import { useAccount, useDisconnect, useStarkName } from "@starknet-react/core";

export default function Navbar() { 
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  // Uses the Starknet.id contract by default,
  // but a different contract can be specified
  // To do the reverse operation (get address from stark name)
  // you can use the useAddressFromStarkName hook
  const { data: starkName } = useStarkName({
    address: address || "",
  });

  const truncated = `${address?.substring(0, 6)}...${address?.slice(-2)}`;

  if (!isConnected) {
    return null;
  }

    return (
        <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="/" className="-m-1.5 p-1.5"> 
        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
      </a>
    </div> 
    <div className="hidden lg:flex lg:gap-x-12"> 
      <a href="/list" className="text-sm font-semibold leading-6 text-gray-900">Doctors</a>
      <a href="/" className="text-sm font-semibold leading-6 text-gray-900">AI Predictor</a> 
      <a href="/appointments" className="text-sm font-semibold leading-6 text-gray-900">Appointments</a>  
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Github</a>  
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <p className="" >Hello, {address}</p>
      <button onClick={() => disconnect()} className="text-sm font-bold leading-6 text-gray-900">Disconnect</button>
    </div>
  </nav>  
</header>

    ); 
}