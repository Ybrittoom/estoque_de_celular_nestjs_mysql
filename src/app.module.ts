import { Module } from '@nestjs/common';
import { cellModule } from './loja_cell/cell.module';

@Module({
  imports: [cellModule],
})
export class AppModule {}
