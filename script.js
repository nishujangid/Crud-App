var selecteRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var data =readUserData();
     if ( selecteRow === null){
        insertData(data)
     }else{
        updateData(data)
     }
    // insertData(data)

    reset();
    // console.log(data)
    // reset()
}
// Reatrieve Data 
function readUserData(){
    var formData ={};
    formData['name'] = document.getElementById('name').value
    formData['email'] = document.getElementById('email').value
    formData['number'] = document.getElementById('number').value
    formData['message'] = document.getElementById('message').value
    return formData;
}
function insertData(formData){
    var table = document.getElementById('storeList').getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = formData.name;
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = formData.email;
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = formData.number;
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = formData.message;
    cell5 =newRow.insertCell(4)
    cell5.innerHTML =`<button onclick ="editData(this)">Edit</button>
    <button onclick ="deleteData(this)"> Delete </button>`


 }

 function reset(){
    document.getElementById('name').value =""
    document.getElementById('email').value =""
    document.getElementById('number').value =""
    document.getElementById('message').value =""
 }
  
function editData(td){
    selecteRow =td.parentElement.parentElement;
    document.getElementById('name').value = selecteRow.cells[0].innerHTML
    document.getElementById('email').value = selecteRow.cells[1].innerHTML
    document.getElementById('number').value = selecteRow.cells[2].innerHTML
    document.getElementById('message').value = selecteRow.cells[3].innerHTML
}
 function deleteData(td) 
 { 
    if( confirm("Are you want to delete....?")){
        var row =td.parentElement.parentElement
        document.getElementById("storeList").deleteRow(row.rowIndex)
      reset()

    }
   
 }
function updateData(formData){
    selecteRow.cells[0].innerHTML = formData.name 
    selecteRow.cells[1].innerHTML = formData.email
    selecteRow.cells[2].innerHTML = formData.number 
    selecteRow.cells[3].innerHTML = formData.message
    selecteRow = null;
}