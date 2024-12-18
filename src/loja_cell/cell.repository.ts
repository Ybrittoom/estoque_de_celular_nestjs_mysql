import { Injectable } from '@nestjs/common';

@Injectable()
export class CellRepository {
  private celulares = [];

  async addCelular(celular) {
    this.celulares.push(celular);
  }

  async listar() {
    return this.celulares;
  }
}
