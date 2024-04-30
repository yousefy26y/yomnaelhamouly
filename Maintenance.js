 function MaintenanceCheck() {
              let Value = document.forms["MaintenanceInfo"]["FirstName"].value;
              if (Value == "") {
                alert("You must fill out this form");
                return false;
              }
            }