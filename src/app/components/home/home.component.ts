import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { pharmaDatabaseSearchComponent } from '../pharma-database-search/pharma-database-search.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { LoaderComponent } from '../../commons/loader/loader.component';
import { UtilityService } from '../../services/utility-service/utility.service';

@Component({
  selector: 'chem-home',
  standalone: true,
  imports: [NgIf, CommonModule, pharmaDatabaseSearchComponent, SearchResultsComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  LimitValue = '';
  user: any = null;
  showResult: boolean = false;
  loading: boolean = false;
  basicProductData: any = {};
  allDataSets: any = [];
  CurrentAPIBody = {
    body: {},
    page_no: 1,
    api_url: '',
    currentTab: '',
    actual_value: '',
  };

  
  @ViewChild('priviledgeModal') priviledgeModal!: ElementRef;
  resultTabs: any = {};

  constructor(private cdr: ChangeDetectorRef,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    const auth = localStorage.getItem('auth');
    this.allDataSets = this.utilityService.getDataStates();
    this.resultTabs = this.utilityService.getAllTabsName();
    
    try {
      this.user = auth ? JSON.parse(auth) : null; // Safely parse only if `auth` exists
    } catch (error) {
      console.error('Error parsing auth data from localStorage', error);
      this.user = null;
    }
  }

  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  handleBackButton(data: any) {
    this.showResult = data;
  }

  handleLoading(event: boolean) {
    this.loading = event;
  }

  handleSetLoading(data: any) {
    this.loading = data;
  }

  handleSearchResults(data: any) {
    this.allDataSets = this.utilityService.getDataStates();
    this.basicProductData = { ...data };
    if (
      this.basicProductData?.basic_product_count &&
      this.basicProductData?.basic_product_data
    ) {
      for (let i = 0; i < this.basicProductData?.basic_product_data?.length; i++) {
        this.allDataSets[i][this.resultTabs.productInfo.name] =
          this.basicProductData?.basic_product_data[i];
      }
    } 

    console.log(this.allDataSets);
    console.log(this.basicProductData);
  }

  handleShowResult(data: any) {
    this.showResult = true;
    this.CurrentAPIBody.api_url = data?.API_URL;
    this.CurrentAPIBody.body = data?.body;
    this.CurrentAPIBody.currentTab = data?.currentTab;
    this.CurrentAPIBody.actual_value = data?.actual_value;
  }

  closeModal() {
    const modalElement = this.priviledgeModal.nativeElement;
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.removeAttribute('aria-modal');
    modalElement.removeAttribute('role');
  }

  openPriviledgeModal(data: any) {
    this.LimitValue = data;
    const modalElement = this.priviledgeModal.nativeElement;
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
    modalElement.setAttribute('aria-hidden', 'false');
    modalElement.setAttribute('aria-modal', 'true');
    modalElement.setAttribute('role', 'dialog');
  }
}