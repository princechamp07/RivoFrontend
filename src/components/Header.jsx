
const Header = () => {
  return (
    <div className='mx-auto flex justify-center'>
            <header className=" flex flex-col md:flex-row ">
        <div className=" md:my-44 font-bold text-5xl text-green-900 p-10">
            Discover and Find <br/> Your Own Fashion!
            <div className="text-3xl font-normal text-green-800 font-serif mt-10">
                Explore our curated collection <br/> of stylish cothing and accessories tailored <br/> to your unique taste
            </div>
            <div className="text-2xl font-normal text-white mt-10 font-serif">
                <button className="bg-green-900 md:px-10 p-2 rounded shadow-2xl shadow-black">Explore Now</button>
            </div>
        </div>
        <div className=" h-96  mb-14  md:mt-44 justify-center">
            <img className="mx-10 h-96 md:h-full border rounded-3xl rounded-tl-[100px] rounded-br-[100px] bg-green-300" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82a94b15-68f2-4b47-ac50-f02ffeff6bc9/d9vw59e-eb9acf13-0a5f-4c14-ba66-b409a0f2c1c4.png/v1/fill/w_760,h_1052/girl_in_a_green_dress_png_by_msoranzhevaya_d9vw59e-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzgyYTk0YjE1LTY4ZjItNGI0Ny1hYzUwLWYwMmZmZWZmNmJjOVwvZDl2dzU5ZS1lYjlhY2YxMy0wYTVmLTRjMTQtYmE2Ni1iNDA5YTBmMmMxYzQucG5nIiwid2lkdGgiOiI8PTg2NyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3JQAf7WIV3ZjVy8KHTafCy8FRrxu8Xx8CFMgHG9AIUc" alt=""/>
        </div>
    </header>
    </div>
  )
}

export default Header