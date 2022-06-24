import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCreatComponent } from './cadastro-create.component';

describe('CadastroCreatComponent', () => {
  let component: CadastroCreatComponent;
  let fixture: ComponentFixture<CadastroCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
