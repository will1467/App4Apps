import { TestBed, inject } from '@angular/core/testing';

import { PostgreSqlService } from './postgre-sql.service';

describe('PostgreSqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostgreSqlService]
    });
  });

  it('should be created', inject([PostgreSqlService], (service: PostgreSqlService) => {
    expect(service).toBeTruthy();
  }));
});
