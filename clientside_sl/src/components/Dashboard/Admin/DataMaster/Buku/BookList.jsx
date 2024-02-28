import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DeleteModal from "../../DeleteModal/index";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getBooks();
  }, [page]); // Add page as dependency

  const getBooks = async () => {
    try {
      const response = await fetch(`/api/book?page=${page}`);
      const responseData = await response.json(); // Ekstrak data JSON dari respons
      console.log(responseData); // Cetak data JSON
      setBooks(responseData.data);
      setTotalBooks(responseData.total);
      setTotalPages(responseData.last_page);
    } catch (error) {
      console.log("Error fetching books:", error.message);
      setMessage("Error fetching books. Please try again later.");
    }
  };
  
  

  const deleteBook = async (id) => {
    try {
      // Implement your delete function here
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handleClickDelete = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    setShowDelete(false);
    getBooks();
  };

  return (
    <>
      {showDelete && (
        <DeleteModal
          show={setShowDelete}
          onDelete={() => handleDeleteBook(deleteId)}
        />
      )}
      <div className='px-[25px] pt-[25px] pb-[370px] bg-[#F8F9FC]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer'>Data Buku</h1>
          <Link to="/dashboard-admin/buku/add-buku/*" className="bg-blue-500 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]">
            Tambah Buku
          </Link>
        </div>
        <div className="mt-4">
          <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
            <div className="flex items-center border border-slate-500 rounded">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari sesuatu di sini..."
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cari
              </button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-left">Total : {totalBooks}</p>
        <table className="w-full table-auto mt-4 border border-slate-500 border-collapse bg-white shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Nama Buku</th>
              <th className="px-4 py-2">Synopsis</th>
              <th className="px-4 py-2">ISBN</th>
              <th className="px-4 py-2">Writer</th>
              <th className="px-4 py-2">Page Amount</th>
              <th className="px-4 py-2">Stock Amount</th>
              <th className="px-4 py-2">Published</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="border px-4 py-2">{book.id}</td>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.synopsis}</td>
                <td className="border px-4 py-2">{book.isbn}</td>
                <td className="border px-4 py-2">{book.writer}</td>
                <td className="border px-4 py-2">{book.page_amount}</td>
                <td className="border px-4 py-2">{book.stock_amount}</td>
                <td className="border px-4 py-2">{book.published}</td>
                <td className="border px-4 py-2">{book.category}</td>
                <td className="border px-4 py-2">
                  <img src={book.image} alt={book.title} className="h-12 w-auto" />
                </td>
                <td className="border px-4 py-2">{book.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-left mt-8">Page: {page} of {totalPages}</p>
      </div>
      <div className="flex justify-center items-center mt-4" aria-label="pagination">
        <Stack spacing={2}>
          <Pagination count={totalPages} page={page} onChange={handleChangePage} color="primary" />
        </Stack>
      </div>
    </>
  );
};

export default BookList;
