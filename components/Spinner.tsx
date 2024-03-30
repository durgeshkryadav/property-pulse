"use client";
import { IProperty } from "@/interfaces/IProperty";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
export interface ISpinnerProps {
  loading: boolean;
}
const Spinner = ({ loading }: ISpinnerProps) => {
  return (
    <ClipLoader
      color='#3b82f6'
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
    />
  );
};
export default Spinner;
