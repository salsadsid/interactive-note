import React, { useState } from "react";
import { useQuery } from "react-query";
import LoadingSkeleton from "../../Shared/LoadingSkeleton";

const Reviews = () => {
  const [showReview,setShowReview]=useState(0)
  const {
    data: reviews = [],
    isLoading,
    refetch,
    isSuccess,isFetched,
    isError
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/review/all", {
          method: "GET",
        });
        const data = await res.json();
        // console.log(data);
        return data.data;
      } catch (error) {
        // toast.error("Internal Error");
      }
    },
  });

  const handleShowReview=(i)=>{
    setShowReview(i);
  }
  let content;
  if(isLoading){
     content = <LoadingSkeleton></LoadingSkeleton>
  }
  if(isSuccess){
    
    content= <section className="bg-gray-100 text-gray-800 ">
    <div className=" flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24  lg:justify-between max-w-screen-xl">
      <div className="flex flex-col justify-center items-center">
        <p className="text-6xl text-green-600 text-center">"</p>
        <p className="text-3xl font-light font-sans text-center mb-12">{reviews[showReview]?.review}</p>
        <p className="text-2xl uppercase font-semibold text-center">{reviews[showReview]?.companyName}</p>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 my-16">
        {
          reviews?.map((review,i)=><div key={review._id} className="w-36 opacity-50 hover:opacity-100 hover:cursor-pointer" onClick={()=>handleShowReview(i)}>
            <img src={review.logo} alt="" className="object-contain"/>
          </div>)
        }
      </div>
    </div>
  </section>
  }
  // const reviewInterval = setInterval(() => {
  //   if(showReview==4){
  //     setShowReview(0)
  //   }
  //   setShowReview(showReview+1)
  // }, 20000);
  return (
    <>
      {content}
    </>
  );
};

export default Reviews;
