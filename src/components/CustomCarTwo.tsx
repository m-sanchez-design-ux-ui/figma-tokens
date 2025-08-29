interface CustomCarTwoProps {
  className?: string;
}

export default function CustomCarTwo({ className = "" }: CustomCarTwoProps) {
  return (
    <div className={`inline-flex max-w-96 p-5 flex-col justify-center items-center gap-5 rounded-lg bg-white shadow-lg ${className}`}>
      <h2 className="text-gray-900 text-center font-heading text-2xl font-bold leading-[150%]">
        Welcome!
      </h2>
      
      <button className="flex py-[10px] px-5 justify-center items-center gap-2 rounded-lg bg-blue-500 text-white font-heading text-sm font-bold leading-[150%] hover:bg-blue-600 transition-colors">
        Button 01
      </button>
      
      <button className="flex py-[10px] px-5 justify-center items-center gap-2 rounded-lg bg-blue-500 text-white font-heading text-sm font-bold leading-[150%] hover:bg-blue-600 transition-colors">
        Button 02
      </button>
    </div>
  );
}
