import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface abc {
    id: number;
    title: string;
    category: string;
    price: number;
    images: string[]; // Corrected to an array of strings
}

const Store = () => {
    const [info, setInfo] = useState<abc[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get("https://dummyjson.com/products");
                console.log(data.data.products);
                setInfo(data.data.products);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // Calculate paginated data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = info.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page changes
    const totalPages = Math.ceil(info.length / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Product Details</h1>
            <table className="table">
                <thead className="table table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item: abc) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                        borderRadius: "50%",
                                    }}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => navigate(`/Product/${item.id}`)}
                                    className="btn btn-success"
                                >
                                    Buy Now
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination UI */}
            <div>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    style={{ marginRight: "10px" }}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    style={{ marginRight: "10px" }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Store;
