export class DietFilter {
  name: string;
  checked: boolean;

  constructor(name: string, checked: boolean) {
    this.name = name;
    this.checked = checked;
  }

  public getName() {
    return this.name;
  }

  public getChecked() {
    return this.checked;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setChecked(checked: boolean) {
    this.checked = checked;
  }
}
