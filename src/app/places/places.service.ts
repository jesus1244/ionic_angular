import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places :Place[] = [{
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

  getPlaces(){
    return [...this.places]
  }
  
  addPlace(title: string, image: string) {
    this.places.push({
      title,
      image,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
   this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }
}
