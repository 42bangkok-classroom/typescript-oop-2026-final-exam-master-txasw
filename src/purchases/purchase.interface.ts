export interface Purchase {
  id: number;
  customerName: string;
  purchaseDate: string;
  items: PurchaseItem[];
}

export interface PurchaseItem {
  productId: number;
  quantity: number;
  price: number;
}
