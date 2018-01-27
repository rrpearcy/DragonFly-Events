export class Event {
  id: string;
  name: string;
  description: string;
  images = [];
  location: {
    name: string;
    address: string;
    city: string;
    state: any;
  };
  date: any;
  comments = [];

  constructor() {}

  formattedName() {
    return this.name ?
      this.name[0].toUpperCase() + this.name.substr(1) : '';
  }

  // image() {
  //   return 'http://dev.dragonflyathletics.com:1337/api/dfkey/events/' + this.id + '/media/' + [0];
  // }
}

