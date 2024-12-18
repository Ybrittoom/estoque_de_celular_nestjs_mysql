import { Module } from "@nestjs/common";
import { CellController } from "./cell.controller";
import { CellRepository } from "./cell.repository";

@Module({
    controllers: [CellController],
    providers: [CellRepository],
})
export class cellModule {}