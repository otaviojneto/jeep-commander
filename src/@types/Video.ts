class Video {
  id: number;
  title: string;
  Image: string;
  ImageMobile: string;
  video: string;

  constructor(
    id: number,
    title: string,
    Image: string,
    ImageMobile: string,
    video: string,
  ) {
    this.id = id;
    this.title = title;
    this.Image = Image;
    this.ImageMobile = ImageMobile;
    this.video = video;
  }
}

export default Video;
