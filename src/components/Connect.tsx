import { useConnect } from "@starknet-react/core";

export default function Connect() {
  const { connect, connectors } = useConnect();

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
 
  <div className="text-center"> 
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">StarkCare</h1>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Login</h1> 
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <br  />
      <br  />
       {connectors.map((connector) => (
        <button
          className="bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => connect({ connector })}
          key={connector.id}
          disabled={!connector.available()}
        >
          Connect {connector.id}
        </button>
      ))}
    </div>
  </div> 
 
    </div>
  );
}
