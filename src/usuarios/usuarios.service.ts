import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {


  private usuarios = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Luis' },
    { id: 3, nombre: 'Carlos' },
  ];

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find(u => u.id === id);
  }

  create(data: any) {
    const nuevo = {
      id: this.usuarios.length + 1,
      ...data,
    };
    this.usuarios.push(nuevo);
    return nuevo;
  }

  update(id: number, data: any) {
    const index = this.usuarios.findIndex(u => u.id === id);

    if (index === -1) return { message: 'Usuario no encontrado' };

    this.usuarios[index] = {
      ...this.usuarios[index],
      ...data,
    };

    return this.usuarios[index];
  }

  remove(id: number) {
    const index = this.usuarios.findIndex(u => u.id === id);

    if (index === -1) return { message: 'Usuario no encontrado' };

    const eliminado = this.usuarios.splice(index, 1);

    return eliminado;
  }
}