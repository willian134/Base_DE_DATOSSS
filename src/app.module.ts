import { Module } from '@nestjs/common';

import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, UsuarioModule],
})
export class AppModule {} 
