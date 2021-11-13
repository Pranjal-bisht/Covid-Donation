import React,{useEffect} from 'react'
import fightvirus from 'C:/files/reactapp/covidtracker/src/fightvirus.jpg'
const Showcase = () => {

    const options = {
        key: 'rzp_test_Sofrjfzv7fQSwf',
        amount: '100', //  = INR 1
        name: 'Acme shop',
        description: 'Test Transaction',
        image: 'https://images.news18.com/ibnlive/uploads/2020/08/1598267231_modi.jpg?impolicy=website&width=400&height=0',
        order_id : "order_HVM7LdjUWV0iR9",
        handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        prefill: {
            name: 'Gaurav',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <>
            <section className="p-5 mt-5 text-sm-start" id="home">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1 class>Be a <span className="text-success"> HERO!</span></h1>
                            <p className="lead">Stand together to help India defeat the second wave of <span
                                className="fw-bold text-success">
                                COVID-19</span> by contributing to the <span className="fw-bold text-success"> PM CARES
                                    fund</span>
                            </p>
                            <button className="btn btn-primary"onClick={openPayModal}>Pay with Razorpay</button>
                        </div>
                        <img className="img-fluid w-50 d-none d-sm-block round" src={fightvirus} alt="" />

                    </div>
                </div>
            </section>
        </>
    )
}
export default Showcase