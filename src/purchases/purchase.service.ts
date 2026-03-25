import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';

@Injectable()
export class PurchaseService {
  findAll(): { success: boolean; data: Purchase[]; message: string } {
    const rawdata = fs.readFileSync('data/purchases.json', 'utf-8');
    const data = JSON.parse(rawdata) as Purchase[];
    return {
      success: true,
      data: data,
      message: 'Fetched purchases successfully',
    };
  }
}
