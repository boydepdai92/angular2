import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: `artist.component.html`,
})
export class ArtistComponent implements OnInit {
    artist: Artist[];
    album: Album[];
    constructor(private _spotifyService : SpotifyService, private _route: ActivatedRoute) {

    }

    ngOnInit() {
       console.log('a');
    }
}