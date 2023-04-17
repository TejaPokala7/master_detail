sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("task2.controller.First", {
        onPress : function(oEvent){
           
          //  var oEmployee = oEvent.oSource.getBindingContext().getObject();
          var oEmployee = oEvent.getSource().getBindingContext("employee").getObject();
          var oModel = this.getView().getModel("EmployeeModel");
          var a = [];
          a.push(oEmployee);
           if(oModel){
               //oModel.setData(oEmployee);
               oModel.setProperty("/Employee",a)
           }    
           /* var oEmployee = oEvent.getSource().getBindingContext("employee");
           var oLocalModel = this.getModel("EmployeeModel");
           var a = [];
           const e1 = oEmployee.getProperty("Emp-id");
           const e2 = oEmployee.getProperty("FirstName");
           const e3 = oEmployee.getProperty("LastName");
           const e4 = oEmployee.getProperty("Email");
           a.push({
            "Emp-id": e1,
            "FirstName": e2,
            "LastName": e3,
            "Email": e4
           });
           oLocalModel.setProperty("/Employee",a); */
           var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
           oRouter.navTo("SecondView", {}, true);
           // var oRouter = this.getOwnerComponent().getRouter();
           //oRouter.navTo("SecondView", false);
        }
    });
 });