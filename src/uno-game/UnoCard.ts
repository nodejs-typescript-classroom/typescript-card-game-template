export enum UnoColor {
  BLUE,
  RED,
  YELLOW,
  GREEN,
}
export enum UnoNumber {
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
}
export const colors = [
  "BLUE",
  "RED",
  "YELLOW",
  "GREEN"
];
export const Colors: UnoColor[] = [
  UnoColor.BLUE,
  UnoColor.RED,
  UnoColor.YELLOW,
  UnoColor.GREEN
];
export const Numbers: UnoNumber[] = [
  UnoNumber.Zero,
  UnoNumber.One,
  UnoNumber.Two,
  UnoNumber.Three,
  UnoNumber.Four,
  UnoNumber.Five,
  UnoNumber.Six,
  UnoNumber.Seven,
  UnoNumber.Eight,
  UnoNumber.Nine,
]; 
export default class UnoCard {
  constructor(readonly unoNumber: UnoNumber, readonly unoColor: UnoColor) {}
  Equal(card: &UnoCard): boolean {
    return this.unoColor == card.unoColor || this.unoNumber == card.unoNumber;
  }
  toString(): string {
    return `[${colors[this.unoColor]}${this.unoNumber}]`;
  }
} 

