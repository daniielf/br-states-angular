import { TestBed } from '@angular/core/testing';

import { StatesService } from './states.service';
import { HttpClientModule } from '@angular/common/http';

describe('StatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [StatesService],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: StatesService = TestBed.get(StatesService);
    expect(service).toBeTruthy();
  });

  it('should use URL: https://servicodados.ibge.gov.br/api/v1/localidades/estados/', () => {
    const service: StatesService = TestBed.get(StatesService);
    expect(service.serviceBaseUrl).toEqual('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
  })
});
