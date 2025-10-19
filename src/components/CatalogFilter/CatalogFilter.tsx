import "./CatalogFilter.css";
import { Category } from "../../types/product";


interface CatalogFilterProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (id: number | null) => void;
}

export const CatalogFilter = ({ categories, onSelectCategory, selectedCategory }: CatalogFilterProps) => {
  
  return (
    <section className="catalogFilter-container">
      <div className="catalogFilter-scroll">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`catalogFilter-item ${selectedCategory === cat.Category_ID ? "active" : ""}`}
            onClick={() => onSelectCategory(cat.Category_ID)}
          >
            <img
              src={
                cat.Category_Image ||
                cat.category_images?.[0]?.url ||
                './nullitemIcon.png'
              }
              alt={cat.Category_Name}
            />
            <span
            >
              {cat.Category_Name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
