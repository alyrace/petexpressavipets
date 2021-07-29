import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Helmet } from "react-helmet";
import { useHistory } from 'react-router-dom';
import { Pagination } from "antd";
import Loader from 'react-loader-spinner';

import Navbar from "../../components/navigation/navbar.component";
import "../airlines/airlines.scss";
import airlineimg from "../../images/airline.png";
import AirlineCard from "../../components/airliines/airline.component";
//import axiosInstance from "../../axios";
//import PostLoading from '../../components/airliines/loadingairlines';



const Airlines = () => {
  /*const PostLoading = PostLoadingComponent(Posts);
	[postlist, setPosts] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			console.log(res.data);
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setPosts]);

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <section className="container-fluid banner">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="text-white text-center mt-3 pt-2">Airlines</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h2 className="text-center text-white mt-3 pt-4 pb-5 ms-0 me-0">
                  Find airline cargo locations, flight codes, and requirements.
                </h2>
              </div>
              <div className="center col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  className="img-fluid text-center mb-5"
                  src={airlineimg}
                  alt="airline"
                />
              </div>
            </div>
          </section>
          <section className="container bg-transparent">
            <div className="row">
              <div className="center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h3 className="text-dark text-center">Find an Airline</h3>
              </div>
            </div>
            <div className="row align-items-center pt-5">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 col-sm-12 col-xs-12 mx-auto my-auto">
                <form className="form-group" action="">
                  <div className="input-group form-container">
                    <span className="input-group-text">
                      <i class="fas fa-search-location fa-2x" id="Search"></i>
                    </span>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append position-relative">
                      <button
                        className="btn btn-primary btn-lg position-absolute top-0 end-0"
                        type="submit"
                        id="Search"
                      >
                        <i
                          class="fa fa-arrow-right fa-sm"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid mt-5 mb-5 pb-5 airlines_section">
              <AirlineCard isLoading={postlist.loading} posts={postlist.posts}/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
*/
    const [loading, setLoading] = useState(false);
    const [airlineListings, setAirlineListings] = useState([]);
    const [count, setCount] = useState(0);
    const [previous, setPrevious] = useState('');
    const [next, setNext] = useState('');
    const [active, setActive] = useState(1);


    const goSearch = (e) => {
      history.push({
        pathname: "/search/",
        search: "?search=" + airlineListing.search,
      });
      window.location.reload();
      let history = useHistory();

      setLoading(true);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/airlines/search`,
          {
            'name',
          },
          config
        )
        .then((res) => {
          setLoading(false);
          props.setListings(res.data);
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          setLoading(false);
          window.scrollTo(0, 0);
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/listings/?page=1`);

                setListings(res.data.results);
                setCount(res.data.count);
                setPrevious(res.data.previous);
                setNext(res.data.next);
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    const displayListings = () => {
        let display = [];
        let result = [];

        airlineListings.map(listing => {
            return display.push(
                <AirlineCard
                    title={listing.title}
                    main_photo={listing.main_photo}
                    slug={listing.slug}
                />
            );
        });

        for (let i = 0; i < airlineListings.length; i += 3) {
            result.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {display[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+1] ? display[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+2] ? display[i+2] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    const visitPage = (page) => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/listings/?page=${page}`)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            setActive(page);
        })
        .catch(err => {

          });
      };

    const previous_number = () => {
        axios.get(previous)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (previous)
                setActive(active-1);
          })
        .catch(err => {

          });
      };

    const next_number = () => {
        axios.get(next)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (next)
                setActive(active+1);
          })
        .catch(err => {

          });
      };
  
  


    return (
      <div className="airline_page">
        <main>
          <Helmet>
            <title>AVI PETS - Airlines</title>
            <meta name="description" content="AVI Pets Airline List" />
          </Helmet>
        </main>
        <Navbar />
        <div>
          <section className="container-fluid banner">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className="text-white text-center mt-3 pt-2">Airlines</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h2 className="text-center text-white mt-3 pt-4 pb-5 ms-0 me-0">
                  Find airline cargo locations, flight codes, and requirements.
                </h2>
              </div>
              <div className="center col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  className="img-fluid text-center mb-5"
                  src={airlineimg}
                  alt="airline"
                />
              </div>
            </div>
          </section>
          <section className="container bg-transparent">
            <div className="row">
              <div className="center col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h3 className="text-dark text-center">Find an Airline</h3>
              </div>
            </div>
            <div className="row align-items-center pt-5">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 col-sm-12 col-xs-12 mx-auto my-auto">
                <form className="form-group" action="">
                  <div className="input-group form-container">
                    <span className="input-group-text">
                      <i
                        class="fas fa-search-location search_airs fa-2x"
                        id="Search"
                      ></i>
                    </span>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={airlineListing.search}
						          onChange={(newValue) => setAirlineListing({ search: newValue })}
						          onRequestSearch={() => goSearch(airlineListing.search)}
                    />
                    <div className="input-group-append position-relative">
                      <button
                        className="btn btn_airs btn-lg position-absolute top-0 end-0"
                        type="submit"
                        id="Search"
                      >
                        <i
                          class="fa fa-arrow-right fa-sm"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid mt-5 mb-5 pb-5 airlines_section">
              {loading ? <div className='listingform__loader'>
              <Loader type="Oval" color="#424242"
                      height={50} width={50}
              />
            </div> : 
              {displayListings}
             }; 
            </div>
            <div className="row">
              <div className="col-xxl-12">
                {
                  airlineListing.length !== 0 ? (
                      <Pagination 
                        itemsPerPage={3}
                        count={count}
                        visitPage={visitPage}
                        previous={previous_number}
                        next={next_number}
                        active={active}
                        setActive={setActive}
                      />
                  ) : null
                }
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};
export default Airlines;
