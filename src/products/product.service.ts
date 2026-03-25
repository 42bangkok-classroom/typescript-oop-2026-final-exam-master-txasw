import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';

@Injectable()
export class ProductService {
  findAll(): Product[] {
    const rawdata = fs.readFileSync('data/products.json', 'utf-8');
    const data = JSON.parse(rawdata) as Product[];
    return data;
  }
}
