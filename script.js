var btn = document.getElementById("btn")
var list = document.getElementById("list")
var li = document.getElementById("li")
var output = document.querySelector(".output")

function update(event) {
    if (list.value != "") {
        event.preventDefault()
        console.log(list.value)
        console.log(list.value == "")
        var li = document.createElement("li")
        li.innerHTML = list.value + '<button class="del" onclick="deleteItem(event)">X</button>'
        output.append(li)
        list.value = ''
    }else{
        event.preventDefault()
        alert("please enter any value....")
    }

}
function deleteItem(event) {
    event.target.parentElement.remove()
}