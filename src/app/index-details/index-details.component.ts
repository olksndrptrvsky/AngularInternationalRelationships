import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CubeService } from "../cube.service";
import { QueryResult } from "../entities/QueryResult";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-index-details',
  templateUrl: './index-details.component.html',
  styleUrls: ['./index-details.component.css']
})
export class IndexDetailsComponent implements OnInit, OnChanges {
  indexName: string;
  hierarchy: string;
  @Input() query: string;
  queryResult: QueryResult;
  constructor(
    private cubeService: CubeService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
    {
      if (!this.query) //from ulr
      {
        this.indexName = params['name'];
        this.hierarchy = params['hierarchy'];
        this.cubeService.performQuery(this.indexName, this.hierarchy).subscribe(result =>
        {
          this.queryResult = result;
        });
      }
      else
      {
        this.cubeService.performCustomQuery(this.query).subscribe(result =>
        {
          this.queryResult = result;
        });
      }
    });
  }

  getRowFromSet(rowSet: string[]) {
    let result = "";
    rowSet.forEach(item => result += `${item}, `);
    return result.substring(0, result.length - 2);
  }


  ngOnChanges(changes: SimpleChanges) {
    // this.ngOnInit();
    if (!this.query) //from ulr
    {

    }
    else
    {
      this.cubeService.performCustomQuery(this.query).subscribe(result =>
      {
        this.queryResult = result;

      });
    }
  }

}
