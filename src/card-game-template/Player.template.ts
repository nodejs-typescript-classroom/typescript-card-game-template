export const playerMap = new Map<number, boolean>();
export default abstract class Player<C> {
  name: string;
  hands: &C[] = [];
  id: number;
  constructor() {
    let user_id = 0;
    let userIdExist = true;
    do {
      user_id = Date.now();
      userIdExist = playerMap.has(user_id);
      if (!userIdExist) {
        playerMap.set(user_id, true);
      }
    } while(userIdExist);
    this.id = user_id;
  }
  abstract ChooseHand(): Promise<&C>
  abstract NameSelf(): Promise<void>
  addHand(card: &C) {
    this.hands.push(card);
  }
  abstract HasFinishDraw(): boolean
  extractCard(idx: number): &C {
    const result = this.hands[idx];
    this.hands.splice(idx, 1);
    return result;
  }
  public SetName(name: string) {
    this.name = name;
  }
  public GetName(): string {
    return this.name;
  }
  public GetId(): number {
    return this.id;
  }
}