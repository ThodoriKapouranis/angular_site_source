import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  //information

  project_information_hash={
    "checkers":                 0,
    "hash heap":                1,
    "jlpt":                     2,
    "one page":                 3,
    "first website":            4,
    "chatting":                 5,
  }

  //JSON FORMATTING
/*
    '{"title":"",'+
    '   "context":"",'+
    '   "image":"",'+
    '   "tech":[],'+
    '   "description": "",'+
    '   "github_url":"",'+
    '   "url":"",'+
    '    "big_description": "" }',
*/



  information=[
    '{"title":"Checkers",'+
    '   "context":"ECE-469 AI Summer 2020",'+
    '   "image":"assets/checkers.png",'+
    '   "tech":["HTML","CSS","Javascript","Angular","Typescript"],'+
    '   "description": "Two player checkers created with Angular framework. Will program an AI in the coming weeks or months.",'+
    '   "github_url":"https://github.com/ThodoriKapouranis/Checkers",'+
    '   "url":"https://thodorikapouranis.github.io/Checkers/",'+
    '    "big_description": "<strong> Overiew </strong> <hr> <p> hello sit amet consectetur adipisicing elit. Quis maiores ex impedit doloremque neque obcaecati facilis libero repellat cupiditate? Natus soluta minima</p> atque! Quaerat reiciendis natus unde amet. Ratione aspernatur, hic qui totam facilis consectetur suscipit dicta. Possimus eligendi, quod aut libero, deserunt ratione distinctio perferendis officia debitis vitae iste. Dicta tenetur harum nulla, tempora ad reprehenderit eligendi alias placeat atque? Eaque sed facilis sequi cum maxime ab. Facere, nihil sed ullam assumenda iusto animi, voluptatem est facilis ad at ratione delectus iure omnis enim eius. Mollitia sint quidem deleniti totam architecto veritatis, impedit eaque veniam eius animi deserunt molestias!" }',


    '{"title":"Hashtables, Heaps, Dijkstra",'+
    ' "context":"ECE-365 DSA2 Summer 2020",'+
    '   "image":"assets/cpp.png",'+
    '   "tech":["C++"],'+
    '   "description": "Hashtables and Heaps coded from scratch in C++, thoroughly tested all test cases to confirm robusticity. Will be used to implement Dijkstras soon.",'+
    '   "github_url":"https://github.com/ThodoriKapouranis/DSA2-Heap",'+
    '   "url":"",'+
    '    "big_description": "" }',

    '{"title":"JLPT Vocab",'+
    ' "context":"Summer 2019",'+
    '   "image":"assets/jlpt.png",'+
    '   "tech":["JavaScript","jQuery","CSS","HTML"],'+
    '   "description": "Uses a google spreadsheet API to randomly grab a vocabulary word within a certain difficulty (pre-sorted) and quiz the user. Will return to add more functionality, possibily rewriting it with a proper database, because the API is VERY slow.",'+
    '   "github_url":"https://github.com/ThodoriKapouranis/JLPT-vocab",'+
    '   "url":"https://thodorikapouranis.github.io/JLPT-vocab/",'+
    '    "big_description": "" }',

    '{"title":"One Page",'+
    ' "context":"Winter 2019",'+
    '   "image":"assets/one_page.png",'+
    '   "tech":["JavaScript","jQuery","CSS","HTML"],'+
    '   "description": "Second personal webpage created for fun. Tested animated layouts that feel less clunky for smoother transitions. Decided not to use.",'+
    '   "github_url":"https://github.com/ThodoriKapouranis/OnePage",'+

    '   "url":"https://thodorikapouranis.github.io/OnePage/",'+
    '    "big_description": "" }',


    '{"title":"First Website",'+
    ' "context":"Summer 2019",'+
    '   "image":"assets/first.png",'+
    '   "tech":["JavaScript","jQuery","CSS","HTML"],'+
    '   "description": "First personal website. Messing around with JS HTML and CSS to create a skeletal layout of a website, but decided on not further using.",'+
    '   "github_url":"https://github.com/ThodoriKapouranis/OldWebsite",'+
    '   "url":"https://thodorikapouranis.github.io/OldWebsite/",'+
    '    "big_description": "" }',

    '{"title":"Terminal Chatting",'+
    ' "context":"ECE-303: Communication Networks Spring 2020",'+
    '   "image":"assets/tor.png",'+
    '   "tech":["Python", "SQL", "AWS", "HTTP", "TOR"],'+
    '   "description": "Client to Server communication (HTTP) that can store messages from user to sender using SQL, allowing client to client communication. Also done using TOR and inspected with Wireshark to ensure that encryption is working. Client and Server were run on AWS.",'+
    '   "github_url":"https://github.com/ThodoriKapouranis/Terminal-Chatting",'+
    '   "url":"",'+
    '    "big_description": "" }',

  ]

/*
  getTitle(key: number) {return this.title[key]}
  getImg(key: number)   {return this.img[key]}
  getTech(key:number)   {return this.tech[key];}
*/
  constructor() { }
}
