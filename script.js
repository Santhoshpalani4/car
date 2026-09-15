const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        const booking = {

            name:
                document.getElementById("name").value,

            phone:
                document.getElementById("phone").value,

            car:
                document.getElementById("car").value,

            service:
                document.getElementById("service").value,

            date:
                document.getElementById("date").value,

            time:
                document.getElementById("time").value,

            message:
                document.getElementById("message").value
        };


        /*
         * BACKEND CONNECTION
         *
         * Later replace this URL with
         * your Python/FastAPI backend.
         */

        try {

            const response = await fetch(
                "http://localhost:8000/bookings",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(booking)
                }
            );


            const result =
                await response.json();


            if (result.success) {

                alert(
                    "Booking confirmed! 🚗"
                );

                bookingForm.reset();

            } else {

                alert(
                    "Booking failed. Please try again."
                );

            }

        } catch (error) {

            /*
             * Backend not connected yet.
             * This allows the UI to be tested.
             */

            console.log(error);

            alert(
                "Frontend is working! Backend connection is not configured yet."
            );
        }

    }
);
