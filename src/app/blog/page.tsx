import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router";
import { NavigationHeaderMenu } from "../app_wide_componente/navigation_menu";

export default function BlogTable() {
  return (
    <div
      className="
    absolute top-0 z-[-2] h-screen w-screen
    opacity-90
    bg-[url('/assets/city-from-above.jpg')]


    dark:bg-black
    dark:bg-[radial-gradient(100%_75%_at_50%_0%,rgba(0,163,255,0.13)_0%,transparent_50%,transparent_100%)]
 "
    >
      <NavigationHeaderMenu />

      <Table className="w-[77%] mx-auto border-separate bg-white border-spacing-y-1 mt-4 rounded-md border-blue-200 px-1 py-1 dark:border-slate-400 dark:bg-transparent">
        <TableCaption>A list of my thoughts throughtout time.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Blog Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Word Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              d51a89ae-4bfb-491f-93ab-ad19195ec0c7
            </TableCell>
            <TableCell>
              <Link
                to="/loneliness"
                className="border-blue-100 font-bold size-2 border-2 px-2 py-2 rounded-md underline text-shadow-blue-200"
              >
                Lonliness
              </Link>
            </TableCell>
            <TableCell>Internal Dialogue</TableCell>
            <TableCell className="text-right">500.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
