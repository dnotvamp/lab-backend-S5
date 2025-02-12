import { Test, TestingModule } from '@nestjs/testing';
import { MahasiswaFotoService } from './mahasiswa-foto.service';

describe('MahasiswaFotoService', () => {
  let service: MahasiswaFotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MahasiswaFotoService],
    }).compile();

    service = module.get<MahasiswaFotoService>(MahasiswaFotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
