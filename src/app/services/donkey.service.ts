import { Injectable } from '@angular/core';
import { DefaultModule } from '../layouts/default/default.module';

@Injectable({ providedIn: DefaultModule })
export class Donkey {
  private cargo: any;
  private info: string;
  private loaded = false;
  load(val: any): void {
    this.cargo = val;
    this.loaded = true;
  }
  unload(): any {
    const res = this.cargo;
    delete this.cargo;
    delete this.info;
    this.loaded = false;
    return res;
  }
  setInfo(info: string): void {
    this.info = info;
  }
  getInfo(): string {
    return this.info;
  }
  isLoaded(): boolean {
    return this.loaded;
  }
}
