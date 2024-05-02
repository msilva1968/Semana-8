import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @Exclude()
  @Column({ name: 'senha', length: 255, nullable: false })
  senha: string;

  @Column({ name: 'cpf', length: 11, nullable: false })
  cpf: string;

  @Column({ name: 'telefone', length: 10, nullable: false })
  telefone: string;

  @Column({ name: 'estado', length: 2, nullable: false })
  estado: string;

  @Column({ name: 'cidade', length: 50, nullable: false })
  cidade: string;

  @Column({ name: 'bairro', length: 50, nullable: false })
  bairro: string;

  @Column({ name: 'rua', length: 200, nullable: false })
  rua: string;

  @Column({ name: 'numero', length: 10, nullable: false })
  numero: string;

  @Column({ name: 'complemento', length: 100, nullable: false })
  complemento: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

}