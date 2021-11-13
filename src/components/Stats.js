import React, {useEffect,useState} from 'react'

const Stats = () => {

    const [data,setData] = useState([]);
    const getCovidData = async () =>{
        try {
            const res = await fetch('https://api.covid19api.com/summary');
            const actualData = await res.json();
            console.log(actualData.Countries[76]);
            setData(actualData.Countries[76])
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    // <scrip src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
    //     integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
    //     crossorigin="anonymous"></script>

    // fetch('https://api.covid19api.com/summary')
    //     .then((apidata) => {
    //         console.log(apidata)
    //         return apidata.json();
    //     })
    //     .then((actualdata) => {
    //         console.log(actualdata)
    //         const mydata = actualdata.Countries[76];
    //         document.getElementById("TotalRecovered").innerHTML = mydata.TotalRecovered;
    //         document.getElementById("TotalConfirmed").innerHTML = mydata.TotalConfirmed;
    //         document.getElementById("TotalDeaths").innerHTML = mydata.TotalDeaths;
    //     })
    return (
        <>
            <section className="p-5 mt-md-5  bg-success" id="stats">
                <div className="container">
                    <div className="row text-center g-4">
                        <h2 className="pt-3 text-white text-center">Coronavirus Statistics In India</h2>
                        <div className="col-md">
                            <div className="card bg-success text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="fas fa-lungs-virus"></i>
                                    </div>
                                    <h3 className="card-title mb-3">TOTAL RECOVERED</h3>
                                    <span class="text-bold">{data.TotalRecovered}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-success text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="fas fa-virus"></i>
                                    </div>
                                    <h3 className="card-title mb-3">TOTAL CASES</h3>
                                    <span class="text-bold">{data.TotalConfirmed}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-success text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="fas fa-skull"></i>
                                    </div>
                                    <h3 className="card-title mb-3">DEATHS</h3>
                                    <span class="text-bold">{data.TotalDeaths}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Stats