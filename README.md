# Laporan Proyek Nest.js

## 1. Pendahuluan

Proyek ini adalah aplikasi backend yang dikembangkan menggunakan Nest.js, sebuah framework untuk Node.js yang berbasis TypeScript. Nest.js menawarkan arsitektur modular yang cocok untuk aplikasi skala besar dan dapat diperluas dengan mudah.

## 2. Struktur Folder Proyek

```
backend/
│── node_modules/       # Dependensi proyek (tidak disertakan dalam repository)
│── dist/               # Hasil build dari TypeScript ke JavaScript
│── prisma/             # Konfigurasi database dengan Prisma ORM
│   ├── migrations/     # Folder berisi skrip migrasi database
│   │   ├── {timestamp}/  # Folder berisi skrip migrasi spesifik
│   │   │   ├── migration.sql  # File SQL untuk migrasi database
│   │   │   ├── migration_lock.json  # File lock migrasi
│   ├── schema.prisma   # Definisi skema Prisma
│── socket/             # Folder untuk konfigurasi WebSocket
│   ├── client.html     # File HTML untuk testing WebSocket
│── src/                # Folder utama berisi source code aplikasi
│   ├── chat/           # Modul untuk fitur chat
│   │   ├── chat.gateway.ts       # WebSocket gateway untuk chat
│   │   ├── chat.module.ts        # Modul utama untuk chat
│   │   ├── chat.service.ts       # Service untuk logika bisnis chat
│   ├── decorator/      # Folder untuk custom decorators
│   │   ├── user.decorator.ts     # Custom decorator untuk user
│   ├── dto/            # Data Transfer Objects (DTOs)
│   │   ├── create-mahasiswa.dto.ts  # DTO untuk membuat mahasiswa
│   │   ├── login-user.dto.ts        # DTO untuk login pengguna
│   ├── entity/         # Model database aplikasi
│   │   ├── user.entity.ts   # Model database untuk pengguna
│   ├── guards/         # Middleware security (Guards)
│   │   ├── auth.guard.ts   # Guard untuk autentikasi pengguna
│   ├── profile/        # Modul untuk profil pengguna
│   │   ├── profile.controller.ts    # Controller profil
│   │   ├── profile.module.ts        # Modul profil
│   │   ├── profile.service.ts       # Service untuk logika bisnis profil
│   ├── app.controller.ts   # Controller utama aplikasi
│   ├── app.module.ts       # Modul utama aplikasi
│   ├── app.service.ts      # Service utama aplikasi
│   ├── auth.module.ts      # Modul autentikasi
│   ├── prisma.ts          # File konfigurasi Prisma
│   ├── main.ts            # Entry point aplikasi
│── test/                  # Folder untuk pengujian aplikasi
│   ├── app.e2e-spec.ts    # Pengujian end-to-end aplikasi
│   ├── jest-e2e.json      # Konfigurasi Jest untuk pengujian
│── .env                   # Konfigurasi lingkungan
│── package.json           # Daftar dependensi dan skrip
│── nest-cli.json          # Konfigurasi CLI Nest.js
│── tsconfig.json          # Konfigurasi TypeScript
│── README.md              # Dokumentasi proyek
```

## 3. Teknologi yang Digunakan

- **Nest.js** - Framework backend berbasis Node.js dan TypeScript
- **TypeScript** - Bahasa pemrograman yang digunakan dalam proyek ini
- **Node.js** - Runtime JavaScript yang digunakan
- **Express.js** - Digunakan sebagai HTTP framework di bawah Nest.js
- **MongoDB atau PostgreSQL** - Basis data (sesuai dengan konfigurasi proyek)
- **Prisma ORM** - Untuk pengelolaan database secara lebih efisien
- **WebSocket** - Untuk fitur real-time chat

## 4. Instalasi Proyek Nest.js

1. Pastikan **Node.js** telah terinstall.
2. Clone repository ini ke dalam folder lokal.
3. Masuk ke dalam direktori proyek dan jalankan perintah berikut untuk menginstal dependensi:
   ```sh
   npm install
   ```
4. Buat file `.env` berdasarkan contoh `.env.example` dan sesuaikan dengan konfigurasi lingkungan Anda.
5. Jalankan migrasi database:
   ```sh
   npx prisma migrate dev
   ```

## 5. Penjelasan Setiap File

- **prisma/schema.prisma** - Definisi skema database menggunakan Prisma ORM.
- **prisma/migrations/** - Folder berisi skrip migrasi database.
- **socket/client.html** - File untuk testing komunikasi WebSocket.
- **src/chat/** - Modul chat berbasis WebSocket.
  - **chat.gateway.ts** - Mengatur komunikasi real-time menggunakan WebSocket.
  - **chat.service.ts** - Menyimpan logika bisnis chat.
  - **chat.module.ts** - Modul yang mengelola semua aspek chat.
- **src/decorator/user.decorator.ts** - Custom decorator untuk user authentication.
- **src/dto/** - Berisi Data Transfer Objects (DTOs) untuk validasi request API.
  - **create-mahasiswa.dto.ts** - DTO untuk pembuatan mahasiswa.
  - **login-user.dto.ts** - DTO untuk login pengguna.
- **src/entity/user.entity.ts** - Model database untuk pengguna.
- **src/guards/auth.guard.ts** - Guard untuk mengecek autentikasi pengguna.
- **src/profile/** - Modul yang mengelola profil pengguna.
  - **profile.controller.ts** - Mengatur endpoint API terkait profil.
  - **profile.service.ts** - Menyediakan logika bisnis untuk profil.
  - **profile.module.ts** - Modul utama untuk profil.
- **src/auth.module.ts** - Modul untuk autentikasi pengguna.
- **src/main.ts** - Entry point aplikasi.
- **src/app.module.ts** - Modul utama aplikasi yang menghubungkan semua modul lainnya.
- **test/app.e2e-spec.ts** - Pengujian end-to-end menggunakan Jest.

## 6. Cara Menjalankan Proyek

1. Jalankan aplikasi dalam mode pengembangan:
   ```sh
   npm run start:dev
   ```
2. Untuk menjalankan proyek dalam mode produksi:
   ```sh
   npm run build
   npm run start
   ```

## 7. Kesimpulan

Proyek ini menggunakan Nest.js untuk membangun backend yang modular dan scalable. Dengan struktur folder yang jelas dan penggunaan TypeScript, proyek ini dirancang untuk pengembangan yang mudah dan terorganisir. Selain itu, Prisma ORM digunakan untuk mempermudah pengelolaan database, dan WebSocket digunakan untuk fitur chat real-time.

