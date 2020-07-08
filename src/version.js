export class Version {
  construct(major, minor, patch) {
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }
  
  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }
}
