export class MeetupData {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;

  constructor(
    id: string,
    title: string,
    image: string,
    address: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
  }
}
