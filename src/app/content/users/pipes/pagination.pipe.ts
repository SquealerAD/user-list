import {Inject, Pipe, PipeTransform} from "@angular/core";
import {NUM_OF_ITEM_PER_PAGE} from "../../../shared/exports";
import {User} from "../users-list/user/user.model";

@Pipe({
  name: 'paginationPipe'
})
export class PaginationPipe implements PipeTransform{
  constructor(@Inject(NUM_OF_ITEM_PER_PAGE) private numOfItemsPerPage){}
  transform(value: Array<User>, pageNum: number): any {
    return value.slice(this.numOfItemsPerPage * (pageNum - 1), this.numOfItemsPerPage * pageNum);
  }
}
