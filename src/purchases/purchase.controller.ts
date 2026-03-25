import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  getPurchases() {
    return this.purchaseService.getPurchase();
  }
}
