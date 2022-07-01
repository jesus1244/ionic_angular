import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places= [{
    id: "1",
    title: "torre eiffel",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/280px-Tour_Eiffel_Wikimedia_Commons.jpg",
    comments:["Awesome", "Great"]
  },
  {
    id: "2",
    title: "Liberty statue",
    image:"https://guias-viajar.com/estados-unidos/wp-content/uploads/sites/4/2016/08/Estatua-Libertad-FB-012-2-548x550.jpg",
    comments:["Awesome", "Great"]
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
