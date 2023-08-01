import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

const PaginationProduct = () => {
  const [post, setPost] = useState([]);
  const [Postperpage] = useState(10);
  const [currentPage, setCurrentpage] = useState(1);

  const pageNumbers = Math.ceil(post.length / Postperpage);
  console.log("pagenumber", pageNumbers);

  useEffect(() => {
    const fetchApi = async () => {
      const userApi = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setPost(userApi.data);
    };
    fetchApi();
  }, []);

  const firstPage = currentPage * Postperpage;
  const secondPage = firstPage - Postperpage;

  const currentPagedata = post.slice(secondPage, firstPage);

  const handlePageNumber = (event, pageNumber) => {
    setCurrentpage(pageNumber);
  };
  return (
    <div>
      {/* {currentPagedata.map((post, i) => (
        <div key={i}>{post.id}</div>
      ))} */}
      <Pagination
        count={pageNumbers}
        color="primary"
        page={currentPage}
        onChange={handlePageNumber}
      />
    </div>
  );
};

export default PaginationProduct;
