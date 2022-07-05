import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico.validator';

export class Usuario {
	id: number;

	@IsNotEmpty({message: 'O nome de usuário é obrigatório',})
	@IsString({message: 'O nome de usuário precisa ser uma string',})
	@IsNomeDeUsuarioUnico({message: 'O nome informado já existe em nossa base de dados',})
  @Expose({name: 'username'})
	nomeDeUsuario: string;

	@IsEmail({},{message: 'o email precisa ser um endereço de email válido',})
	@IsNotEmpty({message: 'O email é obrigatório'})
	email: string;

	@IsNotEmpty({message: 'A Senha é obrigatória',})
  @Expose({name: 'password'})
  @Exclude({toPlainOnly: true})
	senha: string;

	@IsNotEmpty({message: 'O nome completo é obrigatório',})
	@IsString({message: 'O nome completo precisa ser um string',})
  @Expose({name: 'fullname'})
	nomeCompleto: string;

  @Expose({name: 'joinDate'})
	dataDeEntrada: Date;
}
