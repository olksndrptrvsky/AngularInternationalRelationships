import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-text-query',
  templateUrl: './text-query.component.html',
  styleUrls: ['./text-query.component.css']
})
export class TextQueryComponent implements OnInit {
  query: string;
  queryForm;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.queryForm = this.formBuilder.group({
      query: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(queryData): void {
    this.query = queryData.query;
  }

}
