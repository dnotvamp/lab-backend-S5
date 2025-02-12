import { Test, TestingModule } from '@nestjs/testing';
import { MahasiswaFotoController } from './mahasiswa-foto.controller';
import { MahasiswaFotoService } from './mahasiswa-foto.service';

describe('MahasiswaFotoController', () => {
  let controller: MahasiswaFotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MahasiswaFotoController],
      providers: [MahasiswaFotoService],
    }).compile();

    controller = module.get<MahasiswaFotoController>(MahasiswaFotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
