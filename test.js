function CarComponent(make, model,year,engine) {
    let fullInfo = make  +  " " + model + " " + year + " " + engine // state


    return `<div>The car info : ${fullInfo}  </div>`;
}

function SimpleComponent() {
  
    let whatGotReturned = CarComponent("BMW", "X5","2018","3 Litre") // props
    console.log(whatGotReturned)
}

SimpleComponent()