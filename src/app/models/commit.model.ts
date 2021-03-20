export class Commit {
  public autor: string;
  public message: string;
  public url: string;
  public date: string;

  constructor(autor: string, date: string, message: string, url: string) {
    this.autor = autor;
    this.message = message;
    this.url = url;
    this.date = date;
  }

  static convert(data: any) {
    const {
      commit: {
        author: { name, date },
        message,
        url,
      },
    } = data;
    return {
      author: name,
      date,
      message,
      url,
    };
  }
}
