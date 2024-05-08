import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

export interface Products {
  title: string;
  position: number;
  price: number;
  category: string;
}

const ELEMENT_DATA: Products[] = [
  {position: 1, title: 'Hydrogen', price: 1.0079, category: 'H'},
  {position: 2, title: 'Helium', price: 4.0026, category: 'He'},
  {position: 3, title: 'Lithium', price: 6.941, category: 'Li'},
  {position: 4, title: 'Beryllium', price: 9.0122, category: 'Be'},
  {position: 5, title: 'Boron', price: 10.811, category: 'B'},
  {position: 6, title: 'Carbon', price: 12.0107, category: 'C'},
  {position: 7, title: 'Nitrogen', price: 14.0067, category: 'N'},
  {position: 8, title: 'Oxygen', price: 15.9994, category: 'O'},
  {position: 9, title: 'Fluorine', price: 18.9984, category: 'F'},
  {position: 10, title: 'Neon', price: 20.1797, category: 'Ne'},
];

/**
 * @title Table with selection
 */

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  displayedColumns: string[] = ['select', 'position', 'title', 'price', 'category'];
  dataSource = new MatTableDataSource<Products>(ELEMENT_DATA);
  selection = new SelectionModel<Products>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Products): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

