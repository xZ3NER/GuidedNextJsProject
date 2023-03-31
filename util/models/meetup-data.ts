export class MeetupDocument {
  title: string;
  image: string;
  address: string;
  description: string;

  constructor(
    title: string,
    image: string,
    address: string,
    description: string = ""
  ) {
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
  }
}

export class MeetupData {
  _id: string;
  title: string;
  image: string;
  address: string;
  description: string;

  constructor(
    _id: string,
    title: string,
    image: string,
    address: string,
    description: string = ""
  ) {
    this._id = _id;
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
  }
}