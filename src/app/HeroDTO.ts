export class HeroDTO {

    constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
    ) {  }
  
  }