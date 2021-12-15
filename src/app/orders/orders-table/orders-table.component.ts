import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import * as _ from 'lodash';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { GetOrdersQuery, Orders } from 'src/generated/graphql';
import { OrdersService } from '../orders-service';
import { OrdersTableDataSource } from './orders-table-datasource';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  animations: [rowsAnimation],
})
export class OrdersTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GetOrdersQuery['orders']>;
  dataSource: OrdersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'created_at', 'amount'];

  constructor(private ordersService: OrdersService) {
    this.dataSource = new OrdersTableDataSource(ordersService);
    this.dataSource.loading.next(true);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  addOrder() {
    console.log('Add one');
    this.dataSource.loading.next(true);
    this.ordersService.createOrder({ amount: 100 }).subscribe((response) => {
      if (response && response.data) {
        const createdOrder: Orders = response.data.insert_orders_one as Orders;
        console.log(createdOrder);
      } else {
        console.log(response);
      }
    });
  }

  updateFirst() {
    this.dataSource.loading.next(true);
    console.log(this.dataSource.currentPageData.value);
    const firstFromPage: Orders = _.cloneDeep(
      _.first(this.dataSource.currentPageData.value)
    );
    // HERE must clean useless data
    delete firstFromPage.order_lines;
    delete firstFromPage.order_lines_aggregate;
    delete firstFromPage.__typename;

    firstFromPage.amount = Math.random();
    this.ordersService
      .updateOrder(firstFromPage)
      .subscribe(({ errors, data }) => {
        console.log(data);
      });
    console.log('Update', firstFromPage);
  }
}
