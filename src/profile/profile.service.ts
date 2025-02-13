import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { existsSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import { extname, join } from 'path';
import PrismaService from 'src/prisma';


@Injectable()
export class ProfileService {
    constructor(private readonly prisma: PrismaService) { }

    async uploadFile(file: Express.Multer.File, nim: string) {
        try {
            const mahasiswa = await this.prisma.mahasiswa.findUnique({
                where: { nim },
            });

            if (!mahasiswa) throw new NotFoundException("Tidak Menemukan Mahasiswa");

            if (mahasiswa.foto_profile) {
                const filePath = join(process.cwd(), 'uploads', mahasiswa.foto_profile);
                if (existsSync(filePath)) {
                    rmSync(filePath);
                }
            }

            const uploadPath = join(process.cwd(), 'uploads');
            if (!existsSync(uploadPath)) {
                mkdirSync(uploadPath);
            }

            const fileExt = extname(file.originalname);
            const baseFilename = mahasiswa.nim;
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const filename = `${baseFilename}-${uniqueSuffix}${fileExt}`;
            const filePath = join(uploadPath, filename);

            writeFileSync(filePath, file.buffer);

            await this.prisma.mahasiswa.update({
                where: { nim },
                data: { foto_profile: filename },
            });

            return { filename, path: filePath };
        } catch (error) {
            throw new InternalServerErrorException("Terjadi kesalahan saat mengunggah file");
        }
    }

    async sendMyFotoProfile(nim: string) {
        try {
            const mahasiswa = await this.prisma.mahasiswa.findUnique({
                where: { nim },
            });

            if (!mahasiswa) throw new NotFoundException("Mahasiswa tidak ditemukan");

            return mahasiswa.foto_profile;
        } catch (error) {
            throw new InternalServerErrorException("Terjadi kesalahan saat mengambil foto profil");
        }
    }
}