class Identicon {
  constructor(string) {
    this.md5 = md5.array(string)
  }
}
