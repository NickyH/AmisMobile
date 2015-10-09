// task list table
$('#table-task-list').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "ordering": false,
  "columns": [
    {
      "class": "remove-sort",
      "orderable": false
    },
    {
      "class": "remove-sort",
      "orderable": false
    },
    {
      "class": "remove-sort",
      "orderable": false
    }
  ]
});
