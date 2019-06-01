import { Component, OnInit, NgModule } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AppComponent } from 'src/app/app.component';
import { MatTableDataSource } from '@angular/material';



// const ELEMENT_DATA: Categories[] = [
//   {position: 1, name: 'categoria1'},
//   {position: 2, name: 'categoria2'},
//   {position: 3, name: 'categoria3'},
//   {position: 4, name: 'categoria4'},
//   {position: 5, name: 'categoria5'},
//   {position: 6, name: 'categoria6'},
//   {position: 7, name: 'categoria7'},
// ];
export interface Categories {
  title: string;
  
}



@Component({
  selector: 'app-register-event-type',
  templateUrl: './register-event-type.component.html',
  styleUrls: ['./register-event-type.component.scss']
})

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    SwiperModule
  ],
  providers: [],
  bootstrap: []
})


export class RegisterEventTypeComponent implements OnInit{
  categoryForm: FormGroup;
  public all_items: any = [];
  public items: any = [];
  public newItem: Categories[];

  public ELEMENT_DATA: Categories[];

  constructor (
    private eventService: EventsService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
    ) {
        // const response = this.eventService.get_categories();
        // response.subscribe(  
        //   items =>this.setAll(items),
        //   error => console.log(error))

        // this.items = this.all_items; 
      }

      setAll(items) {
        this.all_items = items;
        this.items = this.all_items;
        this.dataSource = this.all_items;
        console.log(this.dataSource);
      }

      columnsToDisplay: string[] = ['title'];
      dataSource = this.ELEMENT_DATA;
  
      ngOnInit() {
        this.categoryForm = this.formBuilder.group({
          catName: ['', Validators.required]
        })

        // get all categgories
        // this.eventService.get_categories()
        // .subscribe(() => this.dataSource = this.all_items);
        
        this.loadCategoryList();
      };
  

      categoryDelete(id : string){
        console.log(id);
        this.eventService.delete_category(id).subscribe(_ => {
          this.loadCategoryList();
        });
        
      }

      loadCategoryList(){
        // const content = this.eventService.get_categories();
        // content.subscribe (
        //   items => this.setAll(items),
        //   error => console.log(error))

        //   this.items = this.all_items;
        this.eventService.get_categories().subscribe(
          itens => this.setAll(itens),

        );
      }

      onSubmit(){

        if(this.categoryForm.invalid){
          return;
        }

        // const categoryName = this.categoryForm.get('catName').value;
        
        // this.newItem = [{title: categoryName}];
        // const newCategories = this.dataSource.concat(this.newItem);
        // this.dataSource = newCategories;

        this.eventService.createCategory(this.categoryForm).subscribe(obj => {
          this.snackBar.open("Cadastrado com sucesso","Ok",{duration:5000});
          this.loadCategoryList()
        })
      }
}