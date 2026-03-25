import { Injectable } from '@nestjs/common';
import purchases from '../../data/purchases.json';
import { Purchase } from './purchase.interface';

@Injectable()
export class PurchaseService {
  findAll(): { success: boolean; data: Purchase[]; message: string } {
    return {
      success: true,
      data: purchases,
      message: 'Fetched purchases successfully',
    };
  }
}
