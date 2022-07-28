/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
import { HiOutlineEye } from 'react-icons/hi';
import { BsArrowDownShort, BsDashSquare, BsCheck2Square } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import SupportButton from '../support/support';
import PageLoader from '../pageLoader/pageLoader';
import NoData from '../Nodata/NoData';
import { useStateContext } from '../../contexts/ContextProvider';
import Data from '../../data/MOCK_DATA.json';
import Modal from '../Modal/Modal';
import DeleteInstitution from '../../pages/institutions/deleteInstitution/DeleteInstitution';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';
import { GoButton, FilterButton, SearchButton } from '../Buttons/buttonCollections';
// import { getInstitution } from '../../redux/features/institutionSlice';
import {
  getAllProducts,
  selectAllProducts,
  getProductStatus,
  getProductError,
  selectProductByCode,
} from '../../redux/features/productSlice';
import { handleDate } from '../../utils/dateParser';
import './productlist.css';

const ProductList = () => {
  // const { activeModal, setActiveModal } = useStateContext();
  const dispatch = useDispatch();
  const {
    getProductByCode,
    setGetProductByCode,
  } = useStateContext();

  const product = useSelector(selectAllProducts);
  const productStatus = useSelector(getProductStatus);
  const productError = useSelector(getProductError);

  // const product = useSelector((state) => state.product.product);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // const [mockData, setMockData] = useState(product);
  const [pageNum, setPageNum] = useState(0);

  console.log(product);
  // console.log(mockData);

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  const handleViewProduct = (code) => {
    setGetProductByCode(code);
  };

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(getAllProducts());
    }
  }, [dispatch, productStatus]);

  const dataPerPage = 10;
  const dataPageVisited = pageNum * dataPerPage;

  const displayData = product
    ?.slice(dataPageVisited, dataPageVisited + dataPerPage)
    ?.map((datum) => (
      <tr key={datum['S/N']}>
        <td className="text-sm leading-5 py-4 px-3">{datum.code}</td>
        <td className="py-4 uppercase text-center">{datum.name}</td>
        <td className="py-4 pl-28">
          {datum.status === 'Active' ? (
            <span className="flex items-center bg-green-300 py-0.3 px-0.2 w-14 rounded-xl text-white">
              <GoPrimitiveDot className="text-white" />

              {datum.status}
            </span>
          ) : (
            <span className="flex items-center bg-red-400 py-0.3 px-0.2 w-16 rounded-xl text-white">
              <GoPrimitiveDot className="text-white" />

              {datum.status}
            </span>
          )}
        </td>
        {/* <td className="py-4 pl-4">{datum.Created}</td> */}
        <td className="py-4 pl-22 text-center">
          <span className="inline-block text-gray-900 py-0.5 px-0.4 rounded-lg text-center hover:cursor-pointer">
            {handleDate(datum.dateCreated)}
          </span>
        </td>
        <td className="py-4 px-6">
          <span className="flex justify-around px-12">
            <Link
              to="view-product"
              onClick={() => handleViewProduct(datum.code)}
            >
              <HiOutlineEye className="search-icon hover:cursor-pointer w-5 h-5 text-searchColor" />
            </Link>
            {/* <RiDeleteBinLine
              className="delete-icon hover:cursor-pointer w-5 h-5 text-binColor"
              onClick={() => setIsOpen(true)}
            /> */}
            {datum.status === 'Active' ? (
              <span className="flex items-center">
                <BsDashSquare
                  className="text-iconRed w-4 h-4 font-bold"
                  onClick={() => setIsOpen(true)}
                />
              </span>
            ) : (
              <span className="flex items-center">
                <BsCheck2Square className="text-iconGreen w-5 h-5 font-bold" />
              </span>
            )}
          </span>
        </td>
      </tr>
    ));

  const pagingCount = Math.ceil(product?.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  const renderList = () => {
    let content;
    switch (productStatus) {
      case 'loading':
        content = <PageLoader />;
        break;
      case 'succeeded':
        content = displayData;
        break;
      case 'failed':
        content = <p>Network Error </p>;
        break;
      default:
        content = displayData;
        break;
    }

    return content;
  };

  return (
    <>
      <article className="w-4/5 ml-auto">
        <section className="pt-3 pl-4 h-full bg-liteBlue pb-5">
          <div className="institution-wrapper p-5 bg-white rounded-tl-3xl rounded-bl-3xl">
            <header className="flex justify-between mb-2">
              <h1 className="institution-header mb-3 font-medium text-3xl capitalize">
                products
                {' '}
              </h1>
              <SupportButton />
            </header>

            <hr className="mb-5" />
            <div className="flex flex-row justify-between w-full mb-5">
              <div className="w-1/4 mr-2">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="email-address"
                >
                  Name
                  {' '}
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  "
                  type="text"
                  name="email-address"
                  id="email-address"
                />
              </div>

              <div className="w-1/4 px-3">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="email-address"
                >
                  Code
                  {' '}
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  "
                  type="text"
                  name="email-address"
                  id="email-address"
                />
              </div>

              <div className="w-1/4 px-3">
                <label
                  className="block capitalize tracking-wide text-gray-700 text-sm font-medium mb-2"
                  htmlFor="status-category"
                >
                  status
                </label>
                <select
                  id="status-category"
                  name="status-category"
                  className="mt-1 block w-full py-3 px-2 bg-clip-padding bg-no-repeat border border-gray-200 bg-white rounded-md shadow-sm focus:outline-none transition ease-in-out sm:text-sm"
                >
                  <option selected />
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex flex-col justify-end w-1/4">
                <SearchButton />
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <div className="product-list min-h-screen -mb-48">
                <table className="table-fixed w-full text-xs">
                  <thead className=" bg-gray-50 text-xs capitalize w-full ">
                    <tr className="space-x-1">
                      <th
                        scope="col"
                        className="w-20 text-gray-500 py-4 px-2 text-center"
                      >
                        Code
                      </th>
                      <th
                        scope="col"
                        className="w-52 text-gray-500 py-4 text-center"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="flex items-center  text-gray-500 py-4 pl-28"
                      >
                        Status

                        <BsArrowDownShort className="text-lg font-semibold" />
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-500  py-4 text-center"
                      >
                        Created
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-500  py-4 pl-28 text-left"
                      >
                        Action
                      </th>
                      {/* <th
                        scope="col"
                        className=" text-gray-500 py-4 text-left"
                      /> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300">
                    {product?.length > 0 ? renderList() : <NoData />}
                  </tbody>
                </table>
              </div>
              {product?.length > 0 ? (
                <ReactPaginate
                  previousLabel="Previous"
                  nextLabel="Next"
                  pageCount={pagingCount}
                  onPageChange={changePage}
                  containerClassName="pagination-button"
                  previousLinkClassName="previousButton"
                  nextLinkClassName="nextButton"
                  disabledClassName="paginationDisabled"
                  activeClassName="paginationActive"
                  className="w-full flex flex-row justify-around py-3 text-xs shadow-md"
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </section>
      </article>
      {/* <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DeleteInstitution />
      </Modal> */}
      {/* <DeleteModal handleClose={() => setIsOpen(false)} isOpen={isOpen} /> */}
    </>
  );
};

export default ProductList;
