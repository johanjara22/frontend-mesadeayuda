import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTecnicoComponent } from './ticket-tecnico.component';

describe('TicketTecnicoComponent', () => {
  let component: TicketTecnicoComponent;
  let fixture: ComponentFixture<TicketTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
