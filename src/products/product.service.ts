import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';

@Injectable()
export class ProductService {
  findAll(): { success: boolean; data: Product[]; message: string } {
    const rawdata = fs.readFileSync('/data/products.json', 'utf-8');
    const data = JSON.parse(rawdata) as Product[];
    return {
      success: true,
      data: data,
      message: 'Fetched products successfully',
    };
  }
}
