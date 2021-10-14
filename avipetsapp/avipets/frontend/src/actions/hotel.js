import React, { Component } from "react";
import axios from "axios";


/*class Context extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      sortedRooms: [],
      checkedInRooms: [],
      filteredCheckedInRooms: [],
      loading: true,
      category_name: "all",
      capacity: "1",
      maxRoomSize: 0,
      minRoomSize: 0,
      reserved: false,
      searchKey: "",
    };
  }
  componentDidMount() {
    axios
      .get("/hotel/get_room_list/")
      .then((response) => {
        let maxRoomSize = parseInt(
          Math.max(...getUniqueValues(response.data, "room_size"))
        );
        let minRoomSize = parseInt(
          Math.min(...getUniqueValues(response.data, "room_size"))
        );
        

        this.setState({
          rooms: response.data,
          sortedRooms: response.data,
          maxRoomSize: maxRoomSize,
          minRoomSize: minRoomSize,
          loading: false,
        });
      })
      .then((response) => {
        if (this.state.isAdmin) {
          this.setCheckedInRooms();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
 
export default Context;

*/

export const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    // filterRooms is a call back function. This will be called only afer the state changes.
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

export const filterRooms = () => {
    let {
      rooms,
      category_name,
      capacity,
      minRoomSize,
      maxRoomSize,
      reserved,
    } = this.state;
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
    this.setState({
      sortedRooms: filtredRooms,
    });
  };

  

  export const setCheckedInRooms = () => {
      axios
        .get("/hotel/get_current_checked_in_rooms/")
        .then((response) => {
          this.setState({
            checkedInRooms: response.data,
            filteredCheckedInRooms: response.data,
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
  };

 export const handleCheckOut = (room_id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/hotel/checkout/", { pk: room_id }, config)
      .then((response) => {
        this.state.rooms.forEach((room) => {
          if (room.id === room_id) {
            room.is_booked = false;
          }
        });
        let updateCheckedInRooms = this.state.checkedInRooms.filter(
          (room) => room.room_id !== room_id
        );
        this.setState({
          checkedInRooms: updateCheckedInRooms,
          filteredCheckedInRooms: updateCheckedInRooms,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const handleBook = (id) => {
    this.state.rooms.forEach((room) => {
      if (room.id === id) {
        room.is_booked = true;
      }
    });
  };

  

  

export const handleSearchKey = (event) => {
    this.setState(
      {
        searchKey: event.target.value,
      },
      this.filterCheckedInRooms
    );
  };

export const filterCheckedInRooms = () => {
    if (this.state.searchKey !== "") {
      let searchedRooms = this.state.filteredCheckedInRooms.filter((room) =>
        room.room_slug.toString().includes(this.state.searchKey)
      );
      this.setState({
        filteredCheckedInRooms: searchedRooms,
      });
    } else {
      this.setState({
        filteredCheckedInRooms: this.state.checkedInRooms,
      });
    }
  };

  
