import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Usuario {
  id: number;

  @IsNotEmpty({
    message: 'O nome de usuário é obrigatório',
  })
  @IsString({
    message: 'O nome de usuário precisa ser uma string',
  })
  nomeDeUsuario: string;

  @IsEmail(
    {},
    {
      message: 'o email precisa ser um endereço de email válido',
    },
  )
  @IsNotEmpty({
    message: 'O email é obrigatório',
  })
  email: string;

  @IsNotEmpty({
    message: 'A Senha é obrigatória',
  })
  senha: string;

  @IsNotEmpty({
    message: 'O nome completo é obrigatório',
  })
  @IsString({
    message: 'O nome completo precisa ser um string',
  })
  nomeCompleto: string;
  dataDeEntrada: Date;
}
