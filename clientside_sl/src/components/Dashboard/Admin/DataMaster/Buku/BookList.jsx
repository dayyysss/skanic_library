import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/book?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        }
      );
      if (response.data.success) {
        const { data, last_page, total } = response.data.data;
        setBooks(data);
        setTotalPages(last_page);
        setTotalBooks(total);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAuthToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not available. Please login.");
      return null;
    }
    return token;
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Yakin Mau Hapus?",
        text: "Data akan dihapus dari database",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus saja!",
      });
      if (result.isConfirmed) {
        await axios.delete(`http://127.0.0.1:8000/api/book/${id}`, {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        });
        fetchData();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (book) => {
    setSelectedUserId(book.id);
    setNewBook(user);
    setIsModalOpen(true);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/book/${id}/update`);
      await fetchData();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <>
      <div className="px-[25px] pt-[25px] pb-[210px] bg-[#F8F9FC]">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer">
            Data Buku
          </h1>
          <Link
            to="/dashboard-admin/buku/add-buku/*"
            className="bg-blue-500 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]"
          >
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
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Cari
              </button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-left">Total : {totalBooks}</p>
        <table className="w-full table-auto mt-4 border border-slate-500 border-collapse bg-white shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Nama Buku</th>
              <th className="px-4 py-2">Sinopsis</th>
              <th className="px-4 py-2">ISBN</th>
              <th className="px-4 py-2">Penulis</th>
              <th className="px-4 py-2">Jumlah Halaman</th>
              <th className="px-4 py-2">Stok Buku</th>
              <th className="px-4 py-2">Tahun Terbit</th>
              <th className="px-4 py-2">Kategori</th>
              <th className="px-4 py-2">Sampul Buku</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index + 1}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.synopsis}</td>
                <td className="border px-4 py-2">{book.isbn}</td>
                <td className="border px-4 py-2">{book.writer}</td>
                <td className="border px-4 py-2">{book.page_amount}</td>
                <td className="border px-4 py-2">{book.stock_amount}</td>
                <td className="border px-4 py-2">{book.published}</td>
                <td className="border px-4 py-2">{book.category}</td>
                <td className="border px-4 py-2">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-24 w-auto mx-auto object-cover"
                    style={{ maxWidth: "180px" }}
                  />
                </td>
                <td className="border px-4 py-2">{book.status}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-between items-center">
                    <FaEdit
                      onClick={() => handleUpdate(book.id)}
                      className="text-blue-500 cursor-pointer"
                      style={{ fontSize: "1.4rem" }}
                    />
                    <RiDeleteBin5Line
                      onClick={() => handleDelete(book.id)}
                      className="text-red-500 cursor-pointer"
                      style={{ fontSize: "1.4rem" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-left mt-8">
          Page: {page} of {totalPages}
        </p>
        <div
          className="flex justify-center items-center mb-9"
          aria-label="pagination"
        >
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              color="primary"
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default BookList;
