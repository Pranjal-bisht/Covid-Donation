    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>
    <!-- Bootstrap JS file -->
    <!-- Main JS -->
    <script type="text/javascript">
        fetch('https://api.covid19api.com/summary')
            .then((apidata) => {
                console.log(apidata)
                return apidata.json();
            })

            .then((actualdata) => {
                console.log(actualdata)
                const mydata = actualdata.Countries[76];
                document.getElementById("TotalRecovered").innerHTML = mydata.TotalRecovered;
                document.getElementById("TotalConfirmed").innerHTML = mydata.TotalConfirmed;
                document.getElementById("TotalDeaths").innerHTML = mydata.TotalDeaths;
            })
    </script>
    <!-- Main JS -->
    <!-- button files-->
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script>
    var options = {
    "key": "rzp_test_Sofrjfzv7fQSwf", // Enter the Key ID generated from the Dashboard
    "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://images.news18.com/ibnlive/uploads/2020/08/1598267231_modi.jpg?impolicy=website&width=400&height=0",
    "order_id": "order_HVM7LdjUWV0iR9", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
</script>
