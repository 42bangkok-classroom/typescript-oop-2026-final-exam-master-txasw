import { Controller, Get, Param } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: number) {
    return {
      success: true,
      data: this.purchaseService.findOne(id),
      message: 'Fetched purchases successfully',
    };
  }
}
