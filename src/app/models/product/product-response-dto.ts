export interface ProductResponseDTO{
  id : number;
  name : string;
  description : string;
  category_id: number;
  price : number;
  image: File | Blob | null;
  stock : number;
  promotion: number;
}
