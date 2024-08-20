import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../../features/heroes/interfaces/hero.interface';
import { environments } from '../../../../environments/environments';

@Pipe({
  name: 'imgHero'
})
export class ImgHeroPipe implements PipeTransform {

  transform(hero:Hero): string {
    if (!hero.id && !hero.alt_img) {
      return environments.notImg;
    }

    return hero.alt_img ? hero.alt_img : `${environments.baseUrlImg}${hero.id}${environments.imgJpg}`;
  }

}
