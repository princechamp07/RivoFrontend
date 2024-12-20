import React from 'react'
import Offer from './Offer'
import Feedback from './Feedback'

const Section = () => {
  return (
    <div>
          <section className="bg-white">
        <div className="flex justify-center md:flex">
       <div className="container bg-green-200 flex-row justify-center mx-10 my-10 md:w-full mr-10 mt-12 md:flex">
    <img className='w-full' src="https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_640.jpg" alt="" />

    <Offer/>
       </div>
    </div>
<div className="flex justify-center m-auto text-center">
    <div className="text-green-800 mt-10  text-3xl font-serif">
       <div className="font-bold"> Designer Clothes For You</div>
        <div className="text-lg mt-10 mx-14">
            Immerse yourself in the world of luxury fashion with our metculously crafted designer clothes!
        </div>
        <div className="flex justify-center text-slate-700 mt-8 flex-col mx-5 md:space-x-10 md:mx-44 md:flex-row md:h-screen">
            <div className="flex-col flex md:w-[20%] mt-4">
                <img className="h-96 w-full " src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRCIEmOIZWQRV4Lncdla_YA8fnxcSntPR5tlSG-TAN9K2WBarxz9oJiteKftU0R_KG6JPuSWJeKlrv8TqfuJRI40MR1B9MON3j64CZcWSrwAAOdA4RDgkKcog&usqp=CAE" alt="" />
                <div className="p-4">
                    <div className="font-bold">Accessories</div>
                    <div className="text-lg">
                    Complete your ensemble with designer accessories such as handbags,scarves,belts,and hats.
                    </div>
                </div>
            </div>
            <div className="flex-col flex  md:w-[20%] mt-4">
                <img className=" h-96 " src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdUk446zjiN56qE4uz3-HKOW5UmQhfOQvIzC8FJRc9QI_9MTJ5rNiPDf-RbAaPHd0pFoEtLoB82k9z41eV_BVZpRp819zaMI4oUcRmXvT4qjQPgYCCG6wcMA&usqp=CAE" alt="" />
                <div className="p-4">
                    <div className="font-bold">Dresses</div>
                    <div className="text-lg">
                    Explore a stunning range of designer dresses, including evening gowns and chic day dresses.
                    </div>
                </div>
            </div>
            <div className="flex-col flex  md:w-[20%] mt-4">
                <img className="h-96 " src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYH_95SMz_0gZFcMDjgkE-o83XG1kTppF1u7MiDFW_6iDxSSDqgGv3GNmHuae7Of-lTjUTcdrgpkxzlKHuXE6YZxJ8agfG_W5c4jJ6YwUj&usqp=CAE" alt="" />
                <div className="p-4">
                    <div className="font-bold">Outerwear</div>
                    <div className="text-lg">
                        Browse luxurious designer coats jackets, and blazers to stay stylishly warm during colder seasons.
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <Feedback/>

    </section>
    </div>
  )
}

export default Section