 $().ready(init);


 function init() {
     $("#addToTable").on("click", addRowsToTable);
     $("#removeButton").on("click", removeRows);
     $("#name").focus();
 }
 var rowArray = [];
 var counter = 0;

 function addRowsToTable() {
     var name = $("#name").val();
     var age = $("#age").val();
     if (name.length > 0 && age.length > 0) {
         counter++;

         rowArray.push({
             "id": counter,
             "itemname": name,
             "itemage": age,
             "checked": false
         });

         var tb = "<tr id='cb_" + counter + "'> <td>" + name + "</td><td>" + age + "</td><td><input class='cbox' type='checkbox' id='" + counter + "'></td></tr>";
         var cb_id = "#cb_" + counter;
         $(".cbox").on("click", cbToggled);
         $("#entrytable").append(tb);
         $("#resultsdiv").show();
         $("#name").select();
     }
 }

 function cbToggled() {
     console.log("toggled");
 }

 function removeRows() {
     console.log("removed");
     $(":checked").each(function () {
         console.log($(this).attr("id"));
         var cb_id = "#cb_" + $(this).attr("id");
         $(this).parents('tr').remove();
         //         $(cb_id).remove();
     });
     if ($("tbosy tr").length == 0) {
         $("#resultsdiv").hide();

     }
 }