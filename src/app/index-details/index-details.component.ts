import { Component, OnInit } from '@angular/core';
import { CubeService } from "../cube.service";
import { QueryResult } from "../entities/QueryResult";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-index-details',
  templateUrl: './index-details.component.html',
  styleUrls: ['./index-details.component.css']
})
export class IndexDetailsComponent implements OnInit {
  indexName: string;
  hierarchy: string;
  // queryResult$: Observable<QueryResult>;
  queryResult: QueryResult;
  constructor(
    private cubeService: CubeService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
    {
      this.indexName = params['name'];
      this.hierarchy = params['hierarchy'];
      // this.queryResult$ =  this.queryService.performQuery(this.indexName, this.hierarchy);
    });
    this.cubeService.performQuery(this.indexName, this.hierarchy).subscribe(result =>
    {
      this.queryResult = result;
      console.log(this.queryResult);
      this.render();
    });

  }

  render(): void {
    const data = this.queryResult;
    const table = document.getElementById( 'test' );
    const tableHeader = document.createElement( 'th' );
    const tableBody = document.createElement( 'tbody' );

    for ( let i = 0; i < data.columns.length; i++ ) {
      const tr = document.createElement( 'tr' );

      tr.appendChild( document.createElement( 'td' ) );

      for ( let j = 0; j < data.columns[ i ].length; j++ ) {
        const innerTd = document.createElement( 'td' );

        innerTd.textContent = data.columns[ i ][ j ];
        tr.appendChild( innerTd );

        tableHeader.appendChild( tr );
      }
    }

    for ( let i = 0; i < data.rows.length; i++) {
      const row = data.rows[ i ];
      const tr = document.createElement( 'tr' );
      const td = document.createElement( 'td' );

      td.textContent = row.join();
      tr.appendChild( td );

      for ( let j = 0; j < data.columns.length; j++ ) {
        const td = document.createElement( 'td' );

        td.textContent = data.values[ i * data.columns.length + j  ];
        tr.appendChild( td );
      }

      tableBody.appendChild( tr );
    }

    table.innerHTML = tableHeader.innerHTML + tableBody.innerHTML;
    console.log(table.innerHTML);
  }

}
