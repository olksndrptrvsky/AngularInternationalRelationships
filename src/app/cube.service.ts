import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {QueryResult} from "./entities/QueryResult";
import {Cube} from "./entities/Cube";

@Injectable({
  providedIn: 'root'
})
export class CubeService {

  constructor(
    private http: HttpClient,
  ) { }

  performQuery(query: string, param: string) : Observable<QueryResult> {
    return this.http.get<QueryResult>(`/api/cubes/queries/${query}/${param ? param : ''}`);
  }

  getCubes(): Observable<string[]> {
    return this.http.get<string[]>('/api/cubes/');
  }

  getCube(cubeName: string) : Observable<Cube> {
    return this.http.get<Cube>(`/api/cubes/${cubeName}`);
  }

  performCustomQuery(query: string) : Observable<QueryResult> {
    return this.http.post<QueryResult>(`/api/cubes/query`, JSON.stringify(query));
  }
}
