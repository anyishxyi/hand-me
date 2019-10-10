import { Component, OnInit } from '@angular/core';
import { async } from 'q';
import { ParticularService } from 'src/app/Services/user/particular.service';

@Component({
  selector: 'app-home-component',
  template: `
    <router-outlet></router-outlet>
    <header class="home__header">
      <div class="d-flex justify-content-around">
        <div>
          <img class="home__logo" src="./assets/high-five.jpg">
        </div>
        <div>
          <nav>
            <a class="navbar-brand" href="#">Accueil</a>
            <a class="navbar-brand" routerLink="/hand-me/account-particular/create" routerLinkActive="active">Connexion</a>
            <a class="navbar-brand" href="#">Evenement</a>
            <a class="navbar-brand" href="#">A propos</a>
          </nav>
        </div>
      </div>
    </header>
    <section class="home__banner">
      <div class="d-flex flex-column">
        <div><p class="banner__slogan">Bienvenue à toi Highfiver</p></div>
        <div><p class="banner__txt">Participe à des activitées dynamique et fait avancer ta communauté</p></div>
      </div>
    </section>
    <section class="home__value">
      <h1>No valeurs</h1>
      <div class="d-flex justify-content-around">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../../../assets/286X180.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Partage</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../../../assets/286X180.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Entre-aide</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="../../../assets/286X180.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Communauté</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </section>
    <section class="home__figure">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="icon-box">
              <i class="fa fa-briefcase"></i>
            </div>
            <p class="txt_white">{{counter1}}</p>
            <p class="txt_white">Event avaible</p>
          </div>

          <div class="col-md-3">
            <div class="icon-box">
              <i class="fa fa-briefcase"></i>
            </div>
            <p class="txt_white">{{counter1}}</p>
            <p class="txt_white">Event avaible</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  private _userService: ParticularService;
  public counter1: number = 0;
  public counter2: number = 0;

  constructor(userService: ParticularService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.counter1 = this.incrementCounter(70);
    this._userService.getParticulars();
  }

  /*for (let i = this.counter; i < 100; i++) {
    setInterval(() => {
      this.counter1++;
      console.log(this.counter1);
    }, 500);
  }*/

  incrementCounter(wantedValue: number) {
    let counter = 0;

    for (let i = counter; i < wantedValue; i++) {
      counter++;
      console.log(counter);
    }


    /*while (counter <= wantedValue) {
      setInterval(() => {
        counter++;
      }, 1000);
      console.log(counter);
    }*/
    return counter;
  }

}
