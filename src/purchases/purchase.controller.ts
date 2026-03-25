import { Controller, Get, HttpCode } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  getPurchases() {
    return {
      success: true,
      data: this.purchaseService.findAll(),
      message: 'Fetched purchases successfully',
    };
  }
}
