import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDropdown } from "react-icons/io";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import bookImage from "../../../../assets/Books/sololeveling.jpg";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DaftarBukuA() {
  const [modalOpen, setModalOpen] = useState(false); // State untuk mengatur apakah modal terbuka atau tidak

  // Fungsi untuk menampilkan modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Fungsi untuk menyembunyikan modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="px-[25px] pt-[25px] bg-[#F8F9FC] pb-[500px]">
        <h1 className="text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer">
          Daftar Buku
        </h1>
        <div className="flex items-center justify-between">
          <h1 className="pb-5">Buku Yang Tersedia : 20</h1>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Kategori
                <IoIosArrowDropdown
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Komik
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Novel
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Fiksi
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Non Fiksi
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flex justify-between mt-5">
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={bookImage} // Menggunakan variabel yang menyimpan alamat gambar
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="cursor-pointer"
                onClick={openModal} // Panggil fungsi openModal saat judul buku diklik
              >
                Solo Leveling
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Pada suatu hari , di dunia ini tidak ada yang bisa membuktikan
                kesabaran.
              </Typography>
            </CardContent>

            <CardActions className="flex justify-center">
              <Typography style={{ color: "#4CAF50", fontWeight: "bold" }}>
                Tersedia
              </Typography>
            </CardActions>
          </Card>

          {/* Kartu lainnya */}
        </div>

        <Stack spacing={2}></Stack>
      </div>

{/* Konten modal */}
{modalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="z-50 bg-white p-8 rounded-lg max-w-lg w-full mx-4 flex">
      {/* Gambar Sampul Buku */}
      <div className="w-1/3 mr-4">
        <img src={bookImage} alt="Sampul Buku" className="w-full h-full object-cover" />
      </div>
      {/* Informasi Buku */}
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-4">Detail Buku </h2>
        <p className="text-left">Judul: Solo Leveling</p>
        <p className="text-left">Kategori: Novel</p>
        <p className="text-left">ISBN: 9837-901239-2213</p>
        <p className="text-left">Penulis: Kevin Irawan</p>
        <p className="text-left">Penerbit: PT Hilal DKK.</p>
        <p className="text-left text-green-500">Status: Tersedia</p>
        <p className="text-left">
          Sinopsis: Pada suatu hari, di dunia ini tidak ada yang bisa membuktikan kesabaran pada saat itu ia melakukan pembunuhan dikarenakan orang lain mengejeknya dan sibuk mengeluarkan pedang pada saat itu. Jadi ia merelakan semua nya dan pergi begitu saja
        </p>
        {/* Tombol untuk menutup modal */}
        <div className="mt-4">
          <button className="bg-green-500 text-white px-4 py-2 mr-2" onClick={closeModal}>Pinjam Buku</button>
          <button className="bg-gray-500 text-white px-4 py-2" onClick={closeModal}>Tutup</button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}
