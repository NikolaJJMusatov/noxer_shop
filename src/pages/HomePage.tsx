import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFilterProductsQuery, useGetOnMainProductsQuery } from '../api/productsApi';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import { Banner } from '../components/Banner/Banner';
import { CardsGrid } from '../components/CardsGrid/CardsGrid';
import { CatalogFilter } from '../components/CatalogFilter/CatalogFilter';
import SearchBar from '../features/search/SearchBar';
import { setCategory } from '../features/search/searchSlice';
import { Category, Product } from '../types/product';
import './HomePage.css';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { query: search, category } = useSelector((state: RootState) => state.search);

  const [page, setPage] = useState(1);
  const [allCards, setAllCards] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const {
    data: mainProducts,
    isLoading: mainLoading,
    error: mainError,
  } = useGetOnMainProductsQuery();

  const popularQueries =
    mainProducts?.special_project_parameters_json?.fast_search_strings?.parameters_list || [];

  const {
    data: filteredProducts,
    isLoading: filterLoading,
    error: filterError,
  } = useFilterProductsQuery({
    search,
    page,
    category_ids: category ? [category] : [],
  });

  const error = search || category ? filterError : mainError;
  const loaderRef = useRef<HTMLDivElement>(null);

  // --- Главная без фильтра
  useEffect(() => {
    if (!search && !category && mainProducts) {
      setAllCards(mainProducts.products || []);
      setPage(1);

      if (mainProducts.categories?.length) {
        const random10 = [...mainProducts.categories].sort(() => 0.5 - Math.random()).slice(0, 10);
        setCategories(random10);
      }
    }
  }, [search, category, mainProducts]);

  // --- Фильтр по поиску или категории
  useEffect(() => {
    if ((search || category) && filteredProducts?.products) {
      if (page === 1) {
        setAllCards(filteredProducts.products);
      } else {
        setAllCards(prev => [...prev, ...filteredProducts.products]);
      }
    }
  }, [search, category, filteredProducts, page]);

  const isLoading = search || category ? filterLoading : mainLoading;

  useEffect(() => {
    if (!search && !category) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && filteredProducts?.pagination.has_next) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [filteredProducts, search, category]);

  return (
    <main className="main-container">
      <SearchBar popularQueries={popularQueries} />
      <Banner />
      <CatalogFilter
        categories={categories}
        selectedCategory={category}
        onSelectCategory={id => {
          dispatch(setCategory(category === id ? null : id));
          setPage(1);
        }}
      />

      {error && (
        <div className="main-error-message">
          <p>Не удалось загрузить данные. Попробуйте позже.</p>
        </div>
      )}

      {isLoading && <p className="main-loading-message">Загрузка...</p>}
      <CardsGrid cards={allCards} />

      {(search || category) && <div ref={loaderRef} style={{ height: '1px' }} />}
    </main>
  );
}
