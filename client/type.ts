
export interface CarCardType {
    id: number;
    name: string
    year: number
    price: number
    photo: string
}

export interface CarsComplete {
    id: number;
    name: string
    year: number
    price: number
    photo: string
    segment: string
    thumbnail: string
}

export interface CarDetailsComplete {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
  title: string;
  description: string;
  model_features: Carfeature[];
  model_highlights: Carhighlight[];
}

export interface Carhighlight {
  title: string;
  content: string;
  image: string;
}

export interface Carfeature {
  name: string;
  description: string;
  image: string;
}