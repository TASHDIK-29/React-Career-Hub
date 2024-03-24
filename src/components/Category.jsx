import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])
    return (
        <div className="text-center space-y-6 mt-5 mb-10 w-[1000px] mx-auto">
            <h1 className="text-3xl font-bold ">Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-4 gap-4">
                {
                    category.map(item => <CategoryCard key={item.id} item={item}></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default Category;