// Типизация для категорий
export interface CategoryImage {
  name: string;
  type: string;
  url: string;
}

export interface Category {
  Category_ID: number;
  Category_Image: string | null;
  Category_Name: string;
  category_images: CategoryImage[] | null;
  parent_category_id: number;
  sort_order: number;
}

// Типизация для изображений продукта
export interface ProductImage {
  Image_ID?: number;
  Image_URL?: string;
  MainImage?: boolean;
  Product_ID?: number;
  position?: string;
  sort_order?: number;
  title?: string;
  image_url?: string; // для нестандартного ключа
}

// Типизация для маркировок продукта
export interface ProductMark {
  Mark_Name: string;
  color_code: string;
}

// Типизация продукта
export interface Product {
  id: number;
  images: ProductImage[];
  marks: ProductMark[];
  name: string;
  old_price: number | null;
  price: number;
}

// Типизация пагинации
export interface Pagination {
  current_page: number;
  has_next: boolean;
  has_prev: boolean;
  per_page: number;
  total_pages: number;
  total_products: number;
}

// Основной ответ API
export interface ProductsResponse {
  categories: Category[];
  id_mark_for_sale: number;
  pagination: Pagination;
  products: Product[];
  special_project_parameters: Record<string, any>;
  special_project_parameters_actions: Record<string, any>[];
  special_project_parameters_badges: Record<string, any>[];
  special_project_parameters_json: Record<string, any>;
  status: string;
}