import React from "react"
import DropDown from "../drop-down/drop-down"

export default function Header() {
    return (
      <React.Fragment>
        <header className="p-header bg-bg-header w-full flex justify-end items-center h-[61px] border-solid border-b border-line-header shadow-shadow-md">
            <DropDown/>
        </header>
      </React.Fragment>
    );
}