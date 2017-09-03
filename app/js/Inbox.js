var table = document.getElementById("myTable");

var ajaxResult = [];
var codeLabel = "<span class='label label-warning'>CODE</span>";
var workLabel = "<span class='label label-info'>WORK</span>";
var animalsLabel = "<span class='label label-danger'>ANIMALS</span>";
var fashionLabel = "<span class='label label-success'>FASHION</span>";

$(document)
		.ready(
				function() {

					$
							.ajax({
								url : '../app/json/employee.json',
								async : true,
								dataType : "json",
								success : function(data) {
									for ( var i in data.Employees) {

										console.log(data.Employees[i].userId);

										var row = table.insertRow(i);
										row.className = "clickable-row";
										var cell1 = row.insertCell(0);
										var cell2 = row.insertCell(1);
										var cell3 = row.insertCell(2);

										cell1.innerHTML = "<img class='imgcircl' src="+data.Employees[i].imgurl+" alt=''><strong><span>&nbsp;&nbsp;&nbsp;"
												+ data.Employees[i].jobTitleName
												+ "</span></strong>";
										var content=data.Employees[i].content;
										console.log(data.Employees[i].label);
										switch (data.Employees[i].label) {

										case "1":
											cell2.innerHTML = "<span>"
													+ workLabel +"&nbsp;"+ content+"</span>";
											break;
										case "2":
											cell2.innerHTML = "<span>"
													+ fashionLabel
													+"&nbsp;"+ content+"</span>";
											break;

										case "3":
											cell2.innerHTML = "<span>"
													+ animalsLabel
													+"&nbsp;"+ content+"</span>";
											break;

										case "4":
											cell2.innerHTML = "<span>"
													+ codeLabel +"&nbsp;"+ content+"</span>";
											break;
										default:
											cell2.innerHTML = content;
											break;
										}
										cell3.innerHTML = data.Employees[i].date;

									}
								}

							});
				});
