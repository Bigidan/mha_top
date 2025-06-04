@Entry 
@Component 
struct SimpleList { 
  private items: string[] = ['One', 'Two', 'Three']; 
    build() { 
      Column() { 
        List() { 
          ForEach(this.items, (item: string) => { 
            ListItem() { 
              Text(item) 
                .fontSize(20) 
                .padding(10) 
            } 
          }, (item: string) => item) 
        } 
      } 
    }
}
