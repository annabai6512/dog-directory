import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    //   this.store.push({
    //     "data": [
    //         {
    //             "type": "dog",
    //             "id": "saul",
    //             "attributes": {
    //                 "name": "Saul",
    //                 "breed": "Lab",
    //                 "owner": "Dave",
    //                 "size": "LG",
    //                 "description": "An energetic lab that loves to play",
    //                 "meals": {
    //                     "breakfast": "acorns",
    //                     "dinner": "kibble"
    //                 },
    //                 "activities": [
    //                     "walks",
    //                     "belly rubs",
    //                     "naps"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "goldie",
    //             "attributes": {
    //                 "name": "Goldie",
    //                 "breed": "Lab",
    //                 "owner": "Dave",
    //                 "size": "LG",
    //                 "description": "Office mommy dog",
    //                 "meals": {
    //                     "breakfast": "kibble",
    //                     "dinner": "wet can food"
    //                 },
    //                 "activities": [
    //                     "walks",
    //                     "belly rubs",
    //                     "dog park"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "ashton",
    //             "attributes": {
    //                 "name": "Ashton",
    //                 "breed": "Husky",
    //                 "owner": "Kyle",
    //                 "size": "LG",
    //                 "description": "A fluffy terrier mix who runs on treats",
    //                 "meals": {
    //                     "breakfast": "Kibble",
    //                     "dinner": "Steak"
    //                 },
    //                 "activities": [
    //                     "Office visits",
    //                     "cold tub",
    //                     "walks"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "maxie",
    //             "attributes": {
    //                 "name": "Maxie",
    //                 "breed": "Doberman",
    //                 "owner": "Steve",
    //                 "size": "LG",
    //                 "description": "Spunky pup, who loves to play",
    //                 "meals": {
    //                     "breakfast": "raw meat",
    //                     "dinner": "more raw meat"
    //                 },
    //                 "activities": [
    //                     "gaurding the office",
    //                     "playing"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "taro",
    //             "attributes": {
    //                 "name": "Taro",
    //                 "breed": "Great Pyrenees",
    //                 "owner": "Sara",
    //                 "size": "XL",
    //                 "description": "A great pyrenees mix often confused with a horse",
    //                 "meals": {
    //                     "breakfast": "kibble",
    //                     "dinner": "kibble"
    //                 },
    //                 "activities": [
    //                     "walks",
    //                     "belly rubs",
    //                     "dog park"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "gabby",
    //             "attributes": {
    //                 "name": "Gabby",
    //                 "breed": "Pit Bull",
    //                 "owner": "Dan",
    //                 "size": "MD",
    //                 "description": "A tutu-flaunting American bulldog/pitbull mix",
    //                 "meals": {
    //                     "breakfast": "wet food",
    //                     "dinner": "kibble"
    //                 },
    //                 "activities": [
    //                     "playing dress up",
    //                     "belly rubs",
    //                     "walks"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "percy",
    //             "attributes": {
    //                 "name": "Percy",
    //                 "breed": "Husky",
    //                 "owner": "Monica",
    //                 "size": "LG",
    //                 "description": "A wolf-sized pup with piercing blue eyes",
    //                 "meals": {
    //                     "breakfast": "kibble",
    //                     "dinner": "wet food"
    //                 },
    //                 "activities": [
    //                     "naps"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "benny",
    //             "attributes": {
    //                 "name": "Benny",
    //                 "breed": "Hound",
    //                 "owner": "Brandon",
    //                 "size": "MD",
    //                 "description": "A belly-rub loving hound-mix",
    //                 "meals": {
    //                     "breakfast": "Merrick",
    //                     "dinner": "Merrick"
    //                 },
    //                 "activities": [
    //                     "belly rubs",
    //                     "head pats"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "watson",
    //             "attributes": {
    //                 "name": "Watson",
    //                 "breed": "Golden Doodle",
    //                 "owner": "Brandon",
    //                 "size": "MD",
    //                 "description": "Fancy dog with a mean streak",
    //                 "meals": {
    //                     "breakfast": "breakfast bars",
    //                     "dinner": "socks"
    //                 },
    //                 "activities": [
    //                     "sleeping",
    //                     "eating laundry",
    //                     "playing with kids"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "baxter",
    //             "attributes": {
    //                 "name": "Baxter",
    //                 "breed": "Chihuahua",
    //                 "owner": "Skip",
    //                 "size": "XS",
    //                 "description": "The eldest, wisest, and tiniest dog of the office",
    //                 "meals": {
    //                     "breakfast": "kibble",
    //                     "dinner": "steak"
    //                 },
    //                 "activities": [
    //                     "leadership",
    //                     "naps"
    //                 ]
    //             }
    //         },
    //         {
    //             "type": "dog",
    //             "id": "vyla",
    //             "attributes": {
    //                 "name": "Vyla",
    //                 "breed": "Poodle",
    //                 "owner": "Skip",
    //                 "size": "SM",
    //                 "description": "The resident toy and bone hoarder",
    //                 "meals": {
    //                     "breakfast": "pancakes",
    //                     "dinner": "kibble"
    //                 },
    //                 "activities": [
    //                     "leadership",
    //                     "gaurding the office"
    //                 ]
    //             }
    //         }
    //     ]
    // });

    // let response = await fetch('/api/dogs.json');
    // let {data} = await response.json();
    // return data.map((model) => {
    //   let { id, attributes } = model;
    //   return {id, ...attributes};
    // });
    return this.store.findAll('dog');
  }
}
