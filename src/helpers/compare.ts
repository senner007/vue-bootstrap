import {Iitem} from '../interfaces/interfaces';

export default function updatedComparer(a: Iitem, b : Iitem) : number {
    if (a.updated_at < b.updated_at) return 1;
    if (a.updated_at > b.updated_at) return -1;
    return 0;
  }
