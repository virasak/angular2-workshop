import {Component} from "angular2/core";
import {Router}    from "angular2/router";
import {ddescribe} from "angular2/testing";

@Component({
  selector: 'table-view',
  inputs: ['order'],
  templateUrl: 'components/tables/table-view/table-view.html'
})

export class TableView {

  constructor(private router:Router) {}

  public editOrder(orderId){
    this.router.navigate( ['OrderView', { id: orderId }] );
  }
}
