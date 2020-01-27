import {InjectionToken} from '@angular/core';
import {User} from '../content/users/users-list/user/user.model';

export interface ISideMenuItem {
  name: string;
  icon: string;
}

export const NUM_OF_ITEM_PER_PAGE = new InjectionToken('NUM_OF_ITEM_PER_PAGE');
export const MAX_NUM_OF_PAGE_NUMBERS = new InjectionToken('MAX_NUM_OF_PAGE_NUMBERS');

export const defaultUser: User = {id: -1, last_name: '', first_name: '', avatar: '', email: ''};

export const BASE_URL = new InjectionToken('BASE_URL');

export interface IUser {
  'id': number;
  'email': string;
  'first_name': string;
  'last_name': string;
  'avatar': string;
}

export const sideMenuItems: Array<ISideMenuItem> = [
  {name: 'Dashboard', icon: 'fas fa-tachometer-alt'},
  {name: 'Copy', icon: 'fas fa-copy'},
  {name: 'News', icon: 'far fa-newspaper'},
  {name: 'Users', icon: 'fas fa-users'},
  {name: 'FAQ', icon: 'fas fa-info-circle'},
  {name: 'Help', icon: 'far fa-life-ring'},
  {name: 'Settings', icon: 'fas fa-cog'}
];

export const data: Array<User> = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg'
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg'
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg'
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg'
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg'
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg'
  }
];
