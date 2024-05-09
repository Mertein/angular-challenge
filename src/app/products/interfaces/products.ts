export interface Products {
  title: string;
  position: number;
  price: number;
  category: string;
  description: string;
  image: string;
  id: number;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
