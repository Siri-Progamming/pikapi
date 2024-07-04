import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNameListComponent } from './pokemon-name-list.component';

describe('PokemonNameListComponent', () => {
  let component: PokemonNameListComponent;
  let fixture: ComponentFixture<PokemonNameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonNameListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
