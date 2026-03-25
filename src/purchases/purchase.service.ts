import { Injectable } from '@nestjs/common';
import purchases from '../../data/purchases.json';

@Injectable()
export class PurchaseService {
  getPurchase(): { success: boolean; data: typeof purchases; message: string } {
    return {
      success: true,
      data: purchases,
      message: 'Fetched purchases successfully',
    };
  }
}
