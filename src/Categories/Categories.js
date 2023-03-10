import React from 'react';
import { FaPlus } from "react-icons/fa";
const Categories = () => {
    return (
        <div>
            {/* <!--start content--> */}
            <section className="page-content">

                {/* <!--end row--> */}



                {/* <!--end row--> */}



                {/* <!--end row--> */}
                <div className="card radius-10">
                    <div className="card-header bg-transparent">
                        <div className="row g-3 align-items-center">
                            <div className="col">
                                <h5 className="mb-0">Recent Orders</h5>
                            </div>
                            <div className="col">
                                <div className="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                                    {/* <a className="btn-outline-primary" href="#">View</a> */}
                                    {/* <a className="btn btn-hover btn-primary" href="#"><FaPlus/>&nbsp;Add</a> */}
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-mdb-toggle="modal"
                                        data-mdb-target="#exampleModal"
                                        data-mdb-whatever="@getbootstrap"
                                    >
                                        <FaPlus/>&nbsp; &nbsp; Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>#ID</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#89742</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="product-box border">
                                                    <img src="assets/images/avatars/avatar-1.png" alt="" />
                                                </div>
                                                <div className="product-info">
                                                    <h6 className="product-name mb-1">Smart Mobile Phone</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>2</td>
                                        <td>$214</td>
                                        <td>Apr 8, 2021</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3 fs-6">
                                                <a href={"javascript"} className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i className="las la-eye"></i></a>
                                                <a href={"javascript"} className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i className="las la-edit"></i></a>
                                                <a href={"javascript"} className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="las la-trash"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </section>
            {/* <!--end page main--> */}

            {/* modal start here  */}



            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Category Name:*</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>

                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Category:*</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Description:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;