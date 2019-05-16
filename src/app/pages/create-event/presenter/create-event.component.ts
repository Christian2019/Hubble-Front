import { Component, OnInit, ViewChild, Output, EventEmitter, LOCALE_ID } from '@angular/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatStepper, MatStep, MatDatepickerInputEvent, MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-ui-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {


  isLinear                = false;
  base64HeaderImage       : any;
  imageHeaderDefaultValue : string = '';
  generalForm             : FormGroup;
  dateAndLocationForm     : FormGroup;
  today                   : Date = new Date();
  minDate                 : Date = new Date();
  currentHourAndMinutes   : string =
    this.today.getHours().toString() + ':' + this.today.getMinutes().toString();

  @Output() emitFormData = new EventEmitter<FormGroup[]>();
  @ViewChild('startDatePicker') startDatePicker;

  /**
   * @TODO Refatorar para receber a chamada do get de categorias
   *
   */
  categories = [
    { name: 'Palestra' },
    { name: 'Seminário' },
    { name: 'Oficina/Workshop' },
    { name: 'Congresso' },
    { name: 'Simpósio' },
    { name: 'Feira' },
    { name: 'Dissertação' },
    { name: 'Encontro' }
  ];

   /**
   * @TODO Refatorar para receber a chamada do get de assuntos
   *
   */
  subjects = [
    {name: 'Economia'},
    {name: 'Direito'},
    {name: 'Administração'},
    {name: 'História'},
    {name: 'Geologia'},
    {name: 'Biologia'},
    {name: 'Geografia'},
    {name: 'Medicina'},
    {name: 'Enfermagem'},
    {name: 'Odontologia'},
    {name: 'Jornalismo'},
    {name: 'Engenharia'},
    {name: 'Civil'},
    {name: 'Química'},
    {name: 'Metalúrgica'},
    {name: 'Mecânica'},
    {name: 'Minas'},
    {name: 'Filosofia'},
    {name: 'Letras'},
    {name: 'Computação'},
    {name: 'Ciências'},
    {name: 'Biblioteconomia'},
    {name: 'Sociologia'},
    {name: 'Paleontologia'},
    {name: 'Arqueologia'},
    {name: 'Constitucional'},
    {name: 'Criminal'},
    {name: 'Agronomia'},
    {name: 'Zootecnia'},
    {name: 'Teologia'},
    {name: 'Informática'},
    {name: 'Negócios'},
    {name: 'Metalogenia'},
    {name: 'Mineração'},
    {name: 'Ambiental'},
    {name: 'Botânica'},
    {name: 'Artes'},
    {name: 'Música'},
    {name: 'Dança'},
    {name: 'Erudita'},
    {name: 'Contemporânea'},
    {name: 'Clássica'},
    {name: 'Bioquímica'},
    {name: 'Biomedicina'},
    {name: 'Orgânica'},
    {name: 'Inorgânica'},
    {name: 'Matemática'},
    {name: 'Contábil'},
    {name: 'Física'},
    {name: 'Astronomia'},
    {name: 'Quântica'},
    {name: 'Hídrica'},
    {name: 'Hidrologia'},
    {name: 'Pedagogia'},
    {name: 'Pediatria'},
    {name: 'Ginecologia'},
    {name: 'Arquitetura'},
    {name: 'Moda'},
    {name: 'Urbanismo'},
    {name: 'Alimentos'},
    {name: 'Inovação'},
    {name: 'Aeronáutica'},
    {name: 'Contábeis'},
    {name: 'Finanças'},
    {name: 'Sociais'},
    {name: 'Design'},
    {name: 'Comunicação'},
    {name: 'Educação'},
    {name: 'Elétrica'},
    {name: 'Eletrônica'},
    {name: 'Energia'},
    {name: 'Diversidade'},
    {name: 'Automação'},
    {name: 'Produção'},
    {name: 'Aoftware'},
    {name: 'Hardware'},
    {name: 'Tecnologia'},
    {name: 'Fisioterapia'},
    {name: 'Bacharelado'},
    {name: 'Licenciatura'},
    {name: 'Gastronomia'},
    {name: 'Nutrição'},
    {name: 'Audiovisual'},
    {name: 'Propaganda'},
    {name: 'Publicidade'},
    {name: 'Sistemas'},
    {name: 'Informação'},
    {name: 'Internacional'},
    {name: 'Nacional'},
    {name: 'Empreendedorismo'},
    {name: 'Liderança'},
    {name: 'Marketing'},
    {name: 'Gestão'},
    {name: 'Humanos'},
    {name: 'Humanas'},
    {name: 'Exatas'},
    {name: 'Materiais'},
    {name: 'Teatro'},
    {name: 'Biotecnologia'},
    {name: 'Natureza'},
    {name: 'Psicologia'},
    {name: 'Psiquiatria'},
    {name: 'Estatística'},
    {name: 'Farmácia'},
    {name: 'Saúde'},
    {name: 'Relações'},
    {name: 'Cartografia'}

  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private formBuilder         : FormBuilder,
    private breakpointObserver  : BreakpointObserver,
    private snackbar            : MatSnackBar
  ) { }

  ngOnInit() {
    this.generalForm = this.formBuilder.group({
      title             : [null, Validators.required],
      description       : [null, Validators.required],
      price             : ['0.00', Validators.required],
      maxNumberOfSeats  : [null, Validators.required],
      category          : [null, Validators.required],
      subjects          : [null, Validators.required],
      additionalHours   : ['00:00', Validators.required],
      subscriptionLink  : [null, Validators.required],
      headerImage       : [null, Validators.required],
    });


    this.dateAndLocationForm = this.formBuilder.group({
      street            : [null, Validators.required],
      number            : [null, Validators.required],
      additionalInfo    : [null, Validators.required],
      district          : [null, Validators.required],
      cep               : [null, [Validators.required, Validators.maxLength(8)]],
      city              : {value: 'Porto Alegre', disabled: true},
      state             : {value: 'RS', disabled: true},
      observation       : [null, [Validators.maxLength(140)]],
      startDate         : [null, Validators.required],
      startHour         : ['00:00', Validators.required],
      endDate           : [null, Validators.required],
      endHour           : ['00:00', Validators.required]
    });
  }

  getErrorMessage() {

  }

  async onFileInput(event: any) {
    const file: File = event.target.files[0];
    const isImage = this.validateImage(file);

    if (!isImage){
      this.snackbar.open('A imagem de capa precisa ter um formato de imagem '+
       'válido. Verifique a extensão do arquivo e tente novamente.', 'Ok',
       {duration: 5000})
      return;
    }

    try {
      const base64image      = await this.toBase64(file);
      this.base64HeaderImage = this.sanitizeBase64(base64image);
    }
    catch (error) {
      this.snackbar.open('Não foi possível converter o arquivo escolhido para base64.'+
      ' Verifique se o arquivo não está corrompido e tente novamente.', 'Ok',
       {duration: 5000});
    }
    this.imageHeaderDefaultValue = file.name;
  }

  private validateImage(file: File): Boolean {
    return file.type.startsWith('image/');
  }

  private toBase64(file: File) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onerror = (error) => {
        reader.abort();
        reject(new DOMException('Não foi possível fazer o parse do arquivo. Mensagem: ' + error));
      };
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
 }

  private sanitizeBase64(base64file) {
    return base64file.substring(base64file.indexOf(',') + 1);
  }

  onFileSelected($image: Event) {


  }

  onFormSubmit() {
    // const data = new FormData();
    const formsData = [];
    const generalFormControls = Object.keys(this.generalForm.controls);
    const dateAndLocationFormControls = Object.keys(this.dateAndLocationForm.controls);

    generalFormControls.forEach(control => {
      formsData.push({
          controlName   : control,
          controlValue  : this.generalForm.get(control).value
      });
    });

    dateAndLocationFormControls.forEach(control => {
      formsData.push({
        controlName   : control,
        controlValue  : this.dateAndLocationForm.get(control).value
      });
    });

    this.emitFormData.emit([this.generalForm, this.dateAndLocationForm]);
  }


  onDateChange(date: MatDatepickerInputEvent<Date>) {
    this.minDate = date.value;
  }
}