import React, { useEffect, useState } from "react";
import EmployeeModal from "../components/EmployeeModal";
import StudentModal from "../components/StudentModal";
import "./style.css"

import CreateForm from "../components/CreateForm";

const ListPage = ({ title, apiFetchFunction, apiCreateFunction, apiFetchDetailFunction, expandDataKey, expandItemKey }) => {
    const [items, setItems] = useState([]);
    const [expandedItem, setExpandedItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [expandedData, setExpandedData] = useState({});
    const [showCreateModal, setShowCreateModal] = useState(false); // To control the visibility of Create Modal

    useEffect(() => {
        apiFetchFunction(currentPage)
            .then((response) => {
                setItems(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => console.error("Error fetching items:", error));
    }, [currentPage, apiFetchFunction]);

    const toggleExpand = (itemId) => {
        if (expandedItem === itemId) {
            setExpandedItem(null);
            return;
        }

        // Fetch details for the item when expanding
        apiFetchDetailFunction(itemId)
            .then((response) => {
                setExpandedData(response.data[expandDataKey]);
                setExpandedItem(itemId);
            })
            .catch((error) => console.error("Error fetching item details:", error));
    };

    const handleCreateClick = () => {
        setShowCreateModal(true);
    };

    const handleCreateClose = () => {
        setShowCreateModal(false);
    };

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="col-12 col-md-10">
                <h2 className="mb-4 text-center">{title}</h2>

                <button onClick={handleCreateClick} className="btn btn-success mb-4">
                    Add New {title}
                </button>

                {showCreateModal && (
                    <CreateForm
                        title={title}
                        apiCreateFunction={apiCreateFunction}
                        onClose={handleCreateClose}
                    />
                )}

                <table className="table table-bordered table-hover table-striped shadow-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <React.Fragment key={item.id}>
                                <tr onClick={() => toggleExpand(item.id)} className="clickable-row">
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{expandedItem === item.id ? "▼" : "▶"}</td>
                                </tr>
                                {expandedItem === item.id && (
                                    <tr>
                                        <td colSpan="3">
                                            <h4>{expandItemKey}:</h4>
                                            <ul className="expanded-data-list">
                                                {expandedData && expandedData.length > 0 ? (
                                                    expandedData.map((data) => (
                                                        <li key={data.id} onClick={() => setSelectedItem(data)}>
                                                            {data.firstName ? data.firstName : data.name}
                                                        </li>
                                                    ))
                                                ) : (
                                                    <p>No {expandItemKey.toLowerCase()} available</p>
                                                )}
                                            </ul>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
                {selectedItem && (
                    expandItemKey === "Employees" ? (
                        <EmployeeModal employee={selectedItem} onClose={() => setSelectedItem(null)} />
                    ) : (
                        <StudentModal course={selectedItem} onClose={() => setSelectedItem(null)} />
                    )
                )}

                <div className="pagination-container text-center mt-4">
                    <button
                        className="btn btn-primary mr-2"
                        disabled={currentPage === 0}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                        Previous
                    </button>
                    <span>Page {currentPage + 1} of {totalPages}</span>
                    <button
                        className="btn btn-primary ml-2"
                        disabled={currentPage + 1 === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListPage;
