import React, {useState} from 'react'

export default function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <>
        
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <i
                      className="ri-star-fill star"
                      style={
                        ratingValue <= (hover || rating)
                          ? { color: "#4BB543" }
                          : { color: "#e4e5e9" }
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    ></i>
                  </label>
                );

                 
            })}
        </>
    )
}
