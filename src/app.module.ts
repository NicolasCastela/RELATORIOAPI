import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { ProcessosModule } from './processos/processos.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, ClienteModule, PagamentoModule, ProcessosModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
