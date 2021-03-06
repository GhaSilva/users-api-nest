import { Module } from "@nestjs/common";
import { IsNomeDeUsuarioUnico, IsNomeDeUsuarioUnicoConstraint } from "./is-nome-de-usuario-unico.validator";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService, IsNomeDeUsuarioUnicoConstraint]
})
export class UsuarioModule {

}