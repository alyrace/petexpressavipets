import React, {SetStateAction, useEffect} from 'react'
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import Table from "./Table";

const PetHotelDashBoard = () => {
    const [rooms, setRooms] = useState([]);
    const [sortedRooms ,setSortedRooms] = useState([]);
    const [checkedInRooms, setCheckedInRooms] = useState([]);
    const [filteredCheckedInRooms, setFilteredCheckedInRooms] = useState([]);
    //const [loading, setIsLoading] = useState(False);
    //const [error, setError] = useState(False);
    const [maxRoomSize, setMaxRoomSize] = useState(0);
    const [minRoomSize, setMinRoomSize] = useState(0);
    //const [reserved, setReserved] = useState(0);
    const [searchKey, setSearchKey] = useState(0);
    //const [category_name, setCategoryName] = useState("ALL");
    //const [capacity, setCapacity] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/pethotel/get_room_list/`
          );
          let maxRoomSize = parseInt(
            Math.max(...getUniqueValues(res.data, "room_size"))
          );
          let minRoomSize = parseInt(
            Math.min(...getUniqueValues(res.data, "room_size"))
          );
            setIsLoaded(true);
            setRooms(res.data);
            setSortedRooms(res.data);
            setMaxRoomSize(maxRoomSize);
            setMinRoomSize(minRoomSize);
            setLoadoading(false);
            setCheckedInRooms(res.dat.results);

          console.log(res.data.results);
          
        } catch (err) {
          setIsLoaded(true);
          setError(err);
        }
      };

      fetchData();
    }, []);

     /* const setCheckedInRooms = async () => {
        await axios.get(
            `${process.env.REACT_APP_API_URL}/pethotel/get_current_checked_in_rooms/`
        ).then((res)=>{

          setCheckedInRooms(res.data);
          setFilteredCheckedInRooms(res.data);

          console.log(res.data.results);
        }).catch((err) =>{
          setIsLoaded(true);
          setError(err);
        })
      };


      const handleCheckOut = async () => {
        await axios.post(
            `${process.env.REACT_APP_API_URL}/pethotel/checkout/`
          ).then(res =>{

           const getRooms = () => {
            return rooms?.map((room) => {
              if (room.id === room_id) {
                room.is_booked = false;
              }
            });
           }
            setRooms(getRooms)
        
          let updateCheckedInRooms = checkedInRooms.filter(
            (room) => room.room_id !== room_id
          );

          setCheckedInRooms(updateCheckedInRooms);
          setFilteredCheckedInRooms(updateCheckedInRooms);
          console.log(res.data.results);
          }). catch((err)=>{
          setIsLoaded(true);
          setError(err);
          })
      };

    const handleBook = (id) => {
      return rooms.forEach((room) => {
        if (room.id === id) {
          room.is_booked = true;
        }
      });
    };

*/    
    const filterCheckedInRooms = () => {
      if (searchKey !== "") {
        let searchedRooms = filteredCheckedInRooms.filter((room) =>
          room.room_slug.toString().includes(searchKey)
        );

        setFilteredCheckedInRooms(searchedRooms);
      } else {
        setFilteredCheckedInRooms(checkedInRooms);
      }
    };
    /*
    const filterRooms = () => {
      let filtredRooms = [...rooms];
      if (category_name !== "all") {
        filtredRooms = filtredRooms.filter(
          (room) => room.category_name === category_name
        );
      }
      if (capacity !== "1") {
        filtredRooms = filtredRooms.filter(
          (room) => room.capacity >= parseInt(capacity)
        );
      }

      filtredRooms = filtredRooms.filter(
        (room) =>
          room.room_size >= parseInt(minRoomSize) &&
          room.room_size <= parseInt(maxRoomSize)
      );

      if (reserved) {
        filtredRooms = filtredRooms.filter((room) => room.is_booked === false);
      }
      setFilteredCheckedInRooms(filterRooms);
    };

*/
    const columns = ["Room", "Scooby", "Pets", "Action"];
    return (
      <div className="container pt-5">
        <form>
          <div className="title my-2 text-center">
            <h4>List of Booked Rooms</h4>
          </div>
          <div className="row my-4">
            <div className="col-md-12 my-2">
              <input
                className="dashboard-input"
                name="searchKey"
                value={searchKey}
                type="text"
                placeholder="Enter room slug to search"
                onChange={(e) => setSearchKey(e.target.value, filterCheckedInRooms)}
              />
            </div>
          </div>
        </form>
        {/*rooms.length < 1 ? (
          <div>No Checkings</div>
        ) : (
          <Table
            //setRooms={setRooms}
            //setCheckedInRooms={setCheckedInRooms}
            //setFilter={setFilteredCheckedInRooms}
            columns={columns}
            checkout={checkout}
            rooms={filterCheckedInRooms}
          />
        )*/ }
      </div>
    );
}

export default PetHotelDashBoard
