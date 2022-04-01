import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";

export default function Header({ placeholder }) {
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection"
  };

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests
      }
    });

    setSearchValue("");
  }

  return (
    <header className="fixed top-0 z-50 w-full grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Link href="/">
          <a>
            <Image
              src="/airbnb-logo.png"
              alt="Airbnb"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </a>
        </Link>
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          value={searchValue}
          placeholder={placeholder || "Start your search"}
          onChange={e => setSearchValue(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchValue && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min="1"
              className="w-12 pl-2 text-red-400 outline-none"
              value={numOfGuests}
              onChange={e => setNumOfGuests(e.target.valaue)}
            />
          </div>
          <div className="flex">
            <button
              onClick={() => setSearchValue("")}
              className="flex-grow text-gray-500"
            >Cancel</button>
            <button
              onClick={handleSearch}
              className="flex-grow text-red-400"
            >Search</button>
          </div>
        </div>
      )}
    </header>
  );
}