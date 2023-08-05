import React from 'react';
import { useQuery } from 'react-query';

const Reviews = () => {
    const {
        data: reviews=[],
        isLoading,
        refetch,
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
    return (
        <div>
            {reviews.length}
        </div>
    );
};

export default Reviews;