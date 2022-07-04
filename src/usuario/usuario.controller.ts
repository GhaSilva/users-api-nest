import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { get } from "http";
import { isInt16Array } from "util/types";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService){}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string){
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        const usuarioCriado = this.usuarioService.cria(usuario)
        return usuarioCriado;
    }
}