import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class SobrePage {
  titulo: string = 'Bem-vindo!';
  descricao: string = 'Olá, meu nome é Karina dos Santos Jordão. ' +
                      'Faço parte da turma 24104936.    ' +
                      'Estou animada para aprender mais sobre desenvolvimento de aplicativos!';

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/home']);
  }
}
