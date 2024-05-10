import NewReview from '@/app/components/reviews/NewReview';
import Reviews from '@/app/components/reviews/Reviews';
import React from 'react'
//import StarRatings from "react-star-ratings";

const SingleProduct = () => {
  return (<>
    {/* <BreadCrumbs /> */}
      <section className="bg-white pt-5">
      
        <div className="overflow-hidden shadow-sm mb-5 bg-[#F3FBFF] w-full">
                <div className="flex flex-col md:flex-row container max-w-screen-xl mx-auto">
                  <div className="md:w-[400px] py-3">
                    <div
                      style={{
                        width: "auto",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={"/images/fish.png"}
                        alt="product anme"
                        height="340"
                        width="340"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/4 mx-5 mb-5">
                    <div className="mt-5 mb-32">
                      {/* <Link to={`/`} className="hover:text-blue-600">
                        Lorem Ipsum is simply dummy text
                      </Link> */}
                      <div className="flex flex-wrap items-center space-x-2 mb-2">
                        <div className="ratings">
                          <div className="my-1">
                            {/* <StarRatings
                              rating={5}
                              starRatedColor="#ffb829"
                              numberOfStars={5}
                              starDimension="18px"
                              starSpacing="1px"
                              name="rating"
                            /> */}
                          </div>
                        </div>
                       </div>
                      <div className="col-span-1"><h2 className="text-skin-base text-2xl font-semibold leading-5 min-h-[30px] line-clamp-2 mb-1.5 hover:text-skin-primary">Mackerel HGT, 100-200, 1/20</h2><div className="text-12px sm:text-sm mt-auto text-gray-400 mb-2">Scomber japonicus (Pacific chub mackerel)</div></div>
                      
                      </div>
                      <div className="flex gap-2">certificates
                    <span> <img className="w-full h-full" 
                        src={"/images/certi1.png"}
                        alt="product anme"
                        height="27"
                        width="23"
                      /></span><span> <img
                      src={"/images/certi2.png"}
                      alt="product anme"
                      height="23"
                      width="26"
                    /></span>
                    <span> <img className="w-full h-full" src={"/images/certi3.png"}
                      alt="product anme"
                      height="23"
                      width="26"
                    /></span>
                    <span> <img className="w-full h-full"
                      src={"/images/certi4.png"}
                      alt="product anme"
                      height="23"
                      width="26"
                    /></span>
                      </div>
                      <div className="flex justify-between gap-4 text-black">
											<span className="u-w-full u-text-sm u-text-black">
                      Scientific name
											</span>
                      <span>Cololabis saira <br/>(Pacific saury)</span>
										</div>
                    <div className="flex justify-between gap-4 text-black">
											<span className="u-w-full u-text-sm u-text-black">
                      Production type
											</span>
                      <span>Frozen</span>
										</div>
                    <div className="flex justify-between gap-4 text-black">
											<span className="u-w-full u-text-sm u-text-black">
                      Cut type
											</span>
                      <span>Whole round</span>
										</div>
                  </div>
                  <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white">
                    <div className="p-5">
                    <h3>Price range</h3>
                      <span className="text-xl font-semibold text-black">
                      ¥7.73/kg - ¥9.24/kg
                      </span>

                      <p className="text-gray-500 mb-32">To access price, send request
to supplier</p>
                      <div className="my-3">
                        <a className="px-4 py-2 inline-block text-white bg-[#0D86C2] border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                          {" "}
                          Request Price{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         

         

         
        
        
      </section>
      <section className='overflow-hidden shadow-sm py-5 bg-[#F3FBFF] w-full px-5'>
  <div className='container mx-auto prd-spec'>
    <h3 className='text-3xl font-bold'>Product Specification</h3>
    <div className='md:w-2/4 mb-5 mt-5'>
    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Catching method -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>Caught (wild)</span>
										</div>
                    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Fishing area -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>FAO 61 (Pacific, Northwest)</span>
										</div>
                    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Freezing process -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>BQF, 10 kg</span>
										</div>
                    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Freezing process -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>BQF, 10 kg</span>
										</div>
                    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Freezing process -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>BQF, 10 kg</span>
										</div>
                    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Freezing process -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>BQF, 10 kg</span>
										</div>
                    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Size -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>60-80 g</span>
										</div>
                    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Origin -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>India</span>
										</div>
                    <div className="flex justify-between gap-8 text-black">
											<span className="w-full text-sm text-black">
                      Packing weight -------------------------------
											</span>
                      <span className='w-full text-sm text-black text-start'>Non-fixed weight 10 kg</span>
										</div>
    </div>
    <div>
    <div className="mt-8 flow-root sm:mt-12">
          <h1 className="text-3xl font-bold">Description</h1>
          <p className="mt-4 w-full text-sm text-black">Normas de pago: pago anticipado del 20% del valor de la mercancía, el 80% después de recibir una copia de los documentos originales.</p>
         
        </div>
    </div>
  </div>
</section>

<div className="text-start px-10 py-5">
    <h1 className="font-bold text-3xl">You May Like</h1>
</div>

{/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
<section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    
    {/* <!--   🛑 Product card 1 - Ends Here  -->

  

    <!--   ✅ Product card 3 - Starts Here 👇 --> */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={'/images/Salmon.png'}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
             <div className="px-4 py-3 w-72 text-center">
                
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <button className='border px-6 text-sky-500'>Show More</button>
                <div className="items-center">
                    <p className="text-lg font-normal text-gray cursor-auto my-3">Size- 300-400 g</p>
                                  </div>
            </div>
        </a>
    </div>
    {/* <!--   🛑 Product card 3 - Ends Here  -->

    <!--   ✅ Product card 4 - Starts Here 👇 --> */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={'/images/Ribbon Fish.png'}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72 text-center">
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <button className='border px-6 text-sky-500 '>Show More</button>
                <div className="items-center">
                    <p className="text-lg font-normal text-gray cursor-auto my-3">Size- 300-400 g</p>
                                  </div>
            </div>
        </a>
    </div>
    {/* <!--   🛑 Product card 4 - Ends Here  -->

    <!--   ✅ Product card 5 - Starts Here 👇 --> */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={'/images/Red Snapper.png'}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
             <div className="px-4 py-3 w-72 text-center">
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <button className='border px-6 text-sky-500'>Show More</button>
                <div className="items-center">
                    <p className="text-lg font-normal text-gray cursor-auto my-3">Size- 300-400 g</p>
                                  </div>
            </div>
        </a>
    </div>
   
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={'/images/Seabass.png'}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72 text-center">
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <button className='border px-6 text-sky-500 '>Show More</button>
                <div className="items-center">
                    <p className="text-lg font-normal text-gray cursor-auto my-3">Size- 300-400 g</p>
                                  </div>
            </div>
        </a>
    </div>

</section>





    </>
  );
};



export default SingleProduct