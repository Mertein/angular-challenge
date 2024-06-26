import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsService } from './../services/products.service';
import { MaterialModule } from '../material.module';
import { MatTableDataSource } from '@angular/material/table';
import { Products } from './interfaces/products';
import { NgbdModalContent } from './components/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule,NgbdModalContent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',

})
export default class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'title', 'price', 'category', 'Actions'];
  selection = new SelectionModel<Products>(true, []);
  dataSource = new MatTableDataSource<Products>([]);
  totalProducts = 0;
  originalData: Products[] = [];
  categories: string[] = [];
  selectedCategory = new FormControl('');
  isLoggedIn : boolean = false;
  private modalService = inject(NgbModal);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productsService: ProductsService, private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if(!this.isLoggedIn){
      this.router.navigate(['/login']);
    }

    this.productsService.getProducts().subscribe((products) => {
      this.dataSource.data = products;
      this.originalData = [...products];
    });

    this.productsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.selectedCategory.valueChanges.subscribe((selectedCategory) => {
      this.applyFilter(selectedCategory!);
    });
    this.totalProducts = this.dataSource.data.length;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(selectedCategory: string): void {
    let filteredData = this.originalData;
    if (selectedCategory) {
      filteredData = filteredData.filter(product => product.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    this.dataSource.data = filteredData;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }


  checkboxLabel(row?: Products): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openModal(product: Products): void {
    const {title, category, description, image, id, price, rating} = product;
    const {rate} = rating;
    const modalRef = this.modalService.open(NgbdModalContent);

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.category = category;
    modalRef.componentInstance.price = price;
    modalRef.componentInstance.image = image;
    modalRef.componentInstance.rating = rate;
    modalRef.componentInstance.description = description;
    modalRef.componentInstance.id = id;
  };

}



export { Products };

