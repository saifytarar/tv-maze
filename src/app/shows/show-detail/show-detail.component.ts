import { Component, OnInit} from '@angular/core';
import { ShowsService } from '../shows.service';
import { ShowDetail } from '../show/show';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
  providers: [ShowsService]
})
export class ShowDetailComponent implements OnInit {
  
  showDet: ShowDetail;
  error: {};
   id:'';
  constructor(private showService:ShowsService, private route: ActivatedRoute) {;
  }

  ngOnInit() {

   this.id = this.route.snapshot.params['id'];
    this.showService.getShowDetail(this.id).subscribe(
      (data: ShowDetail) => this.showDet = data,
      error => this.error = error
    );
    
  }

}
