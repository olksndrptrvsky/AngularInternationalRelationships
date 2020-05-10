import { Component, OnInit } from '@angular/core';
import { CubeService } from "../cube.service";
import { Cube, Dimension, Hierarchy } from "../entities/Cube";

@Component({
  selector: 'app-create-query',
  templateUrl: './create-query.component.html',
  styleUrls: ['./create-query.component.css']
})
export class CreateQueryComponent implements OnInit {
  cubes: string[];
  currentCube: Cube;
  currentCubeName: string;
  constructor(
    private cubeService: CubeService,
  ) { }

  ngOnInit(): void {
    this.cubeService.getCubes().subscribe(cubes =>
    {
      this.cubes = cubes;
      this.cubeService.getCube(cubes[0]).subscribe(cube =>
      {
        this.currentCube = cube;
      });
    });
  }

  selectCube(cubeName: string) : void {
    this.cubeService.getCube(cubeName).subscribe( cube =>
    {
      this.currentCube = cube;
      console.log(JSON.stringify((this.currentCube)));
    });
  }

  getDimensions(): Dimension[] {
    console.log(this.currentCube.dimensions);
    return this.currentCube.dimensions;
  }

}
