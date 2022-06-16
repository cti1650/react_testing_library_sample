/**
* @jest-environment jsdom　　　　
*/

import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Button } from '@components/Parts';

describe("Buttonコンポーネント", () => {
  test("should first", () => {
    render(<Button />);
    expect(screen.getByText("Test")).toBeTruthy();
  });
});