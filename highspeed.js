function calculateEMI(){
  var DP = parseInt(document.getElementById("downpayment").value)
  var vehiclePrice= 265150
  var tenureM = parseInt(document.getElementById("tenure").value)


  
  var docuCharges = 10000
  var loanAmt = vehiclePrice+docuCharges-DP
  var interestRtPM = 0

  if(loanAmt>220000){
    interestRtPM = 0.01138
  } else {
    interestRtPM = 0.010083
  }

  console.log(interestRtPM)

  interestPM = loanAmt*interestRtPM

  var loint = (interestPM*tenureM)+loanAmt

  var installments = Math.round(((interestPM*tenureM)+loanAmt)/tenureM)

  var totVehPrice = Math.round(loint+DP)

  var totInterest = Math.round(interestPM*tenureM)

  document.getElementById("installments").innerText= installments
  document.getElementById("price").innerText= totVehPrice
  document.getElementById("interest").innerText= totInterest












  




  


}
