declare var M: any
export class MaterialService {
  static toost(message: string){
    M.toast({html: message})
  }
}
