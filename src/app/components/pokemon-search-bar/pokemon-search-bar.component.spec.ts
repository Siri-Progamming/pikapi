import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchBarComponent } from './pokemon-search-bar.component';

describe('PokemonSearchBarComponent', () => {
  let component: PokemonSearchBarComponent;
  let fixture: ComponentFixture<PokemonSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
