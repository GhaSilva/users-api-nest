import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [
    {
      id: 1,
      nomeDeUsuario: 'ghabriel',
      email: 'ghabriel@email.com',
      senha: '123456',
      nomeCompleto: 'Ghabriel Silva',
      dataDeEntrada: new Date(),
    },
  ];

  public buscaTodosOsUsuarios() {
    return this.usuarios;
  }

  public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    return this.usuarios.find(
      (usuario) => usuario.nomeDeUsuario == nomeDeUsuario,
    );
  }

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }
}
