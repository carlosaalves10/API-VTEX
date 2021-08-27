import { IOClients } from '@vtex/api'
import {Catalog} from '@vtex/clients'
import Status from './status'


export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }
}
