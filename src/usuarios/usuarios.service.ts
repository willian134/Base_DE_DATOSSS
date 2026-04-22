import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  // CREATE
  create(data: any) {
    return this.prisma.usuario.create({ data });
  }

  // READ
  findAll() {
    return this.prisma.usuario.findMany();
  }

  // UPDATE
  update(id: number, data: any) {
    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  // DELETE
  remove(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}