export class ZipCodeValidator1 {
  isAcceptable(s: string) {
    return s.length === 5;
  }
}

export class ZipCodeValidator2 {
  isAcceptable(s: string) {
    return /^[0-9]+$/.test(s);
  }
}
