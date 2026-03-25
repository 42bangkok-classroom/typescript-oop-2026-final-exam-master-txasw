import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';

@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const rawdata = fs.readFileSync('data/purchases.json', 'utf-8');
    const data = JSON.parse(rawdata) as Purchase[];
    return data;
  }
}
