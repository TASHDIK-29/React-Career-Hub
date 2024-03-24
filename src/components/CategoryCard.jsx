
const CategoryCard = ({item}) => {
   
    const {availability, category_name} = item;
    return (
        <div className="bg-base-200 p-5 rounded-xl">
            <img src="" alt="" />
            <h3 className="text-xl font-bold">{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default CategoryCard;