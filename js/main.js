let rateCon = document.getElementById("container")
let rateRes = document.getElementById("container-2")
let sub = document.getElementById("btn")
let nums = [...document.getElementsByClassName("num")]
let select = false
let result = document.getElementById("result")
console.log(result);
nums.forEach((num) => {
  num.addEventListener("click", () => {
    for (let i = 0; i < nums.length; i++) {
      nums[i].classList.remove("active");
    }
    num.classList.add("active");
    console.log(num.dataset)
    result.innerText = `You selected ${num.dataset.rate} out of 5`
    select = true
});
});
sub.addEventListener("click",() => {
    if (select === true) {
        rateCon.style.cssText = "display:none;"
        rateRes.style.cssText = "display:flex;"
    }
})
