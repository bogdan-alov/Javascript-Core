class PaymentManager{
    constructor(title){
        this.title = title
        this.table = null
    }

    get title() {
        return this._title;
      }
    
    set title(newValue) {
        this._title = newValue;
      }

      get target() {
        return this._target;
      }
    
    set target(newValue) {
        this._target = newValue;
      }

    render(target){
        let table =  `<div id= ${target}><table><caption>${this.title} Payment Manager</caption> <thead> <tr> <th class="name">Name</th> <th class="category">Category</th> <th class="price">Price</th> <th>Actions</th> </tr> </thead> <tbody class="payments"> <tr> <td><!-- Payment's name --></td> <td><!-- Payment's category --></td> <td><!-- Payment's price --></td> <td><button id='deleteBtn' onclick="deleteElement()">Delete</button></td> </tr> </tbody> <tfoot class="input-data"> <tr> <td><input name="name" type="text"></td> <td><input name="category" type="text"></td> <td><input name="price" type="number"></td> <td><button id='addBtn' onclick="addElement()">Add</button></td></tr> </tfoot> </table></div>`
        this.target = target
        $(document.body).append(table)
    }

    addElement(){
        let table = $(`#${target} table`)
        let tr = $('tr')
        let name = table.find("[name='name']").text()
        let category = table.find("[name='category']").text()
        let price = table.find("[name='price']").text()

        let td = $('td')

        tr.append(td.text(name))
        tr.append(td.text(category))
        tr.append(td.text(price))

    }

    deleteElement(){

    }

}