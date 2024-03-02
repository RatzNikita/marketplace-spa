import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {TypeOrmModule} from "@nestjs/typeorm";
import {join} from 'path'
import {ProductModule} from './product/product.module';
import {UserModule} from './user/user.module';
import auth from "./middlewares/auth";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456',
            database: 'postgres',
            entities: [__dirname + '/**/**.entity{.ts,.js}'],
            synchronize: true,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'class',
            },
            context: ({req}) => ({
                user: req.user,
            }),
            typePaths: ['./**/*.graphql'],
        }),

        ProductModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(auth)
            .exclude('/login','/registration')
            .forRoutes('*')
    }

}
