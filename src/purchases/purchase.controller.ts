import { Controller, Get, Query } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  getPurchases(
    @Query('customerName') customerName?: string,
    // @Query('startDate') startDate?: string,
    // @Query('endDate') endDate?: string,
  ) {
    return {
      success: true,
      data: this.purchaseService.findAll(customerName),
      message: 'Fetched purchases successfully',
    };
  }

  @Get(':id')
  findOne(id: number) {
    return {
      success: true,
      data: this.purchaseService.findOne(id),
      message: 'Fetched purchases successfully',
    };
  }
}
