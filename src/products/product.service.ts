import { Injectable } from '@nestjs/common';
import products from '../../data/products.json';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  findAll(): { success: boolean; data: Product[]; message: string } {
    return {
      success: true,
      data: products,
      message: 'Fetched products successfully',
    };
  }
}
