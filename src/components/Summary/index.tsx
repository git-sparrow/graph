import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import UserCard from "./UserCard";

export default function Summary() {
  const users = useSelector((store: RootState) => store.users.users);

  // const carsOfDriver = Object.keys(state.cars)
  //     .map((carId: string) => state.cars[carId])
  //     .filter((car: Car) => car.driverId === driverId);

  return (
    <div>
      {users.map(user => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}
