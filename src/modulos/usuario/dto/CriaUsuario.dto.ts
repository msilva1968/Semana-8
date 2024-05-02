import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  senha: string;

  @IsNotEmpty({ message: 'O cpf não pode ser vazio' })
  cpf: string;

  @IsNotEmpty({ message: 'O telefone não pode ser vazio' })
  telefone: string;

  @IsNotEmpty({ message: 'O estado não pode ser vazio' })
  estado: string;

  @IsNotEmpty({ message: 'A cidade não pode ser vazia' })
  cidade: string;

  @IsNotEmpty({ message: 'O bairro não pode ser vazio' })
  bairro: string;

  @IsNotEmpty({ message: 'A rua não pode ser vazio' })
  rua: string;

  @IsNotEmpty({ message: 'O número não pode ser vazio' })
  numero: string;

  complemento: string;  
}
