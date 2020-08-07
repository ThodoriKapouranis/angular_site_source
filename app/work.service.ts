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
    '    "big_description": "<strong>ECE-469-1 Artificial Intelligence</strong><hr><p>This project is supposed to be the skeleton for the first project of this class, where we are required to program an AI that uses iterative deepening and an alpha-beta searching, along with a heuristic function.</p>" }',


    '{"title":"Hashtables, Heaps, Dijkstra",'+
    ' "context":"ECE-365 DSA2 Summer 2020",'+
    '   "image":"assets/cpp.png",'+
    '   "tech":["C++"],'+
    '   "description": "Hashtables and Heaps coded from scratch in C++, thoroughly tested all test cases to confirm robusticity. Will be used to implement Dijkstras soon.",'+
    '   "github_url":"https://github.com/ThodoriKapouranis/DSA2-Heap",'+
    '   "url":"",'+
    '    "big_description": "<strong>ECE 264 Data Structures & Algorithms</strong> <hr> <p>The prerequesite course for DSA2 is DSA1, where we covered the functioning behind stacks and queues, search trees, and numerous types of sorts and their ideal use conditions. We covered fundamental topics such as big O notation, good programming methodology and C++ programming</p><br><p><strong>ECE-365 Data Structures & Algorithms II</strong></p><hr><p> DSA2 is a class I will be taking in fall 2020, but I decided to finish most of the projects during summer by learning off the textbook. This course includes hashtables, heaps, and popular algorithms like dijkstra, which is a algorithm ive encountered before in Communcation Networks as its used for finding the optimal path across routers.</p>"}',

    '{"title":"JLPT Vocab",'+
    ' "context":"Summer 2019",'+
    '   "image":"assets/jlpt.png",'+
    '   "tech":["JavaScript","jQuery","CSS","HTML"],'+
    '   "description": "Uses a google spreadsheet API to randomly grab a vocabulary word within a certain difficulty (pre-sorted) and quiz the user. ",'+
    '   "github_url":"https://github.com/ThodoriKapouranis/JLPT-vocab",'+
    '   "url":"https://thodorikapouranis.github.io/JLPT-vocab/",'+
    '    "big_description": "Will return to add more functionality, possibily rewriting it with a proper database, because the API is VERY slow." }',

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
    '    "big_description": "<strong>ECE-303: Communication Networks</strong><hr> <p>This course covered network protocols, architecture, security, privacy, routing and congestion control, Internet, local area networks, wireless networks, multimedia services. It covered all 5 layers of the internet going indepth in each. We used Wireshark and tcpdump to investigate our traffic and get a real world understanding for how our traffic flows and communicates with servers. We also covered basic cybersecurity topics such as spoofing, SQL injections, and man in the middle attacks. Additionally, we also learnt about VPN workings and made our own VPNs using OVPN and hosting on AWS.</p><br><strong>TOR & VPN</strong><hr><p>The project was initially done with two AWS servers, one for the client and one for the chatting server host. TCP dump was used to be able to monitor the communication between these two terminals and peek into what information is visible to each other.</p> <p>OVPN was used to create a VPN pathway for the chatting terminal so it can use another AWS server client IP to send HTTP requests to the host server. Then, TOR was used to make the communication completely peer to peer, masking the IP of both servers from each other.</p>" }',

  ]

/*
  getTitle(key: number) {return this.title[key]}
  getImg(key: number)   {return this.img[key]}
  getTech(key:number)   {return this.tech[key];}
*/
  constructor() { }
}
