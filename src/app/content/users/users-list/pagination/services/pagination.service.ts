
import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {MAX_NUM_OF_PAGE_NUMBERS, NUM_OF_ITEM_PER_PAGE} from "../../../../../shared/exports";
import {User} from "../../user/user.model";


@Injectable()
export class PaginationService {
  constructor(@Inject(NUM_OF_ITEM_PER_PAGE) private itemsPerPage: number,
              @Inject(MAX_NUM_OF_PAGE_NUMBERS) private maxPageNums: number){}
  private numOfPages$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private currentPage: BehaviorSubject<number> = new BehaviorSubject<number>(1);


  getItemsPerPage(){
    return this.itemsPerPage;
  }

  setCurrentPage(pageNum: number){
    this.currentPage.next(pageNum);
  }

  getCurrentPage(): Observable<number>{
    return this.currentPage.asObservable();
  }
}
