const slider = document.getElementById("myRange")
const output = document.getElementById("demo")
const pgViews = document.getElementById("view")
const togBtn = document.getElementById("toggle-btn")
  
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  let range = slider.value
  
  if(range >= 5 && range <= 20){
    pgViews.textContent = "10K"
    output.textContent = "$8.00"
  }
  else if (range >= 25 && range <= 40) {
    pgViews.textContent = "50K"
    output.textContent = "$12.00"
  } 
  else if (range >= 45 && range <= 60) {
    pgViews.textContent = "100k"
    output.textContent = "$16.00"
  } 
  else if (range >= 65 && range <= 80) {
    pgViews.textContent = "500k"
    output.textContent = "$24.00"
  } 
  else if (range >= 85 && range <= 100) {
    pgViews.textContent = "1M"
    output.textContent = "$36.00"
  }
}


togBtn.onclick = () => {
  let discount = 0.25
  
  slider.oninput = function() {
    let range = slider.value
  
  
    if (range >= 5 && range <= 20) {
      pgViews.textContent = "10K"
      let operation = 8.00 - (discount * 8.00)
      output.textContent = `$${operation.toFixed(2)}` 
    }
    else if (range >= 25 && range <= 40) {
      pgViews.textContent = "50K"
      let operation = 12.00 - (discount * 12.00)
      output.textContent = `$${operation.toFixed(2)}`
    }
    else if (range >= 45 && range <= 60) {
      pgViews.textContent = "100k"
      let operation = 16.00 - (discount * 16.00)
      output.textContent = `$${operation.toFixed(2)}`
    }
    else if (range >= 65 && range <= 80) {
      pgViews.textContent = "500k"
      let operation = 24.00 - (discount * 24.00)
      output.textContent = `$${operation.toFixed(2)}`
    }
    else if (range >= 85 && range <= 100) {
      pgViews.textContent = "1M"
      let operation = 36.00 - (discount * 36.00)
      output.textContent = `$${operation.toFixed(2)}`
    }
  }
  
}