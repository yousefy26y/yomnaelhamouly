 function MaintenanceCheck() {
            let FirstName = document.forms["MaintenanceInfo"]["FirstName"].value;
            let LastName = document.forms["MaintenanceInfo"]["LastName"].value;
            let MobileNumber = document.forms["MaintenanceInfo"]["MobileNumber"].value;
            let Issue = document.forms["MaintenanceInfo"]["Issue"].value;

            if (FirstName === "" || LastName === "" || MobileNumber === "" || Issue === "") {
                alert("You must fill out all fields in the form");
                return false;
             }
}
