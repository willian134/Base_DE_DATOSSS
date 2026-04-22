import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly service: UsuariosService) {}

  // CREATE
  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  // READ
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // UPDATE
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(Number(id), body);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}