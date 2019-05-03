import { Component, OnInit, ViewChild, Output, EventEmitter, LOCALE_ID } from '@angular/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatStepper, MatStep, MatDatepickerInputEvent } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ui-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {


  isLinear = false;
  generalForm: FormGroup;
  dateAndLocationForm: FormGroup;
  today: Date = new Date();
  minDate: Date = new Date();
  currentHourAndMinutes: string =
    this.today.getHours().toString() + ':' + this.today.getMinutes().toString();

  @Output() emitFormData = new EventEmitter<FormGroup[]>();
  @ViewChild('startDatePicker') startDatePicker;

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

  constructor(private datePipe: DatePipe, private formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.generalForm = this.formBuilder.group({
      title             : ['', Validators.required],
      description       : ['', Validators.required],
      price             : ['0.00', Validators.required],
      maxNumberOfSeats  : ['', Validators.required],
      category          : ['', Validators.required],
      subjects          : ['', Validators.required],
      additionalHours   : ['00:00', Validators.required],
      subscriptionLink  : ['', Validators.required],
      headerImage       : ['', Validators.required],
    });


    this.dateAndLocationForm = this.formBuilder.group({
      street            : ['', Validators.required],
      number            : ['', Validators.required],
      additionalInfo    : ['', Validators.required],
      cep               : ['', [Validators.required, Validators.maxLength(8)]],
      city              : ['Porto Alegre', Validators.required],
      state             : ['RS', Validators.required],
      observation       : ['', [Validators.maxLength(140)]],
      startDate         : ['', Validators.required],
      startHour         : ['00:00', Validators.required],
      endDate           : ['', Validators.required],
      endHour           : ['00:00', Validators.required]
    });

    console.log('HORA E MINUTO: '+this.currentHourAndMinutes);

  }

  getErrorMessage() {

  }

  onFileSelected() {
    console.log("ARQUIVO SENDO CAPTURADO");

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
