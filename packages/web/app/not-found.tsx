import { redirect } from "next/navigation";

export interface NotFoundProps {}

const NotFound = ({}: NotFoundProps) => {
  redirect("/");
};

export default NotFound;
