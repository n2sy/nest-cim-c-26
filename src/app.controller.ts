import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('tekup')
export class AppController {
  @Get('test')
  getHello(@Req() requete: Request): string {
    console.log(requete);
    return '<h1>Classe CIM C </h1>';
  }

  @Get(':id')
  getTitleById(@Param() p: any) {
    console.log(p);
    return { message: `L'id récupéré est ${p.id}` }; // et la catégorie est ${p.category}`}
  }

  @Get('file')
  getfile(@Res() reponse: Response) {
    reponse.sendFile('index.html', { root: 'src' });
  }

  @Get('title')
  getTitle(@Res() reponse: Response) {
    reponse.send({ message: 'Titre du cours' });
  }

  @Post('add')
  postTitle(@Body() corps: any) {
    return { body: corps };
  }

  //@Get('all/:id/by/:category')

  @Get('all')
  getTitles(@Query() qp: any) {
    console.log(qp);
    return {
      message: `Le premier queryParams ${qp.page} et le second est ${qp.online}`,
    };
  }
}
