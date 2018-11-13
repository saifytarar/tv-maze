
import { Component, OnInit,ViewChild} from '@angular/core';
import {  ShowsService } from '../shows.service';
import { Show } from '../show/show';

import { MatTableDataSource,MatPaginator } from '@angular/material';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
  providers:[ShowsService]
})
export class ShowListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

    showsList: Show;
    error: {};
    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['name'];

    searchKey: string;

    constructor(private showService: ShowsService) {

    }

    ngOnInit() {
    
      this.showService.getShows().subscribe(
       list => {
          let array = list.map(item => {
             return {
                ...item
            };
          });
          this.listData = new MatTableDataSource(array); 
          this.listData.paginator = this.paginator;
          this.listData.filterPredicate = function(data, filter: string): boolean {
            return data.name.toLowerCase().includes(filter);
          };

          
        }
        
      ); 

      
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {    
   this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
