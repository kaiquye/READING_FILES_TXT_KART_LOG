import { IUploadFileReq, UseCaseStructure } from '../structure/useCase.structure';
import fs from 'fs';
import path from 'path';
import { injectable } from 'tsyringe';
import { diskStorage } from 'multer';

interface IGrid {
  data?: string;
  numero?: string;
  nome?: string;
  voltas?: string;
  tempoDeVolta?: string;
  veloMedia?: string;
}

@injectable()
export class UploadFileUseCase extends UseCaseStructure<IUploadFileReq, any> {
  async execute(data: IUploadFileReq) {
    try {
      const filename = path.join(__dirname + `../../../../../files/${data.fileName}`);

      const file = fs.readFileSync(filename, 'utf-8');
      const linhas = file.split(/\r?\n/);

      let grid: IGrid[] = [];

      linhas.forEach((linha, index) => {
        let data_ = {
          data: '',
          numero: '',
          nome: '',
          voltas: '',
          tempoDeVolta: '',
          veloMedia: '',
        };

        const linhaNova = linha.split(/\s+/).join(`|`);
        const tamanhoDaLinha = linhaNova.length;
        const linhaNova2 = linhaNova.substring(13, tamanhoDaLinha);

        data_.data = linhaNova.slice(0, 12);

        const indexOf = linhaNova2.indexOf('|');
        const teste = linhaNova2.slice(0, indexOf);
        const linhaNova3 = linhaNova2.substring(indexOf + 3, tamanhoDaLinha);

        data_.numero = teste;

        const indexOf2 = linhaNova3.indexOf('|');
        const teste2 = linhaNova3.slice(0, indexOf2);
        const linhanova4 = linhaNova3.substring(indexOf2 + 1, tamanhoDaLinha);
        data_.nome = teste2;

        const indexof3 = linhanova4.indexOf('|');
        const teste3 = linhanova4.slice(0, indexof3);
        const linhanova5 = linhanova4.substring(indexof3 + 1, tamanhoDaLinha);
        data_.voltas = teste3;

        const indexf4 = linhanova5.indexOf('|');
        const teste4 = linhanova5.slice(0, indexf4);
        const linhanova6 = linhanova5.substring(indexf4 + 1, tamanhoDaLinha);
        data_.tempoDeVolta = teste4;

        data_.veloMedia = linhanova6;

        grid.push(data_);
      });

      grid.sort((a, b) => Number(b.voltas) - Number(a.voltas));

      const rs = grid.sort((a, b) => {
        const tempoa = a.tempoDeVolta?.split(':').join('') || 0;
        const tempob = b.tempoDeVolta?.split(':').join('') || 0;
        const voltaa = Number(a.voltas);
        const voltab = Number(b.voltas);

        if (voltaa === 4 && tempoa < tempob) {
          return -1;
        }

        if (voltab !== 4) {
          if (voltaa === 3 && tempoa < tempob) {
            return -1;
          }
        }

        if (voltab !== 3 && voltab !== 4) {
          if (voltaa === 2 && tempoa < tempob) {
            return -1;
          }
        }

        if (voltab !== 2 && voltab !== 3 && voltab !== 4) {
          if (voltaa === 1 && tempoa < tempob) {
            return -1;
          }
        }

        return 0;
      });

      console.log(rs);
    } catch (error) {
      console.log(error);
    }
  }
}
