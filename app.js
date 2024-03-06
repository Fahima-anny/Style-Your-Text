document.getElementById("boldBtn").addEventListener("click",function(){
    document.getElementById("textArea").style.fontWeight = "900"

})

document.getElementById("underlineBtn").addEventListener("click",function(){
    document.getElementById("textArea").style.textDecoration = "underline"

})

document.getElementById("italicBtn").addEventListener("click",function(){
    document.getElementById("textArea").style.fontStyle = "italic"
})

document.getElementById("textLeftBtn").addEventListener("click",function(){
    let textArea = document.getElementById("textArea")
    document.getElementById("textArea").style.textAlign = "left"
})

document.getElementById("textCenterBtn").addEventListener("click",function(){
    document.getElementById("textArea").style.textAlign = "center"
})

document.getElementById("textRightBtn").addEventListener("click",function(){
    document.getElementById("textArea").style.textAlign = "right"
})




const colorBox = document.getElementById('colorBox');
const hexInput = document.getElementById('hexInput');

hexInput.addEventListener('input', updateColor);

function updateColor() {
  const hexCode = hexInput.value;
  const isValidHex = /^#[0-9A-Fa-f]{6}$/i.test(hexCode);

  if (isValidHex) {
    colorBox.style.backgroundColor = hexCode;
    document.getElementById("textArea").style.color = hexCode
  }
}














