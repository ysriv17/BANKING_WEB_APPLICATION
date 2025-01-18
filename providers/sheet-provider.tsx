"use client";
import { useMountedState } from "react-use";
import { NewAccountSheet } from "@/features/accounts/Components/new-accounts-sheet";
export const Sheetprovider = () => {
  const isMounted = useMountedState();
  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
    </>
  );
};
