// ideas list table
$('#table-ideas-list').dataTable({
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
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

// projects list table
$('#table-projects-list').dataTable({
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort",
      "orderable": false
    }
  ]
});


//rd index table
$('#table-rd-list').dataTable({
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
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

//rd table documents
$('#table-rd-documents').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort",
      "orderable": false
    }
  ]
});

//rd table communications
$('#table-rd-communications').dataTable({
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" }
  ]
});

//rd table message details
$('#table-rd-message-details').dataTable({
  "columns": [
    {
      "class": "remove-sort",
      "orderable": false
    }
  ]
});

//rd table documents
$('#table-project-documents').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort",
      "orderable": false
    }
  ]
});

//rd table documents
$('#table-rd-members').dataTable({
  "bLengthChange": false,
  "bInfo" : true,
  "bPaginate" : false,
  "columns": [
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    { "class": "text" },
    {
      "class": "remove-sort",
      "orderable": false
    }
  ]
});

//rd expenditure tables
//employees
$('#table-rd-exp-employees').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "columns": [
    {
      "defaultContent": '<input type="text" class="form-control" data-required="true">'
    },
    {
      "defaultContent": '<input type="text" class="form-control">'
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Method 1</option><option>Method 2</option></select>'
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Treatment 1</option><option>Treatment 2</option></select>'
    },
    {
      "defaultContent": '<input type="text" class="form-control">',
      "orderable": false
    },
    {
      "defaultContent": '<input type="text" class="form-control data-required="true">'
    },
    {
      "defaultContent": '<input type="text" class="form-control">'
    },
    {
      "defaultContent": '<div class="text"><a href="#" title="Delete Row"><div class="glyphicon glyphicon-remove"></div></a></div>',
      "orderable": false
    }
  ]
});

//contractors
$('#table-rd-exp-contractors').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "columns": [
    {
      "defaultContent": '<input type="text" class="form-control" data-required="true">'
    },
    {
      "defaultContent": '<input type="text" class="form-control">'
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Method 1</option><option>Method 2</option></select>'
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Treatment 1</option><option>Treatment 2</option></select>'
    },
    {
      "defaultContent": '<input type="text" class="form-control">',
      "orderable": false
    },
    {
      "defaultContent": '<input type="text" class="form-control data-required="true">'
    },
    {
      "defaultContent": '<input type="text" class="form-control">'
    },
    {
      "defaultContent": '<div class="text"><a href="#" title="Delete Row"><div class="glyphicon glyphicon-remove"></div></a></div>',
      "orderable": false
    }
  ]
});

//other direct costs
$('#table-rd-exp-other').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "columns": [
    {
      "defaultContent": '<input type="text" class="form-control" data-required="true">'
    },
    {
      "defaultContent": '',
      "orderable": false
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Method 1</option><option>Method 2</option></select>'
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Treatment 1</option><option>Treatment 2</option></select>'
    },
    {
      "defaultContent": '<input type="text" class="form-control">',
      "orderable": false
    },
    {
      "defaultContent": '<input type="text" class="form-control data-required="true">'
    },
    {
      "defaultContent": '<input type="text" class="form-control">'
    },
    {
      "defaultContent": '<div class="text"><a href="#" title="Delete Row"><div class="glyphicon glyphicon-remove"></div></a></div>',
      "orderable": false
    }
  ]
});

//overhead
$('#table-rd-exp-overhead').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "columns": [
    {
      "defaultContent": '<input type="text" class="form-control" data-required="true">'
    },
    {
      "defaultContent": '',
      "orderable": false
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Method 1</option><option>Method 2</option></select>'
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Treatment 1</option><option>Treatment 2</option></select>'
    },
    {
      "defaultContent": '<input type="text" class="form-control">',
      "orderable": false
    },
    {
      "defaultContent": '<input type="text" class="form-control data-required="true">'
    },
    {
      "defaultContent": '<input type="text" class="form-control">'
    },
    {
      "defaultContent": '<div class="text"><a href="#" title="Delete Row"><div class="glyphicon glyphicon-remove"></div></a></div>',
      "orderable": false
    }
  ]
});

//fixed assets
$('#table-rd-exp-fixedassets').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "columns": [
    {
      "defaultContent": '<input type="text" class="form-control" data-required="true">'
    },
    {
      "defaultContent": '',
      "orderable": false
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Method 1</option><option>Method 2</option></select>'
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Treatment 1</option><option>Treatment 2</option></select>'
    },
    {
      "defaultContent": '<input type="text" class="form-control">',
      "orderable": false
    },
    {
      "defaultContent": '<input type="text" class="form-control data-required="true">'
    },
    {
      "defaultContent": '<input type="text" class="form-control">'
    },
    {
      "defaultContent": '<div class="text"><a href="#" title="Delete Row"><div class="glyphicon glyphicon-remove"></div></a></div>',
      "orderable": false
    }
  ]
});

//feedstock expenditure
$('#table-rd-exp-feedstock').dataTable({
  "bLengthChange": false,
  "bInfo" : false,
  "bPaginate" : false,
  "columns": [
    {
      "defaultContent": '<input type="text" class="form-control" data-required="true">'
    },
    {
      "defaultContent": '',
      "orderable": false
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Method 1</option><option>Method 2</option></select>'
    },
    {
      "defaultContent": '<select class="form-control" data-required="true"><option>Treatment 1</option><option>Treatment 2</option></select>'
    },
    {
      "defaultContent": '<input type="text" class="form-control">',
      "orderable": false
    },
    {
      "defaultContent": '<input type="text" class="form-control data-required="true">'
    },
    {
      "defaultContent": '<input type="text" class="form-control">'
    },
    {
      "defaultContent": '<div class="text"><a href="#" title="Delete Row"><div class="glyphicon glyphicon-remove"></div></a></div>',
      "orderable": false
    }
  ]
});