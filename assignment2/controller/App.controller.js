sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
 ], function (Controller, Filter, FilterOperator, FilterType) {
    "use strict";
    return Controller.extend("task2.controller.App", {
       onInit : function () {
        var data = {
        "Employees": [
          {
            "Emp-id": 34,
            "FirstName": "sai",
            "LastName": "pokala",
            "Email": "saiteja@gmail.com"
          },
          {
            "Emp-id": 35,
            "FirstName": "mahesh",
            "LastName": "puram",
            "Email": "mahesh@gmail.com"
            
          },
          {
            "Emp-id": 36,
            "FirstName": "ram",
            "LastName": "panugula",
            "Email": "ram@gmail.com"
          },
          {
            "Emp-id": 37,
            "FirstName": "vikas",
            "LastName": "puri",
            "Email": "vikas@gmail.com"
          },
          {
            "Emp-id": 38,
            "FirstName": "vijay",
            "LastName": "paragati",
            "Email": "vijay@gmail.com"
          },
          {
            "Emp-id": 39,
            "FirstName": "Teja",
            "LastName": "pokala",
            "Email": "saiteja@gmail.com"
          },
          {
            "Emp-id": 40,
            "FirstName": "Snehith",
            "LastName": "jaggari",
            "Email": "snehith@gmail.com"
            
          },
          {
            "Emp-id": 41,
            "FirstName": "Vasavi",
            "LastName": "pokala",
            "Email": "vasu@gmail.com"
          },
          {
            "Emp-id": 42,
            "FirstName": "Deekshith",
            "LastName": "satthu",
            "Email": "satthu@gmail.com"
          },
          {
            "Emp-id": 43,
            "FirstName": "Mani",
            "LastName": "gujjula",
            "Email": "mani@gmail.com"
          },
          {
            "Emp-id": 44,
            "FirstName": "Anil",
            "LastName": "pinreddy",
            "Email": "anil@gmail.com"
          },
          {
            "Emp-id": 45,
            "FirstName": "Rajesh",
            "LastName": "laka",
            "Email": "rajesh@gmail.com"
            
          },
          {
            "Emp-id": 46,
            "FirstName": "Savit",
            "LastName": "balguri",
            "Email": "savit@gmail.com"
          },
          {
            "Emp-id": 47,
            "FirstName": "Charan",
            "LastName": "ummadi",
            "Email": "charan@gmail.com"
          },
          {
            "Emp-id": 48,
            "FirstName": "Rahul",
            "LastName": "vadlaa",
            "Email": "vadla@gmail.com"
          }
        ]
      };
      let oModel=new sap.ui.model.json.JSONModel(data);
      this.getView().setModel(oModel,"employee"); 
     },
      onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("employee").getPath().substr(1))
			});
      }
    });
 });