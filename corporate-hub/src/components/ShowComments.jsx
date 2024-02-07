import PropTypes from "prop-types";
import { getCompanyComments } from "../services/CompanyCommentsService";
import { useEffect, useState } from "react";

export const ShowComments = ({ company_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await getCompanyComments(company_id);
        setComments(response.data.comments);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  });

  return isLoading ? (
    <div className="comment w-full">
      <div className="bg-gray-200 animate-pulse rounded-lg p-4"></div>
      <div className="stars">
        <div className="star bg-gray-200 animate-pulse rounded-lg p-4"></div>
        <div className="date bg-gray-200 animate-pulse rounded-lg p-4"></div>
      </div>
      <div className="desc bg-gray-200 animate-pulse rounded-lg p-4"></div>
    </div>
  ) : null;
};

ShowComments.propTypes = {
  company_id: PropTypes.number.isRequired,
};
