$(document).ready(function() {
	$('#example').DataTable({
		"searching": true, // True or False
		"scrollY": "233px", // We can set Height
		"scrollCollapse": true,
		"paging": true, // True or False
		"ordering": true, // True or False
		"order": [[ 3, "desc" ]], // Starts from 0
		responsive: true,
		"language": {
		  "lengthMenu": "Display _MENU_ records per page",
		  "zeroRecords": "Nothing To Be Found", // Can Be Edited and Tested
		  "info": "Showing page _PAGE_ of _PAGES_",
		  "infoEmpty": "No records available",
		  "infoFiltered": "(filtered from _MAX_ total records)"
		}
		// "columnDefs": [
		//   {
		//       "targets": [ 2 ], // Starts from 0
		//       "visible": false, // True or False
		//       "searchable": false 
		//   },
		//   {
		//       "targets": [ 3 ], // Starts from 0
		//       "visible": false // True or False
		//   }
		// ]
	});
});