import { Body, Controller, Get, Post } from '@nestjs/common';
import { CellRepository } from './cell.repository';


@Controller('/celulares')
export class CellController {
  constructor(private cellRepository: CellRepository) {}

  @Post()
  async adicionarCelular(@Body() dadosCell) {
    this.cellRepository.addCelular(dadosCell);
    return dadosCell
  }

  @Get()
  async listUsuario() {
    return this.cellRepository.listar()
  }
}
