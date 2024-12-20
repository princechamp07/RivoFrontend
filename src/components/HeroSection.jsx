import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";
import db from "../db/db.json"; // Import the local mock data

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Function to fetch data with fallback logic
async function fetchProducts() {
  try {
    // Try fetching data from the primary API
    const primaryResponse = await axios.get("/api/v1/product");
    console.log("Data fetched from primary API:", primaryResponse.data);
    return primaryResponse.data;
  } catch (primaryError) {
    console.error("Primary API failed:", primaryError);

    try {
      // If primary API fails, fallback to backup using db.json
      console.warn("Using fallback to local db.json.");
      return db || [];
    } catch (backupError) {
      console.error("Backup API and local db.json both failed:", backupError);
      return [];
    }
  }
}

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hot");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  console.log(products);

  const BestSelling = products
    .filter((item) => item.sub_category === "Best Selling")
    .slice(0, 6);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(
    (item) => item.sub_category === selectedCategory
  );
  const randomProducts = shuffleArray(filteredProducts).slice(0, 6);

  return (
    <div>
      <section className="bg-white flex flex-col items-center">
        <div>
          <div className="flex flex-col items-center w-full">
            <div className="text-5xl text-green-900 font-bold upper font-serif italic mt-10">
              Best Selling
            </div>
            <div className="text-2xl font-bold p-12">
              Get in on the trend with our curated selection of best-selling
              styles
            </div>
            <Cards BestSelling={BestSelling} />
            <button className="border-2 md:mb-28 border-green-900 text-green-900 px-20 p-4 font-bold">
              See all{" "}
              <i className="fa fa-arrow-right pl-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div>
          <div className="text-5xl font-mono flex text-center m-auto justify-center font-bold text-green-900 md:mx-48 mt-10">
            Our products
          </div>
          <div>
            <ul className="justify-center text-xl cursor-pointer flex space-x-4 my-14">
              <li
                onClick={() => handleCategoryChange("Sale")}
                className={
                  selectedCategory === "Sale"
                    ? "border-b-2 border-green-950"
                    : ""
                }
              >
                Sale
              </li>
              <li
                onClick={() => handleCategoryChange("Hot")}
                className={
                  selectedCategory === "Hot"
                    ? "border-b-2 border-green-950"
                    : ""
                }
              >
                Hot
              </li>
              <li
                onClick={() => handleCategoryChange("New Arrival")}
                className={
                  selectedCategory === "New Arrival"
                    ? "border-b-2 border-green-950"
                    : ""
                }
              >
                New Arrival
              </li>
              <li
                onClick={() => handleCategoryChange("Accessories")}
                className={
                  selectedCategory === "Accessories"
                    ? "border-b-2 border-green-950"
                    : ""
                }
              >
                Accessories
              </li>
            </ul>
          </div>
        </div>
        <Cards Random={randomProducts} />
      </section>
    </div>
  );
};

export default HeroSection;
