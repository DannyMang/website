import React from 'react';
import { NavbarDemo } from '../Navbar';
import { MaskContainer } from './MaskContainer'; // Adjust the path as necessary

export function Homepage() {
  return (
    <div className="pt-2 pb-10">
      <NavbarDemo />
      {/* Adjusted styles for positioning and size */}
      <div className="text-center mt-20 md:mt-32">
        <h1 className="text-6xl font-bold">Daniel Ung</h1>
        <h2 className="text-3xl">Computer Science at San Jose State University</h2>
      </div>
      {/* Mask container for the hidden/reveal part */}
      <MaskContainer
        revealText="{hover here}"
        size={10}
        revealSize={600}
        className="text-center"
      >
        {/* This content will be hidden and shown based on hover */}
        <p>Here's some more detailed information or a call to action when you hover over!</p>
      </MaskContainer>
    </div>
  );
};
