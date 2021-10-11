import React, {useState,useEffect} from "react";
import PieLoader from "../../pages/invoice/loaders/PieLoader";
import { Doughnut } from "react-chartjs-2";

const PieGraph = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [invoices, setInvoices] = useState('');
    const [error, setError] = useState(false);
    useEffect(() => {
      window.scrollTo(0, 0);

      const fetchData = async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/invoice/`
          );
          setIsLoaded(true);
          setInvoices(res.data.results);

          console.log(res.data.results);
        } catch (err) {
          setIsLoaded(true);
          setError(err);
        }
      };

      fetchData();
    }, []);

    const getGrapgh = () => {
        const paidInvoice = invoices.filter((invoice) => invoice.paid).length;
        
        const pendingInvoice = invoices.filter((invoice) => !invoice.paid).length;
        
        const chartData = {
            labels: ['Fulfilled Invoice', 'Pending Invoices'],
            datasets: [
            {
                label: 'PX',
                data: [paidInvoice, pendingInvoice],
                backgroundColor: ['#24B47E3a', '#F037383a'],
                borderColor: ['#24B47E', '#F03738'],
                borderWidth: 1
            }
        ]
    }
}
        //need ot add above datta to donut

        if (error) {
          return <>{error.message}</>;
    } else if (!isLoaded) {
          return <><PieLoader /></>;
  } else {  
    return (
        <div className="widget half_center" id='grapgh_widget'>
            <h3>Summary</h3>
            <Doughnut data={chartData} width={500} height={500} />
        </div>
    )}
}

export default PieGraph;
