var btn = document.getElementById("btn")
        var list = document.getElementById("list")
        var li = document.getElementById("li")
        var output = document.querySelector(".output")

        function update(event) {
            event.preventDefault()
            console.log(list.value)
            var li = document.createElement("li")
            li.innerHTML = list.value + '<button class="del" onclick="deleteItem(event)">X</button>'
            output.append(li)
            list.value = ''
        }
        function deleteItem(event) {
            event.target.parentElement.remove()
        }