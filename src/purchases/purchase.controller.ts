import { Controller, Get, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get(':productId')
  getPurchases(@Param() productId: string) {
    console.log(productId);
    return {
      success: true,
      data: this.purchaseService.findAll(),
      message: 'Fetched purchases successfully',
    };
  }
}
