import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TransactionsTable() {
  return (
    <Card className="p-3">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time ago</TableHead>
              <TableHead className="table-cell">
                Submitter
              </TableHead>
              <TableHead className="table-cell">
                Status
              </TableHead>
              <TableHead className="table-cell">
                Transaction
              </TableHead>
              <TableHead className="text-right">
                Size
              </TableHead>
              <TableHead className="text-right">
                Block
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>20 sec </TableCell>
              <TableCell className="table-cell hover:cursor-pointer">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="table-cell">
                <Badge
                  className="text-xs"
                  variant="default"
                >
                  Submitted
                </Badge>
              </TableCell>
              <TableCell className="table-cell">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="text-right">
                250 KB
              </TableCell>
              <TableCell className="text-right">
                104238408
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>53 sec </TableCell>
              <TableCell className="table-cell  hover:cursor-pointer">
                nitro.topgunbakugo.near
              </TableCell>
              <TableCell className="table-cell">
                <Badge
                  className="text-xs"
                  variant="destructive"
                >
                  Failed
                </Badge>
              </TableCell>
              <TableCell className="table-cell">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="text-right">
                250 KB
              </TableCell>
              <TableCell className="text-right">
                104238408
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5 min </TableCell>
              <TableCell className="table-cell hover:cursor-pointer">
                nitro.topgunbakugo.near
              </TableCell>
              <TableCell className="table-cell">
                <Badge
                  className="text-xs"
                  variant="outline"
                >
                  Queued
                </Badge>
              </TableCell>
              <TableCell className="table-cell">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="text-right">
                250 KB
              </TableCell>
              <TableCell className="text-right">
                104238408
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5 min </TableCell>
              <TableCell className="table-cell  hover:cursor-pointer">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="table-cell">
                <Badge
                  className="text-xs"
                  variant="outline"
                >
                  Requested
                </Badge>
              </TableCell>
              <TableCell className="table-cell">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="text-right">
                250 KB
              </TableCell>
              <TableCell className="text-right">
                104238408
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7 min </TableCell>
              <TableCell className="table-cell  hover:cursor-pointer">
                nitro.topgunbakugo.near
              </TableCell>
              <TableCell className="table-cell">
                <Badge
                  className="text-xs"
                  variant="default"
                >
                  Submitted
                </Badge>
              </TableCell>
              <TableCell className="table-cell">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="text-right">
                250 KB
              </TableCell>
              <TableCell className="text-right">
                104238408
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>40 min </TableCell>
              <TableCell className="table-cell  hover:cursor-pointer">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="table-cell">
                <Badge
                  className="text-xs"
                  variant="default"
                >
                  Verified
                </Badge>
              </TableCell>
              <TableCell className="table-cell">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="text-right">
                250 KB
              </TableCell>
              <TableCell className="text-right">
                104238408
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2 hrs </TableCell>
              <TableCell className="table-cell  hover:cursor-pointer">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="table-cell">
                <Badge
                  className="text-xs"
                  variant="default"
                >
                  Submitted
                </Badge>
              </TableCell>
              <TableCell className="table-cell">
                0x03ef...9a4fgh
              </TableCell>
              <TableCell className="text-right">
                250 KB
              </TableCell>
              <TableCell className="text-right">
                104238408
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
