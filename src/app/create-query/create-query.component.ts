import { Component, OnInit } from '@angular/core';
import { CubeService } from "../cube.service";
import { Cube, Dimension, Hierarchy } from "../entities/Cube";
import { IndexDetailsComponent } from "../index-details/index-details.component";
import * as _ from "lodash"
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-create-query',
  templateUrl: './create-query.component.html',
  styleUrls: ['./create-query.component.css']
})
export class CreateQueryComponent implements OnInit {
  cubes: string[];
  currentCube: Cube;
  queryStructure: string[] = new Array(3);
  query: string;
  measure: Dimension;
  constructor(
    private cubeService: CubeService,
  ) { }

  ngOnInit(): void {

    this.cubeService.getCubes().subscribe(cubes =>
    {
      this.cubes = cubes;
      this.setNewCube(cubes[0])
    });
  }

  private setNewCube(cubeName: string) : void {
    this.cubeService.getCube(cubeName).subscribe(cube =>
    {
        this.currentCube = cube;
        this.measure = _.remove(this.currentCube.dimensions, function (dim) {
          return dim.caption == "Measures";
        }).pop();
    });
  }



  selectCube(cubeName: string) : void {
    this.setNewCube(cubeName);
    this.clearQueryStructure();
  }

  addToQuery(object: string[]) : void {
    let name = `[${object[0]}].[${object[1]}].`;
    if (object.length == 2)
    {
      name += `Members`;
    }
    else
      name += `[${object[2]}]`;
    this.queryStructure.unshift(name);
  }

  removeFromQuery(index: number) {
    this.queryStructure.splice(index,1);
  }

  clearQueryStructure() : void {
    this.queryStructure = [];
  }

  buildQuery() : void {
    let cubeName = this.currentCube.caption;
    this.query = `SELECT NON EMPTY ${this.queryStructure[0]} ON COLUMNS `;
    if (this.queryStructure[1]) {
      this.query += `, NON EMPTY ${this.queryStructure[1]} ON ROWS `;
    }
    this.query += `FROM [${cubeName}] `;
    if (this.queryStructure[2]) {
      this.query += `WHERE ${this.queryStructure[2]}`;
    }
  }



}
