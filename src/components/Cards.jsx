
const Cards = ({BestSelling,Random}) => {
    const List = BestSelling || Random || []
  return (
 <><div>
 <div className="grid md:grid-cols-3 gap-6 ">
  {List.map((item) => (
    <div className="border rounded-md shadow-md w-80 my-4" key={item.id}>
      <img className="h-96 border shadow-md rounded-t-md w-full bg-green-300 object-cover" src={item.url} alt={item.name} />
      <div className="p-4 justify-center flex flex-col text-center items-center text-xl font-bold">
        {item.name}
        <div className="flex space-x-2 mt-2 font-medium">
          <div>${item.price}</div>
          <div className="border-l-2 border-green-900 pl-4">{item.rating} &#x2B50;</div>
          <div className="bg-green-600 text-white  p-1 px-4 rounded-lg hover:bg-red-500 shadow-lg hover:cursor-pointer transition-all delay-150">Add Cart</div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div></>
  )
}

export default Cards