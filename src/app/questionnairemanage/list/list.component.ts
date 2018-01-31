import {Component, OnInit} from '@angular/core';
import {ModalHelper} from "../../shared/helper/modal.helper";
import {EditComponent} from "../edit/edit.component";
import {NzMessageService} from "ng-zorro-antd";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor(private datePipe:DatePipe,private msg: NzMessageService, private  modal: ModalHelper) {
  }

  searchObj = {
    name: ''
  };
  messageId;
  dataSet = [{
    record_id: '23',
    code: '23',
    name: '33',
    version: '33',
    memo: '33',
    status:1,
    agreement: '333'
  }];
  page = {
    current: 1,
    pageSize: 40,
    total: 0
  };

  ngOnInit() {
  }


  onSearch(reload = false) {
    if (reload) {
      this.page.current = 1
    }

  }


  edit(data = '') {
    this.modal.open(EditComponent, {data},800).subscribe(res => {
      this.onSearch();
    })

  }

}
