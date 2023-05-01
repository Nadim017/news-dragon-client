import moment from 'moment';
import React from 'react';

import Card from 'react-bootstrap/Card';
import {
  FaBacon,
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
  const {
    _id,
    title,
    details,
    rating,
    image_url,
    thumbnail_url,
    author,
    total_view,
  } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Card.Img
          style={{ height: '40px', width: 'auto' }}
          variant="top"
          src={author ? author.img : ''}
        />
        <div className="ps-2 flex-grow-1">
          <p>{author ? author.name : ''}</p>
          <p>
            <small>{moment(author?.published_date).format('YYYY-MM-DD')}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between px-3">
        <div>
          <Rating
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            readonly
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span>{rating.number}</span>
        </div>
        <div>
          <FaEye></FaEye>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
