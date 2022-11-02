import { getReviewMovie } from 'helpers/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

function Reviews() {
  const [review, setReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      const data = await getReviewMovie(movieId);
      setReview(data.results);
    };
    getReview();
  }, [movieId]);

  return (
    <ul>
      {review?.map(item => (
        <li key={item.id}>
          <p className={css.reviewsAuthor}>Author: {item.author}</p>
          <p className={css.reviewsContent}>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}
export default Reviews;
