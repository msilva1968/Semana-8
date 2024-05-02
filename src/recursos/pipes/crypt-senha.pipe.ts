import { Injectable, PipeTransform } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptSenhaPipe implements PipeTransform {
  constructor(private configService: ConfigService) {}

  async transform(senha: string) {
    const sal = this.configService.get<string>('SAL_SENHA');

    const senhaCrypt = await bcrypt.hash(senha, sal!);

    return senhaCrypt;
  }
}
