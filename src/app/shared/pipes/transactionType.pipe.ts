import { Pipe, PipeTransform } from '@angular/core';
import { TransactionType } from '../../transaction/constants/transaction-type.const';

@Pipe({
  name: 'transactionType',
  standalone: true
})
export class TransactionTypePipe implements PipeTransform {

  transform(transactionType: string) {
    switch (transactionType) {

      case TransactionType.Expense:
        return '#FFF6F6';

      case TransactionType.Income:
        return '#F9FFFB';

    }

    return null;
  }
}
