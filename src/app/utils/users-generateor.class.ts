export class UsersGenerator {
  constructor() {
    //*
  }

  generateRnadomNames() {
    console.log('ffff');
  }

  generateEgn(male: boolean): string {
    const day = this.getRandomInteger(1, 31);
    const month = this.getRandomInteger(1, 12);
    const year = this.getRandomInteger(40, 99);
    const city = this.getRandomInteger(0, 99);
    const sex = this.getNumberBeforeLast(male);

    const egn =
      year +
      this.pad(month, 2) +
      this.pad(day, 2) +
      this.pad(city, 2) +
      sex +
      0;

    const numbers: string[] = [...egn];
    //  6*2 + 1*4 + 0*8 + 1*5 + 0*10 + 5*9 + 7*7 + 5*3 + 0*6
    const nextNumbers: number[] = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let result = '';
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      if (index < numbers.length - 1) {
        result += element;
        sum += nextNumbers[index] * +element;
      } else {
        const a = Math.round(sum / 11);
        const theLast = sum - a * 11; // this is not correct ..
        result += Math.abs(theLast);
      }
    }
    return result;
  }

  private getNumberBeforeLast(isEven: boolean) {
    const even = [0, 2, 4, 6, 8];
    const odd = [1, 3, 5, 7, 9];
    return isEven
      ? even[(Math.random() * even.length) | 0]
      : odd[(Math.random() * odd.length) | 0];
  }

  // Returns an integer random number between min (included) and max (included)
  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  pad(num: number, length: number): string {
    return (1e15 + num + '').slice(-length);
  }
}
